import { Component, DestroyRef, EventEmitter, inject, Input, OnChanges, OnInit, Output, signal, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { IEditContentRequest, IEditSectionRequest, IEditSubSectionRequest, ISection, ISubSection, ITopic } from '../../../../core/interfaces/note-interface';
import { SelectModule } from 'primeng/select';
import { NotesService } from '../../../../core/services/notes';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { IManageNotesAction } from '../../../../core/interfaces/manage-notes-action-interface';
import { StoreService } from '../../../../core/services/store';
import { PlainTextPipe } from '../../../../core/pipes/plain-text-pipe';
import { SharedNotesService } from '../../services/shared-notes';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { IResponse } from '../../../../core/interfaces/response-interface';
import { MessageService } from 'primeng/api';
import { Toast } from 'primeng/toast';

@Component({
  selector: 'app-manage-notes-form',
  imports: [ReactiveFormsModule, RadioButtonModule, SelectModule, EditorModule, ButtonModule, PlainTextPipe, Toast],
  templateUrl: './manage-notes-form.html',
  styleUrl: './manage-notes-form.scss',
  providers: [MessageService]
})
export class ManageNotesForm implements OnInit {
  private notesService = inject(NotesService);
  private formBuilder = inject(FormBuilder);
  private storeService = inject(StoreService);
  private sharedNotesService = inject(SharedNotesService);
  private destroyRef = inject(DestroyRef);
  private messageService = inject(MessageService);

  sections = signal<ISection[]>([]);
  subSections: ISubSection[] = [];
  contents: ITopic[] = [];
  previewList: string[] = [];
  currentAction = signal<IManageNotesAction | undefined>(undefined);
  notesForm: FormGroup = this.formBuilder.group({});

  ngOnInit(): void {
    this.getSections();
    this.getCurrentAction();
  }

  getSections() {
    this.notesService.getNotesSection()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((sec: ISection[]) => {
        this.sections.set(sec);
      });
  }

  getCurrentAction() {
    this.sharedNotesService.getCurrentActionObservable()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((action: IManageNotesAction | undefined) => {
        this.currentAction.set(action);
        const currentActionId = this.currentAction()?.id;
        if (this.currentAction != null) {
          if (currentActionId === "Add_Section") {
            this.addSection();
          } else if (currentActionId === "Add_Sub_Section") {
            this.addSubSection();
          } else if (currentActionId === "Add_Content") {
            this.addContent();
          } else if (currentActionId === "Edit_Section") {
            this.editSection();
          } else if (currentActionId === "Edit_Sub_Section") {
            this.editSubSection();
          } else if (currentActionId === "Edit_Content") {
            this.editContent();
          } else if (currentActionId === "Add_Bulk_Content") {
            this.addSection();
          }
        }
      });
  }

  addSection() {
    this.removeFormControls();
    this.subSections = [];
    this.contents = [];
    const section: ISection | undefined = this.sharedNotesService.currentActionRow() as ISection;
    const position = this.sharedNotesService.applyActionPosition();
    const sectionId = (section?.sectionId != null || section?.sectionId > 0) ? section.sectionId : null;
    this.notesForm.addControl('sectionId', new FormControl(sectionId, [Validators.required]));
    this.notesForm.addControl('text', new FormControl('', [Validators.required]));
    this.notesForm.addControl('position', new FormControl(position, [Validators.required]));
  }

  addSubSection() {
    this.subSections = [];
    this.contents = [];
    this.removeFormControls();
    const subSection: ISubSection | undefined = this.sharedNotesService.currentActionRow() as ISubSection;
    const position = this.sharedNotesService.applyActionPosition();
    const sectionId = (subSection?.sectionId != null && subSection?.sectionId > 0) ? subSection.sectionId : null;
    const subSectionId = (subSection?.subSectionId != null && subSection?.subSectionId > 0) ? subSection.subSectionId : null;
    this.subSections = sectionId ? (this.sections().find(d => d.sectionId === subSection?.sectionId)?.subSections ?? []) : [];
    this.notesForm.addControl('sectionId', new FormControl(sectionId, [Validators.required]));
    this.notesForm.addControl('subSectionId', new FormControl(subSectionId));
    this.notesForm.addControl('text', new FormControl('', [Validators.required]));
    if (subSectionId) {
      this.notesForm.addControl('position', new FormControl(position, [Validators.required]));
    }
    this.setSubSectionControl();
  }

  addContent() {
    this.removeFormControls();
    this.subSections = [];
    this.contents = [];
    const content = this.sharedNotesService.currentActionRow() as ITopic;
    const position = this.sharedNotesService.applyActionPosition();
    const sectionId = (content?.sectionId != null && content?.sectionId > 0) ? content.sectionId : null;
    const subSectionId = (content?.subSectionId != null && content?.subSectionId > 0) ? content.subSectionId : null;
    const contentId = (content?.topicId != null && content?.topicId > 0) ? content.topicId : null;
    if (sectionId) {
      if (subSectionId) {
        this.subSections = sectionId ? (this.sections().find(d => d.sectionId === sectionId)?.subSections ?? []) : [];
        this.contents = subSectionId ? (this.subSections.find(d => d.subSectionId === content.subSectionId)?.topics ?? []) : [];
      } else {
        this.contents = sectionId ? (this.sections().find(d => d.sectionId === content.sectionId)?.topics ?? []) : [];
      }
    }
    this.notesForm.addControl('sectionId', new FormControl(sectionId, [Validators.required]));
    this.notesForm.addControl('subSectionId', new FormControl(subSectionId));
    this.notesForm.addControl('text', new FormControl('', [Validators.required]));
    if (contentId) {
      this.notesForm.addControl('contentId', new FormControl(contentId));
      this.notesForm.addControl('position', new FormControl(position, [Validators.required]));
    } else {
      this.notesForm.addControl('contentId', new FormControl(contentId));
    }
    this.setContentControl();
  }

  editSection() {
    this.removeFormControls();
    this.contents = [];
    this.subSections = [];
    const section = this.sharedNotesService.currentActionRow() as ISection;
    const sectionId = section?.sectionId ? section.sectionId : null;
    const name = section?.name ? section.name : '';
    this.notesForm.addControl('sectionId', new FormControl({ value: sectionId, disabled: true }, [Validators.required]));
    this.notesForm.addControl('text', new FormControl(name, [Validators.required]));
  }

  editSubSection() {
    this.removeFormControls();
    this.contents = [];
    this.subSections = [];
    const subSection = this.sharedNotesService.currentActionRow() as ISubSection;
    const sectionId = (subSection?.sectionId != null && subSection?.sectionId > 0) ? subSection.sectionId : null;
    const subSectionId = (subSection?.subSectionId != null && subSection?.subSectionId > 0) ? subSection.subSectionId : null;
    this.subSections = sectionId ? (this.sections().find(d => d.sectionId === sectionId)?.subSections ?? []) : [];
    this.notesForm.addControl('sectionId', new FormControl({ value: sectionId, disabled: true }, [Validators.required]));
    this.notesForm.addControl('subSectionId', new FormControl({ value: subSectionId, disabled: true }, [Validators.required]));
    this.notesForm.addControl('text', new FormControl(subSection.name, [Validators.required]));
  }

  editContent() {
    this.removeFormControls();
    this.contents = [];
    this.subSections = [];
    const content = this.sharedNotesService.currentActionRow() as ITopic;
    const sectionId = (content?.sectionId != null && content?.sectionId > 0) ? content.sectionId : null;
    const subSectionId = (content?.subSectionId != null && content?.subSectionId > 0) ? content.subSectionId : null;
    const contentId = (content?.topicId != null && content?.topicId > 0) ? content.topicId : null;
    if (subSectionId) {
      this.subSections = sectionId ? (this.sections().find(d => d.sectionId === sectionId)?.subSections ?? []) : [];
      this.notesForm.addControl('subSectionId', new FormControl({ value: subSectionId, disabled: true }));
      this.contents = this.subSections.find(d => d.subSectionId === subSectionId)?.topics ?? [];
    } else {
      this.contents = sectionId ? (this.sections().find(d => d.sectionId === content.sectionId)?.topics || []) : [];
    }
    this.notesForm.addControl('sectionId', new FormControl({ value: sectionId, disabled: true }));
    this.notesForm.addControl('text', new FormControl(content.text, [Validators.required]));
    this.notesForm.addControl('contentId', new FormControl({ value: contentId, disabled: true }));
  }

  setContentControl() {
    this.notesForm.get('sectionId')?.valueChanges.subscribe(value => {
      if (value != null && value > 0) {
        this.subSections = this.sections().find(d => d.sectionId === value)?.subSections ?? [];
        this.contents = this.sections().find(d => d.sectionId === value)?.topics ?? [];
      } else {
        this.subSections = [];
        this.contents = [];
      }
      this.notesForm.patchValue({
        contentId: null,
        subSectionId: null,
      });
    });

    this.notesForm.get('subSectionId')?.valueChanges.subscribe(value => {
      this.contents = (value != null && value > 0) ? (this.subSections.find(d => d.subSectionId === value)?.topics ?? []) : this.contents;
      this.notesForm.patchValue({
        contentId: null,
      });
    });

    this.notesForm.get('contentId')?.valueChanges.subscribe(value => {
      if (value != null && value > 0) {
        if (!this.notesForm.get('position')) {
          this.notesForm.addControl('position', new FormControl('', [Validators.required]));
        }
      } else {
        if (this.notesForm.get('position')) {
          this.notesForm.removeControl('position');
        }
      }
    });
  }

  setSubSectionControl() {
    this.notesForm.get('sectionId')?.valueChanges.subscribe(value => {
      this.subSections = (value != null && value > 0) ? (this.sections().find(d => d.sectionId === value)?.subSections ?? []) : [];
      this.notesForm.patchValue({
        subSectionId: null,
      });
    });

    this.notesForm.get('subSectionId')?.valueChanges.subscribe(value => {
      if (value != null && value > 0) {
        if (!this.notesForm.get('position')) {
          this.notesForm.addControl('position', new FormControl('', [Validators.required]));
        }
      } else {
        if (this.notesForm.get('position')) {
          this.notesForm.removeControl('position');
        }
      }
    });
  }

  removeFormControls() {
    Object.keys(this.notesForm.controls).forEach(key => {
      this.notesForm.removeControl(key);
    });
  }

  onClose() {
    this.sharedNotesService.setCurrentActionObservable(undefined);
  }

  submitAddSectionForm() {
    const formValue = this.notesForm.getRawValue();
    const editorText = this.notesService.removeUnusedTag(formValue.text ?? '');
    const section: ISection = {
      name: editorText,
      sectionId: 0,
      noteType: this.notesService.getSelectedNotes().type,
      topics: [],
      subSections: [],
    };
    const index = this.sections().length > 0 ? this.sections().findIndex(d => d.sectionId === formValue.sectionId) + Number(formValue.position) : 0;
    this.notesService.onAddSection(section, index).subscribe((res: IResponse) => {
      if (res?.status) {
        if (res.data != null && res.data.length > 0) {
          const responseSection = res.data[0];
          const position = formValue?.position ? formValue.position : '1';
          this.sharedNotesService.setCurrectActionRowDetail(responseSection, position);
          this.sharedNotesService.setCurrentActionObservable(this.currentAction());
        }
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Section is created successfully.' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    })
  }

  submitAddSubSectionForm() {
    const formValue = this.notesForm.getRawValue();
    const editorText = this.notesService.removeUnusedTag(formValue.text ?? '');
    const subSection: ISubSection = {
      name: editorText,
      sectionId: formValue.sectionId,
      subSectionId: 0,
      noteType: this.notesService.getSelectedNotes().type,
      topics: [],
    };
    const sectionIndex = this.sections().findIndex(d => d.sectionId === formValue.sectionId);
    let subSectionIndex = 0;
    if (formValue.subSectionId) {
      subSectionIndex = this.subSections.findIndex(d => d.subSectionId === formValue.subSectionId) + Number(formValue.position);
    } else {
      subSectionIndex = this.sections()[sectionIndex].subSections.length;
    }
    this.notesService.onAddSubSection(subSection, sectionIndex, subSectionIndex).subscribe((res: IResponse) => {
      if (res?.status) {
        if (res.data != null && res.data.length > 0) {
          const subSection = res.data[0];
          const position = formValue?.position ? formValue.position : '1';
          this.sharedNotesService.setCurrectActionRowDetail(subSection, position);
          this.sharedNotesService.setCurrentActionObservable(this.currentAction());
        }
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Section is created successfully.' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    })
  }

  submitAddContentForm() {
    const formValue = this.notesForm.getRawValue();
    const editorText = this.notesService.removeUnusedTag(formValue.text ?? '');
    const content: ITopic = {
      text: editorText,
      sectionId: formValue.sectionId,
      subSectionId: -1,
      noteType: this.notesService.getSelectedNotes().type,
      topicId: -1,
      description: ''
    };
    const sectionIndex = this.sections().findIndex(d => d.sectionId === formValue.sectionId);
    let subSectionIndex = -1;
    let contentIndex = 0;

    if (formValue.subSectionId > 0) {
      content.subSectionId = formValue.subSectionId ?? -1;
      subSectionIndex = this.subSections.findIndex(d => d.subSectionId === content.subSectionId);
    }

    if (formValue.contentId > 0) {
      contentIndex = this.contents.length > 0 ? this.contents.findIndex(d => d.topicId === formValue.contentId) + Number(formValue.position) : 0;
    } else {
      if (subSectionIndex > -1) {
        contentIndex = this.subSections[subSectionIndex].topics.length;
      } else {
        contentIndex = this.sections()[sectionIndex].topics.length;
      }
    }
    const isBulkContent = this.currentAction()?.id === "Add_Bulk_Content";
    this.notesService.onAddContent(content, sectionIndex, subSectionIndex, contentIndex, isBulkContent).subscribe((res: IResponse) => {
      if (res?.status) {
        if (res.data && res.data.length > 0) {
          if (isBulkContent) {
            this.sharedNotesService.setCurrectActionRowDetail(undefined, '');
            this.sharedNotesService.setCurrentActionObservable(this.currentAction());
            if (res.message === "Some Contents are dublicates.") {
              this.messageService.add({ severity: 'warning', summary: 'Warning', detail: res.message });
            } else {
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Contents are created successfully.' });
            }
          } else {
            const responseSection = res.data[0];
            const position = formValue?.position ? formValue.position : '1';
            this.sharedNotesService.setCurrectActionRowDetail(responseSection, position);
            this.sharedNotesService.setCurrentActionObservable(this.currentAction());
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Content is created successfully.' });
          }
        }
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    });
  }

  submitEditSectionForm() {
    const formValue = this.notesForm.getRawValue();
    const editorText = this.notesService.removeUnusedTag(formValue.text ?? '');
    const section: IEditSectionRequest = {
      name: editorText,
      sectionId: formValue.sectionId,
      noteType: this.notesService.getSelectedNotes().type
    };
    this.notesService.onEditSection(section).subscribe((res: IResponse) => {
      if (res?.status) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Section is successfully updated.' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    })
  }

  submitEditSubSectionForm() {
    const formValue = this.notesForm.getRawValue();
    const editorText = this.notesService.removeUnusedTag(formValue.text ?? '');
    const subSection: IEditSubSectionRequest = {
      name: editorText,
      sectionId: formValue.sectionId,
      subSectionId: formValue.subSectionId,
      noteType: this.notesService.getSelectedNotes().type,
    }
    this.notesService.onEditSubSection(subSection).subscribe((res: IResponse) => {
      if (res?.status) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Section is successfully updated.' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    });
  }

  submitEditContentForm() {
    const formValue = this.notesForm.getRawValue();
    const editorText = this.notesService.removeUnusedTag(formValue.text ?? '');
    const content: IEditContentRequest = {
      text: editorText,
      sectionId: formValue.sectionId,
      subSectionId: formValue.subSectionId,
      topicId: formValue.contentId
    }
    this.notesService.onEditContent(content).subscribe((res: IResponse) => {
      if (res?.status) {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Content is successfully updated.' });
      } else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
      }
    });
  }

  submitForm() {
    if (this.notesForm.valid) {
      const currentActionId = this.currentAction()?.id;
      if (this.currentAction != null) {
        if (currentActionId === "Add_Section") {
          this.submitAddSectionForm();
        } else if (currentActionId === "Add_Sub_Section") {
          this.submitAddSubSectionForm();
        } else if (currentActionId === "Add_Content") {
          this.submitAddContentForm();
        } else if (currentActionId === "Edit_Section") {
          this.submitEditSectionForm();
        } else if (currentActionId === "Edit_Sub_Section") {
          this.submitEditSubSectionForm();
        } else if (currentActionId === "Edit_Content") {
          this.submitEditContentForm();
        } else if (currentActionId === "Add_Bulk_Content") {
          this.submitAddContentForm();
        }
      }
    }
  }
}
