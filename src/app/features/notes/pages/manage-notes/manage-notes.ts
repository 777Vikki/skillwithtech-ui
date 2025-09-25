import { NgClass } from '@angular/common';
import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { NotesService } from '../../../../core/services/notes';
import { IManageNotesAction } from '../../../../core/interfaces/manage-notes-action-interface';
import { ManageNotesForm } from '../../components/manage-notes-form/manage-notes-form';
import { CardModule } from 'primeng/card';
import { Toast } from 'primeng/toast';
import { ManageNotesCrud } from '../../components/manage-notes-crud/manage-notes-crud';
import { ManageNotesAction } from '../../components/manage-notes-action/manage-notes-action';
import { SharedNotesService } from '../../services/shared-notes';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-manage-notes',
  imports: [NgClass, CardModule, Toast, ManageNotesAction, ManageNotesCrud, ManageNotesForm],
  templateUrl: './manage-notes.html',
  styleUrl: './manage-notes.scss',
  providers: [MessageService]
})
export class ManageNotes implements OnInit {
  private sharedNotesService = inject(SharedNotesService);
  private destroyRef = inject(DestroyRef);

  currentAction = signal<IManageNotesAction | undefined>(undefined);
  
  ngOnInit(): void {
    this.sharedNotesService.getCurrentActionObservable()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((action: IManageNotesAction | undefined) => {
        this.currentAction.set(action);
      });
  }
}
