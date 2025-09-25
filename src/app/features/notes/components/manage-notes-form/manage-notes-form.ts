import { Component, DestroyRef, EventEmitter, inject, Input, OnChanges, OnInit, Output, signal, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ISection, ISubSection, ITopic } from '../../../../core/interfaces/note-interface';
import { SelectModule } from 'primeng/select';
import { NotesService } from '../../../../core/services/notes';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { IManageNotesAction } from '../../../../core/interfaces/manage-notes-action-interface';
import { StoreService } from '../../../../core/services/store';
import { PlainTextPipe } from '../../../../core/pipes/plain-text-pipe';
import { SharedNotesService } from '../../services/shared-notes';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-manage-notes-form',
  imports: [ReactiveFormsModule, RadioButtonModule, SelectModule, EditorModule, ButtonModule, PlainTextPipe],
  templateUrl: './manage-notes-form.html',
  styleUrl: './manage-notes-form.scss'
})
export class ManageNotesForm implements OnInit {
  private notesService = inject(NotesService);
  private formBuilder = inject(FormBuilder);
  private storeService = inject(StoreService);
  private sharedNotesService = inject(SharedNotesService);
  private destroyRef = inject(DestroyRef);

  @Input() selectedAction: IManageNotesAction | undefined;

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
          } else if(currentActionId === "Add_Sub_Section") {
            this.addSubSection();
          } else if(currentActionId === "Add_Content") {
            this.addContent();
          } else if(currentActionId === "Edit_Content") {
            this.editContent();
          } else if(currentActionId === "Edit_Sub_Section") {
            this.editSubSection();
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
      this.notesForm.addControl('contentId', new FormControl(contentId, [Validators.required]));
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
    const sectionId = section?.sectionId? section.sectionId : null;
    const name = section?.name? section.name : '';
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

  }

  submitAddSubSectionForm() {

  }

  submitAddContentForm() {

  }

  submitEditSectionForm() {

  }

  submitEditSubSectionForm() {

  }

  submitEditContentForm() {

  }

  submitForm() {
    console.log(this.notesForm.getRawValue());
  }
}
