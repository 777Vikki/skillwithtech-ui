import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { IEditSectionRequest, IEditSubSectionRequest, ISection, ISubSection, ITopic } from '../../../../core/interfaces/note-interface';
import { SelectModule } from 'primeng/select';
import { NotesService } from '../../../../core/services/notes';
import { ButtonModule } from 'primeng/button';
import { IResponse } from '../../../../core/interfaces/response-interface';
import { EditorModule } from 'primeng/editor';
import { IManageNotesAction } from '../../../../core/interfaces/manage-notes-action-interface';
import { StoreService } from '../../../../core/services/store';
import { PlainTextPipe } from '../../../../core/pipes/plain-text-pipe';
@Component({
  selector: 'app-manage-notes-form',
  imports: [ReactiveFormsModule, RadioButtonModule, SelectModule, EditorModule, ButtonModule, PlainTextPipe],
  templateUrl: './manage-notes-form.html',
  styleUrl: './manage-notes-form.scss'
})
export class ManageNotesForm implements OnInit, OnChanges {
  private formBuilder = inject(FormBuilder);
  private storeService = inject(StoreService);


  @Input() action: IManageNotesAction | undefined;
  @Input() sections: ISection[] = [];
  @Input() selectedAction: IManageNotesAction | undefined;
  @Output() closeManageNotesForm = new EventEmitter<void>();

  subSections: ISubSection[] = [];
  contents: ITopic[] = [];
  previewList: string[] = [];

  notesForm: FormGroup = this.formBuilder.group({});
  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['action']) {
      if (this.sections.length) {
        if (this.action?.id === "Add_Section") {
          const section: ISection = this.storeService.getDummySection();
          this.addSection(section, '');
        } else if (this.action?.id === "Add_Sub_Section") {
          const subSection: ISubSection = this.storeService.getDummySubSection();
          this.addSubSection(subSection, '');
        } else if (this.action?.id === "Add_Content") {
          const content = this.storeService.getDummyContent();
          this.addContent(content, '');
        }
      } else {
        if (this.action?.id === "Add_Section") {
          this.removeFormControls();
          this.subSections = [];
          this.contents = [];
          this.notesForm.addControl('text', new FormControl('', [Validators.required]));
        }
      }

    }
  }

  addSection(section: ISection, position: string) {
    this.removeFormControls();
    this.subSections = [];
    this.contents = [];
    const sectionId = (section.sectionId != null || section.sectionId > 0) ? section.sectionId : null;
    this.notesForm.addControl('sectionId', new FormControl(sectionId, [Validators.required]));
    this.notesForm.addControl('text', new FormControl('', [Validators.required]));
    this.notesForm.addControl('position', new FormControl(position, [Validators.required]));
  }

  addSubSection(selectedSubSection: ISubSection, position: string) {
    this.subSections = [];
    this.contents = [];
    this.removeFormControls();
    const sectionId = (selectedSubSection.sectionId != null && selectedSubSection.sectionId > 0) ? selectedSubSection.sectionId : null;
    const subSectionId = (selectedSubSection.subSectionId != null && selectedSubSection.subSectionId > 0) ? selectedSubSection.subSectionId : null;
    this.subSections = sectionId ? (this.sections.find(d => d.sectionId === selectedSubSection.sectionId)?.subSections ?? []) : [];
    this.notesForm.addControl('sectionId', new FormControl(sectionId, [Validators.required]));
    this.notesForm.addControl('subSectionId', new FormControl(subSectionId));
    this.notesForm.addControl('text', new FormControl('', [Validators.required]));
    if (subSectionId) {
      this.notesForm.addControl('position', new FormControl(position, [Validators.required]));
    }
    this.setSubSectionControl();
  }

  addContent(content: ITopic, position: string) {
    this.removeFormControls();
    this.subSections = [];
    this.contents = [];
    const sectionId = (content.sectionId != null && content.sectionId > 0) ? content.sectionId : null;
    const subSectionId = (content.subSectionId != null && content.subSectionId > 0) ? content.subSectionId : null;
    const contentId = (content.topicId != null && content.topicId > 0) ? content.topicId : null;
    if (sectionId) {
      if (subSectionId) {
        this.subSections = sectionId ? (this.sections.find(d => d.sectionId === sectionId)?.subSections ?? []) : [];
        this.contents = subSectionId ? (this.subSections.find(d => d.subSectionId === content.subSectionId)?.topics ?? []) : [];
      } else {
        this.contents = sectionId ? (this.sections.find(d => d.sectionId === content.sectionId)?.topics ?? []) : [];
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

  setContentControl() {
    this.notesForm.get('sectionId')?.valueChanges.subscribe(value => {
      if (value != null && value > 0) {
        this.subSections = this.sections.find(d => d.sectionId === value)?.subSections ?? [];
        this.contents = this.sections.find(d => d.sectionId === value)?.topics ?? [];
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
      this.subSections = (value != null && value > 0) ? (this.sections.find(d => d.sectionId === value)?.subSections ?? []) : [];
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
    this.closeManageNotesForm.next();
  }

  submitForm() { }


  // formBuilder = inject(FormBuilder);
  // notesService = inject(NotesService);

  // @Input() action: IManageNotesAction | undefined;
  // @Input() sections: ISection[] = [];
  // @Input() notesForm: FormGroup | undefined;
  // @Input() subSections: ISubSection[] = [];
  // @Input() contents: ITopic[] = [];
  // previewList: string[] = [];

  // @Output() closeManageNotesForm = new EventEmitter<void>();
  // @Output() notesFormSubmit = new EventEmitter<FormGroup>();

  // ngOnInit(): void {

  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes["sections"]) {
  //     this.sections = structuredClone(this.sections).map(d => {
  //       d.name = this.notesService.getPlainText(d.name);
  //       d.name = d.name.length > 60 ? d.name.slice(0, 57) + '...' : d.name;
  //       return d;
  //     });
  //   }

  //   if (changes["subSections"]) {
  //     this.subSections = structuredClone(this.subSections).map(d => {
  //       d.name = this.notesService.getPlainText(d.name);
  //       d.name = d.name.length > 60 ? d.name.slice(0, 57) + '...' : d.name;
  //       return d;
  //     });
  //   }

  //   if (changes["contents"]) {
  //     this.contents = structuredClone(this.contents).map(d => {
  //       d.text = this.notesService.getPlainText(d.text);
  //       d.text = d.text.length > 60 ? d.text.slice(0, 57) + '...' : d.text;
  //       return d;
  //     });
  //   }

  //   if (changes["action"]) {
  //     this.previewList = [];
  //     if(this.action?.id === "Add_Bulk_Content") {
  //       this.notesForm?.get("text")?.valueChanges.subscribe(d => {
  //         const polishText = d.replace(/&nbsp;/g, ' ').replace(/(<p>\s*<\/p>)/g, '</br>');
  //         this.previewList = polishText.match(/<p>.*?<\/p>/g) ?? [];
  //       });
  //     }
  //   }
  // }

  // submitForm() {
  //   this.notesFormSubmit.emit(this.notesForm);
  // }

  // onClose() {
  //   this.closeManageNotesForm.next();
  // }
}
