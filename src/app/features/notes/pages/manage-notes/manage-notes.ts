import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Component, HostListener, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { NotesService } from '../../../../core/services/notes';
import { IEditContentRequest, IEditSectionRequest, IEditSubSectionRequest, ISection, ISubSection, ITopic } from '../../../../core/interfaces/note-interface';
import { IManageNotesAction } from '../../../../core/interfaces/manage-notes-action-interface';
import { ManageNotesForm } from '../../components/manage-notes-form/manage-notes-form';
import { IResponse } from '../../../../core/interfaces/response-interface';
import { CardModule } from 'primeng/card';
import { StoreService } from '../../../../core/services/store';

@Component({
  selector: 'app-manage-notes',
  imports: [NgClass, NgTemplateOutlet, ButtonModule, CardModule, SelectModule, FormsModule, ManageNotesForm],
  templateUrl: './manage-notes.html',
  styleUrl: './manage-notes.scss'
})
export class ManageNotes implements OnInit {
  private storeService = inject(StoreService)
  private notesService = inject(NotesService);
  fomBuilder = inject(FormBuilder);

  notesForm: FormGroup = this.fomBuilder.group({});

  sections: ISection[] = [];
  currentActionSubsections: ISubSection[] = [];
  currentActionContents: ITopic[] = [];
  openToggle: number = -1;
  toggleType: string = '';
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
  ];

  selectedAction: IManageNotesAction | undefined;

  ngOnInit(): void {
    this.notesService.getNotesSection()
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

  setSubSectionControl() {
    this.notesForm.get('sectionId')?.valueChanges.subscribe(value => {
      this.currentActionSubsections = this.sections.find(d => d.sectionId === value)?.subSections ?? [];
      this.notesForm.patchValue({
        subSectionId: -1,
      });
    });

    this.notesForm.get('subSectionId')?.valueChanges.subscribe(value => {
      if (value > 0) {
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

  setContentControl() {
    this.notesForm.get('sectionId')?.valueChanges.subscribe(value => {
      this.currentActionSubsections = this.sections.find(d => d.sectionId === value)?.subSections ?? [];
      this.currentActionContents = this.sections.find(d => d.sectionId === value)?.topics ?? [];
      this.notesForm.patchValue({
        contentId: -1,
        subSectionId: -1,
      });
    });

    this.notesForm.get('subSectionId')?.valueChanges.subscribe(value => {
      if (value > 0) {
        this.currentActionContents = this.currentActionSubsections.find(d => d.subSectionId === value)?.topics ?? [];
        this.notesForm.patchValue({
          contentId: -1,
        });
      }
    });

    this.notesForm.get('contentId')?.valueChanges.subscribe(value => {
      if (value > 0) {
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

  onSelectAction(e: any) {
    this.removeFormControls();
    this.currentActionSubsections = [];
    this.currentActionContents = [];
    if (this.sections.length > 0) {
      this.selectedAction = e.value;
      if (this.selectedAction?.id === "Add_Section") {
        this.notesForm.addControl('sectionId', new FormControl('', [Validators.required]));
        this.notesForm.addControl('text', new FormControl('', [Validators.required]));
        this.notesForm.addControl('position', new FormControl('', [Validators.required]));
      } else if (this.selectedAction?.id === "Add_Sub_Section") {
        this.notesForm.addControl('sectionId', new FormControl('', [Validators.required]));
        this.notesForm.addControl('subSectionId', new FormControl(''));
        this.notesForm.addControl('text', new FormControl('', [Validators.required]));
        // this.notesForm.addControl('position', new FormControl('', [Validators.required]));
        this.setSubSectionControl();
      } else if (this.selectedAction?.id === "Add_Content") {
        this.notesForm.addControl('sectionId', new FormControl('', [Validators.required]));
        this.notesForm.addControl('subSectionId', new FormControl(''));
        this.notesForm.addControl('contentId', new FormControl(''));
        this.notesForm.addControl('text', new FormControl('', [Validators.required]));
        // this.notesForm.addControl('position', new FormControl(''));
        this.setContentControl();
      }
    } else {
      this.selectedAction = this.actions.find(d => d.id === "Add_Section");
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
    this.currentActionSubsections = [];
    this.notesForm.addControl('sectionId', new FormControl({ value: selectedSection.sectionId, disabled: true }, [Validators.required]));
    this.notesForm.addControl('text', new FormControl('', [Validators.required]));
    this.notesForm.addControl('position', new FormControl({ value: position, disabled: true }, [Validators.required]));
    this.toggleMenu(selectedSection.sectionId, 'section');
  }

  editSection(selectedSection: ISection) {
    this.selectedAction = {
      name: "Edit Section",
      id: "Edit_Section",
      type: "Section"
    };
    this.removeFormControls();
    this.currentActionSubsections = [];
    this.notesForm.addControl('sectionId', new FormControl({ value: selectedSection.sectionId, disabled: true }, [Validators.required]));
    this.notesForm.addControl('text', new FormControl(selectedSection.name, [Validators.required]));
    this.toggleMenu(selectedSection.sectionId, 'section');
  }

  addSubSectOnSection(section: ISection) {
    this.selectedAction = {
      name: "Add Sub Section",
      id: "Add_Sub_Section_On_Section",
      type: "Sub_Section"
    };
    this.removeFormControls();
    this.currentActionSubsections = section.subSections || [];
    this.notesForm.addControl('sectionId', new FormControl({ value: section.sectionId, disabled: true }, [Validators.required]));
    this.notesForm.addControl('subSectionId', new FormControl(''));
    // this.notesForm.addControl('position', new FormControl('', [Validators.required]));
    this.notesForm.addControl('text', new FormControl('', [Validators.required]));
    this.toggleMenu(section.sectionId, 'section');
    this.setSubSectionControl();
  }

  addSubSection(selectedSubSection: ISubSection, position: string) {
    this.selectedAction = {
      name: "Add Sub Section",
      id: "Add_Sub_Section",
      type: "Sub_Section"
    };
    this.removeFormControls();
    this.currentActionSubsections = this.sections.find(d => d.sectionId === selectedSubSection.sectionId)?.subSections ?? [];
    this.notesForm.addControl('sectionId', new FormControl({ value: selectedSubSection.sectionId, disabled: true }, [Validators.required]));
    this.notesForm.addControl('subSectionId', new FormControl({ value: selectedSubSection.subSectionId, disabled: true }, [Validators.required]));
    this.notesForm.addControl('text', new FormControl('', [Validators.required]));
    this.notesForm.addControl('position', new FormControl({ value: position, disabled: true }, [Validators.required]));
    this.toggleMenu(selectedSubSection.subSectionId, 'subSection');
  }

  editSubSection(subSection: ISubSection) {
    this.selectedAction = {
      name: "Edit Sub Section",
      id: "Edit_Sub_Section",
      type: "Sub_Section"
    };
    this.removeFormControls();
    this.currentActionSubsections = this.sections.find(d => d.sectionId === subSection.sectionId)?.subSections ?? [];
    this.notesForm.addControl('sectionId', new FormControl({ value: subSection.sectionId, disabled: true }, [Validators.required]));
    this.notesForm.addControl('subSectionId', new FormControl({ value: subSection.subSectionId, disabled: true }, [Validators.required]));
    this.notesForm.addControl('text', new FormControl(subSection.name, [Validators.required]));
    this.toggleMenu(subSection.subSectionId, 'subSection');
  }

  deleteSection(index: number) {
    this.selectedAction = undefined;
    this.notesService.onDeleteSection(index).subscribe((res: IResponse) => {
      if (res?.status) {
        this.notesService.getSections().subscribe();
      }
    });
  }

  deleteSubSection(sectionIndex: number, subSectionIndex: number) {
    this.selectedAction = undefined;
    this.notesService.onDeleteSubSection(sectionIndex, subSectionIndex).subscribe((res: IResponse) => {
      if (res?.status) {
        this.notesService.getSections().subscribe();
      }
    });
  }

  editContent(content: ITopic) {
    this.removeFormControls();
    this.currentActionContents = [];
    this.currentActionSubsections = [];
    if (content.subSectionId > 0) {
      this.currentActionSubsections = this.sections.find(d => d.sectionId === content.sectionId)?.subSections ?? [];
      this.notesForm.addControl('subSectionId', new FormControl({ value: content.subSectionId, disabled: true }));
      this.currentActionContents = this.currentActionSubsections.find(d => d.subSectionId === content.subSectionId)?.topics ?? [];
    } else {
      this.currentActionContents = this.sections.find(d => d.sectionId === content.sectionId)?.topics || [];
    }
    this.notesForm.addControl('sectionId', new FormControl({ value: content.sectionId, disabled: true }));
    this.notesForm.addControl('text', new FormControl(content.text, [Validators.required]));
    this.notesForm.addControl('contentId', new FormControl({ value: content.topicId, disabled: true }));
    this.selectedAction = {
      name: "Edit Content",
      id: "Edit_Content",
      type: "Content"
    }
    this.toggleMenu(content.topicId, 'content')
  }

  deleteContent(content: ITopic) {
    this.notesService.onDeleteContent(content).subscribe((res: IResponse) => {
      if(res.status) {
        this.notesService.getSections().subscribe();
      }
    });
  }

  onRearrange() {
    this.selectedAction = undefined;
  }

  toggleMenu(id: number, type: string) {
    this.openToggle = this.openToggle === id ? -1 : id;
    this.toggleType = type;
  }

  submitNotesForm(formDetail: FormGroup) {
    if (formDetail.valid) {
      const formValue = formDetail.getRawValue();
      let editorText = formValue.text || ''
      editorText = editorText.replace(/&nbsp;/g, ' ').replace(/(<p>\s*<\/p>)/g, '</br>');
      editorText = editorText === '</br>' ? '' : editorText;
      if (this.selectedAction?.type === "Section") {
        if (this.selectedAction.id === "Add_Section") {
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
        } else if (this.selectedAction.id === "Edit_Section") {
          const section: IEditSectionRequest = {
            name: editorText,
            sectionId: formValue.sectionId,
            noteType: this.notesService.getSelectedNotes().type
          }
          this.notesService.onEditSection(section).subscribe((res: IResponse) => {
            if (res?.status) {
              this.notesService.getSections().subscribe();
            }
          })
        }
      } else if (this.selectedAction?.type === "Sub_Section") {
        if (this.selectedAction.id === "Add_Sub_Section" || this.selectedAction.id === "Add_Sub_Section_On_Section") {
          const subSection: ISubSection = {
            name: editorText,
            sectionId: formValue.sectionId,
            subSectionId: -1,
            noteType: this.notesService.getSelectedNotes().type,
            topics: [],
          }

          const sectionIndex = this.sections.findIndex(d => d.sectionId === formValue.sectionId);
          let subSectionIndex = 0;
          if (formValue.subSectionId > 0) {
            subSectionIndex = this.currentActionSubsections.findIndex(d => d.subSectionId === formValue.subSectionId) + Number(formValue.position);
          } else {
            subSectionIndex = this.sections[sectionIndex].subSections.length;
          }
          this.notesService.onAddSubSection(subSection, sectionIndex, subSectionIndex).subscribe((res: IResponse) => {
            if (res?.status) {
              this.notesService.getSections().subscribe();
            }
          })
        } else if (this.selectedAction.id === "Edit_Sub_Section") {
          const subSection: IEditSubSectionRequest = {
            name: editorText,
            sectionId: formValue.sectionId,
            subSectionId: formValue.subSectionId,
            noteType: this.notesService.getSelectedNotes().type,
          }
          this.notesService.onEditSubSection(subSection).subscribe((res: IResponse) => {
            if (res?.status) {
              this.notesService.getSections().subscribe();
            }
          });
        }
      } else if (this.selectedAction?.type === "Content") {
        if (this.selectedAction.id === "Add_Content") {
          const content: ITopic = {
            text: editorText,
            sectionId: formValue.sectionId,
            subSectionId: -1,
            noteType: this.notesService.getSelectedNotes().type,
            topicId: -1,
            description: ''
          };
          const sectionIndex = this.sections.findIndex(d => d.sectionId === formValue.sectionId);
          let subSectionIndex = -1;
          let contentIndex = 0;
          if (formValue.subSectionId > 0) {
            content.subSectionId = formValue.subSectionId ?? -1;
            subSectionIndex = this.currentActionSubsections.findIndex(d => d.subSectionId === content.subSectionId);
          }
          if (formValue.contentId > 0) {
            contentIndex = this.currentActionContents.length > 0 ? this.currentActionContents.findIndex(d => d.topicId === formValue.contentId) + Number(formValue.position) : 0;
          } else {
            if (subSectionIndex > -1) {
              contentIndex = this.currentActionSubsections[subSectionIndex].topics.length;
            } else {
              contentIndex = this.sections[sectionIndex].topics.length;
            }
          }
          this.notesService.onAddContent(content, sectionIndex, subSectionIndex, contentIndex).subscribe((res: IResponse) => {
            if (res?.status) {
              this.notesService.getSections().subscribe();
            }
          });
        } else if(this.selectedAction.id === "Edit_Content") { 
          const content: IEditContentRequest = {
            text: editorText,
            sectionId: formValue.sectionId,
            subSectionId: formValue.subSectionId,
            topicId: formValue.contentId
          }
          this.notesService.onEditContent(content).subscribe((res: IResponse) => {
            if (res?.status) {
              this.notesService.getSections().subscribe();
            }
          });
        }
      }
    }
  }

  @HostListener('document:click')
  closeDropdown() {
    this.openToggle = -1;
    this.toggleType = '';
  }
}
