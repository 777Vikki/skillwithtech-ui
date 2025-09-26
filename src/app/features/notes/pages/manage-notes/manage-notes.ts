import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ManageNotesForm } from '../../components/manage-notes-form/manage-notes-form';
import { CardModule } from 'primeng/card';
import { ManageNotesCrud } from '../../components/manage-notes-crud/manage-notes-crud';
import { ManageNotesAction } from '../../components/manage-notes-action/manage-notes-action';
import { SharedNotesService } from '../../services/shared-notes';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-manage-notes',
  imports: [NgClass, CardModule, ManageNotesAction, ManageNotesCrud, ManageNotesForm],
  templateUrl: './manage-notes.html',
  styleUrl: './manage-notes.scss',
  providers: [MessageService]
})
export class ManageNotes {
  private sharedNotesService = inject(SharedNotesService);

  currentAction = this.sharedNotesService.manageNoteCurrentAction;
}
