import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { IEditSectionRequest, IEditSubSectionRequest, ISection, ISubSection, ITopic } from '../../../../core/interfaces/note-interface';
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
  @Input() subSections: ISubSection[] = [];
  @Input() contents: ITopic[] = [];

  @Output() closeManageNotesForm = new EventEmitter<void>();
  @Output() notesFormSubmit = new EventEmitter<FormGroup>();



  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["sections"]) {
      this.sections = structuredClone(this.sections).map(d => {
        d.name = this.notesService.getPlainText(d.name);
        d.name = d.name.length > 60? d.name.slice(0, 57) + '...' : d.name;
        return d;
      });
    }

    if (changes["subSections"]) {
      this.subSections = structuredClone(this.subSections).map(d => {
        d.name = this.notesService.getPlainText(d.name);
        d.name = d.name.length > 60? d.name.slice(0, 57) + '...' : d.name;
        return d;
      });
    }

    if (changes["contents"]) {
      this.contents = structuredClone(this.contents).map(d => {
        d.text = this.notesService.getPlainText(d.text);
        d.text = d.text.length > 60? d.text.slice(0, 57) + '...' : d.text;
        return d;
      });
    }
  }

  submitForm() {
    this.notesFormSubmit.emit(this.notesForm);
  }

  onClose() {
    this.closeManageNotesForm.next();
  }
}
