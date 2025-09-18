import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { NotesService } from '../../../../core/services/notes';
import { ISection } from '../../../../core/interfaces/note-interface';
import { IManageNotesAction } from '../../../../core/interfaces/manage-notes-action-interface';
import { ManageNotesForm } from '../../components/manage-notes-form/manage-notes-form';

@Component({
  selector: 'app-manage-notes',
  imports: [NgClass, NgTemplateOutlet, ButtonModule, SelectModule, FormsModule, ManageNotesForm],
  templateUrl: './manage-notes.html',
  styleUrl: './manage-notes.scss'
})
export class ManageNotes implements OnInit {
  noteService = inject(NotesService);
  fomBuilder = inject(FormBuilder);

  notesForm: FormGroup = this.fomBuilder.group({});

  sections: ISection[] = [];
  openToggle: number = -1;
  toggleType: string = '';

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
  ];

  selectedAction: IManageNotesAction | undefined;

  ngOnInit(): void {
    this.noteService.getNotesSection()
      .subscribe((res: ISection[]) => {
        this.sections = res;
        if (this.notesForm?.get('sectionId')) {
          const sectionId = this.notesForm?.get('sectionId')?.value || -1;
          const index = this.sections.findIndex(d => d.sectionId === sectionId);
          if (index < 0) {
            this.selectedAction = undefined;
          }
        }
        this.notesForm.reset();
      });
  }

  onSelectAction(e: any) {
    this.removeFormControls();
    if (this.sections.length > 0) {
      this.selectedAction = e.value;
      if (this.selectedAction?.id === "Add_Section") {
        this.notesForm.addControl('sectionId', new FormControl('', [Validators.required]));
        this.notesForm.addControl('text', new FormControl('', [Validators.required]));
        this.notesForm.addControl('position', new FormControl('', [Validators.required]));
      } else if (this.selectedAction?.id === "Add_Sub_Section") {
        this.notesForm.addControl('sectionId', new FormControl('', [Validators.required]));
        this.notesForm.addControl('subSectionId', new FormControl('', [Validators.required]));
        this.notesForm.addControl('text', new FormControl('', [Validators.required]));
        this.notesForm.addControl('position', new FormControl('', [Validators.required]));
      }
    } else {
      this.selectedAction = this.actions.find(d => d.id === "Add_Section");
      this.selectedAction = this.actions.find(d => d.id === 'Add_Section');
      if (this.selectedAction?.id === "Add_Section") {
        this.notesForm.addControl('text', new FormControl('', [Validators.required]));
      }
    }
  }

  removeFormControls() {
    Object.keys(this.notesForm.controls).forEach(key => {
      this.notesForm.removeControl(key);
    });
  }

  addSection(selectedSection: ISection, position: string) {
    this.selectedAction = {
      name: "Add Section",
      id: "Add_Section",
      type: "Section"
    };
    this.removeFormControls();
    this.notesForm.addControl('sectionId', new FormControl({ value: selectedSection.sectionId, disabled: true }, [Validators.required]));
    this.notesForm.addControl('text', new FormControl('', [Validators.required]));
    this.notesForm.addControl('position', new FormControl({ value: position, disabled: true }, [Validators.required]));
    this.toggleMenu(selectedSection, 'section');
  }

  editSection(selectedSection: ISection) {
    this.selectedAction = {
      name: "Edit Section",
      id: "Edit_Section",
      type: "Section"
    };
    this.removeFormControls();
    this.notesForm.addControl('sectionId', new FormControl({ value: selectedSection.sectionId, disabled: true }, [Validators.required]));
    this.notesForm.addControl('text', new FormControl(selectedSection.name, [Validators.required]));
    this.toggleMenu(selectedSection, 'section');
  }

  onRearrange() {
    this.selectedAction = undefined;
  }

  toggleMenu(row: ISection, type: string) {
    this.openToggle = this.openToggle === row.sectionId ? -1 : row.sectionId;
    this.toggleType = type;
  }
}
