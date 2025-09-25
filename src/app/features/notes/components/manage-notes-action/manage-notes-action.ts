import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ISection } from '../../../../core/interfaces/note-interface';
import { FormsModule } from '@angular/forms';
import { IManageNotesAction } from '../../../../core/interfaces/manage-notes-action-interface';
import { NotesService } from '../../../../core/services/notes';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { StoreService } from '../../../../core/services/store';
import { SharedNotesService } from '../../services/shared-notes';
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

  sections = signal<ISection[]>([]);
  selectedAction = signal<IManageNotesAction | undefined>(undefined);
  actions = signal<IManageNotesAction[]>(this.storeService.getManageNotesActions());

  ngOnInit(): void {
    this.getCurrentAction();
    this.getSections();
  }

  getCurrentAction() {
    this.sharedNotesService.getCurrentActionObservable()
      .subscribe((action: IManageNotesAction | undefined) => {
        this.selectedAction.set(action);
        
      });
  }

  getSections() {
    this.notesService.getNotesSection().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((sec: ISection[]) => {
        this.sections.set(sec);
      });
  }

  onSelectAction(e: DropdownChangeEvent | Event) {
    this.sharedNotesService.setCurrectActionRowDetail(undefined, '');
    if ('value' in e) {
      const action = e.value as (IManageNotesAction | undefined);
      this.selectedAction.set(action)
      this.sharedNotesService.setCurrentActionObservable(action);
    } else {
      const action = this.actions().find(d => d.type === "Section" && d.id === "Add_Section");
      this.sharedNotesService.setCurrentActionObservable(action);
    }
  }

  onRearrange() {

  }
}
