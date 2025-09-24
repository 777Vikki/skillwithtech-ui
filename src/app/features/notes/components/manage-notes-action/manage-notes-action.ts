import { Component, DestroyRef, effect, inject, OnDestroy, OnInit } from '@angular/core';
import { ISection } from '../../../../core/interfaces/note-interface';
import { FormsModule } from '@angular/forms';
import { IManageNotesAction } from '../../../../core/interfaces/manage-notes-action-interface';
import { Subscription } from 'rxjs';
import { NotesService } from '../../../../core/services/notes';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { StoreService } from '../../../../core/services/store';
import { SharedNotesService } from '../../services/shared-notes';
import { BaseComponent } from 'primeng/basecomponent';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
export class ManageNotesAction implements OnInit {
  private notesService = inject(NotesService);
  private storeService = inject(StoreService);
  private sharedNotesService = inject(SharedNotesService);
  private destroyRef = inject(DestroyRef);

  sections: ISection[] = [];
  selectedAction = this.sharedNotesService.manageNotesAction;

  actions: IManageNotesAction[] = this.storeService.getManageNotesActions();

  ngOnInit(): void {
    this.notesService.getNotesSection().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((sec: ISection[]) => {
        this.sections = sec;
      })
  }

  onSelectAction(e: DropdownChangeEvent | Event) {
    if ('value' in e) {
      const selectedAction = e.value as (IManageNotesAction | undefined);
      this.sharedNotesService.setManageNotesAction(selectedAction);
    } else {
      const selectedAction = this.actions.find(d => d.type === "Section" && d.id === "Add_Section");
      this.sharedNotesService.setManageNotesAction(selectedAction);
    }
  }

  onRearrange() {

  }
}
