import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { IEditSectionRequest, ISection, ISubSection } from '../../../../core/interfaces/note-interface';
import { SelectModule } from 'primeng/select';
import { NotesService } from '../../../../core/services/notes';
import { ButtonModule } from 'primeng/button';
import { IResponse } from '../../../../core/interfaces/response-interface';
import { EditorModule } from 'primeng/editor';
import { IManageNotesAction } from '../../../../core/interfaces/manage-notes-action-interface';

@Component({
  selector: 'app-manage-notes-form',
  imports: [ReactiveFormsModule, RadioButtonModule, SelectModule, EditorModule, ButtonModule],
  templateUrl: './manage-notes-form.html',
  styleUrl: './manage-notes-form.scss'
})
export class ManageNotesForm implements OnInit, OnChanges {
  formBuilder = inject(FormBuilder);
  notesService = inject(NotesService);

  @Input() action: IManageNotesAction | undefined;
  @Input() sections: ISection[] = [];
  @Input() notesForm: FormGroup | undefined;

  @Output() closeManageNotesForm = new EventEmitter<void>();

  subSections: ISubSection[] = [];

  ngOnInit(): void {
    this.notesForm?.get('sectionId')?.valueChanges.subscribe(value => {
      if (this.notesForm?.get('subSectionId')) {
        this.subSections = this.sections.find(d => d.sectionId === value)?.subSections ?? [];
        this.subSections = this.subSections.map(d => {
          d.name = this.notesService.getPlainText(d.name);
          return d;
        });
        const subSectionIdControl = this.notesForm.get('subSectionId');
        const positionControl = this.notesForm.get('position');
        if (this.subSections.length > 0) {
          this.notesService.addRequired(subSectionIdControl);
          this.notesService.addRequired(positionControl);
        } else {
          this.notesService.removeRequired(subSectionIdControl);
          this.notesService.removeRequired(positionControl);
        }
      } else {
        this.subSections = [];
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["sections"]) {
      this.sections = structuredClone(this.sections).map(d => {
        d.name = this.notesService.getPlainText(d.name);
        return d;
      });
    }
  }

  submitForm() {
    if (this.notesForm?.valid) {
      const formValue = this.notesForm.value;
      let editorText = formValue.text || ''
      editorText = editorText.replace(/&nbsp;/g, ' ').replace(/(<p>\s*<\/p>)/g, '</br>');
      editorText = editorText === '</br>' ? '' : editorText;
      if (this.action?.type === "Section") {
        if (this.action.id === "Add_Section") {
          const section: ISection = {
            name: editorText,
            sectionId: -1,
            noteType: this.notesService.getSelectedNotes().type,
            topics: [],
            subSections: [],
          }
          const index = this.sections.length > 0 ? this.sections.findIndex(d => d.sectionId === formValue.sectionId) + Number(formValue.position) : 0;
          this.notesService.onAddSection(section, index).subscribe((res: IResponse) => {
            if (res?.status) {
              this.notesService.getSections().subscribe();
            }
          })
        } else if (this.action.id === "Edit_Section") {
          const section: IEditSectionRequest = {
            name: editorText,
            sectionId: this.notesForm.get('sectionId')?.value,
            noteType: this.notesService.getSelectedNotes().type
          }
          this.notesService.onEditSection(section).subscribe((res: IResponse) => {
            if (res?.status) {
              this.notesService.getSections().subscribe();
            }
          })
        }
      } else if (this.action?.type === "Sub_Section") {
        const subSection: ISubSection = {
          name: editorText,
          sectionId: formValue.sectionId,
          subSectionId: -1,
          noteType: this.notesService.getSelectedNotes().type,
          topics: [],
        }

        const sectionIndex = this.sections.findIndex(d => d.sectionId === formValue.sectionId);
        if (sectionIndex > -1) {
          const subSectionIndex = this.subSections.length > 0 ? this.sections[sectionIndex].subSections.findIndex(d => d.subSectionId === formValue.subSectionId) + Number(formValue.position) : 0;
          this.notesService.onAddSubSection(subSection, sectionIndex, subSectionIndex).subscribe((res: IResponse) => {
            if (res?.status) {
              this.notesService.getSections().subscribe();
            }
          })
        }
      }
    }
  }

  onClose() {
    this.closeManageNotesForm.next();
  }
}
