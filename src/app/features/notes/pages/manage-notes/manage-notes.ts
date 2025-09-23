import { NgClass, NgTemplateOutlet } from '@angular/common';
import { AfterViewInit, Component, HostListener, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
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


@Component({
  selector: 'app-manage-notes',
  imports: [NgClass, ButtonModule, CardModule, SelectModule, FormsModule, Toast, ConfirmDialogModule, ManageNotesCrud, ManageNotesForm],
  templateUrl: './manage-notes.html',
  styleUrl: './manage-notes.scss',
  providers: [MessageService, ConfirmationService]
})
export class ManageNotes implements OnInit, OnDestroy {
  private notesService = inject(NotesService);
  private storeService = inject(StoreService)

  subscriptions: Subscription[] = [];
  sections: ISection[] = [];
  selectedAction: IManageNotesAction | undefined;
  isMobile = this.storeService.checkMobileScreen();

  actions: IManageNotesAction[] = [
    {
      name: "Add Section",
      id: "Add_Section",
      type: "Section"
    },
    {
      name: "Add Sub Section",
      id: "Add_Sub_Section",
      type: "Sub_Section"
    },
    {
      name: "Add Content",
      id: "Add_Content",
      type: "Content"
    },
    {
      name: "Add Bulk Content",
      id: "Add_Bulk_Content",
      type: "Content"
    }
  ];

  ngOnInit(): void {
    this.subscriptions.push(
      this.notesService.getNotesSection()
        .subscribe((res: ISection[]) => {
          this.sections = res;
          })
    );
  }

  onSelectAction() {
    this.selectedAction = this.actions.find(d => d.id === "Add_Section");
  }

  onRearrange() {
    this.selectedAction = undefined;
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }
}
