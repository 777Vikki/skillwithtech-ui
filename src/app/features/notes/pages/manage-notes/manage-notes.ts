import { NgClass, NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, Component, DestroyRef, HostListener, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { NotesService } from '../../../../core/services/notes';
import { IEditContentRequest, IEditSectionRequest, IEditSubSectionRequest, ISection, ISubSection, ITopic } from '../../../../core/interfaces/note-interface';
import { IManageNotesAction, ManageNotesIdType } from '../../../../core/interfaces/manage-notes-action-interface';
import { ManageNotesForm } from '../../components/manage-notes-form/manage-notes-form';
import { IResponse } from '../../../../core/interfaces/response-interface';
import { CardModule } from 'primeng/card';
import { StoreService } from '../../../../core/services/store';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Toast } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ManageNotesCrud } from '../../components/manage-notes-crud/manage-notes-crud';
import { ManageNotesAction } from '../../components/manage-notes-action/manage-notes-action';
import { SharedNotesService } from '../../services/shared-notes';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-manage-notes',
  imports: [NgClass, CardModule, Toast, ConfirmDialogModule, ManageNotesAction, ManageNotesCrud, ManageNotesForm],
  templateUrl: './manage-notes.html',
  styleUrl: './manage-notes.scss',
  providers: [MessageService, ConfirmationService]
})
export class ManageNotes implements OnInit {
  private notesService = inject(NotesService);
  private sharedNotesService = inject(SharedNotesService);
  private destroyRef = inject(DestroyRef);

  sections: ISection[] = [];
  selectedAction = this.sharedNotesService.manageNotesAction;

  actions: IManageNotesAction[] = [];

  ngOnInit(): void {
    this.notesService.getNotesSection().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((res: ISection[]) => {
        this.sections = res;
      })
  }
}
