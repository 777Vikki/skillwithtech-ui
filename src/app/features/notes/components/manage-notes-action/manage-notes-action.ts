import { Component, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { ISection } from '../../../../core/interfaces/note-interface';
import { FormsModule } from '@angular/forms';
import { IManageNotesAction } from '../../../../core/interfaces/manage-notes-action-interface';
import { Subscription } from 'rxjs';
import { NotesService } from '../../../../core/services/notes';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { StoreService } from '../../../../core/services/store';
import { SharedNotesService } from '../../services/shared-notes';

interface DropdownChangeEvent {
  originalEvent: Event; // could also use MouseEvent
  value: any;           // adjust type as per your data model
}

@Component({
  selector: 'app-manage-notes-action',
  imports: [FormsModule, ButtonModule, SelectModule],
  templateUrl: './manage-notes-action.html',
  styleUrl: './manage-notes-action.scss'
})
export class ManageNotesAction implements OnInit, OnDestroy {
  private notesService = inject(NotesService);
  private storeService = inject(StoreService);
  private sharedNotesService = inject(SharedNotesService);

  sections: ISection[] = [];
  selectedAction = this.sharedNotesService.manageNotesAction;
  subscriptions: Subscription[] = [];

  actions: IManageNotesAction[] = this.storeService.getManageNotesActions();

  constructor() {
  }

  ngOnInit(): void {
    this.subscriptions.push(
      this.notesService.getNotesSection()
        .subscribe((sec: ISection[]) => {
          this.sections = sec;
        })
    )
  }

  onSelectAction(e: DropdownChangeEvent | Event) {
    if('value' in e) {
      const selectedAction = e.value as (IManageNotesAction | undefined);
      this.sharedNotesService.setManageNotesAction(selectedAction);
    } else {
      const selectedAction = this.actions.find(d => d.type === "Section" && d.id === "Add_Section");
      this.sharedNotesService.setManageNotesAction(selectedAction);
    }
  }

  onRearrange() {

  }

  ngOnDestroy(): void {
    if (this.subscriptions.length > 0) {
      this.subscriptions.forEach((subscription: Subscription) => {
        subscription.unsubscribe();
      });
    }
    this.subscriptions = [];
  }
}
