import { Component, HostListener, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StoreService } from '../../../../core/services/store';
import { NotesService } from '../../../../core/services/notes';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IEditContentRequest, IEditSectionRequest, IEditSubSectionRequest, ISection, ISubSection, ITopic } from '../../../../core/interfaces/note-interface';
import { IManageNotesAction, ManageNotesIdType } from '../../../../core/interfaces/manage-notes-action-interface';
import { IResponse } from '../../../../core/interfaces/response-interface';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-notes-crud',
  imports: [NgTemplateOutlet, NgClass],
  templateUrl: './manage-notes-crud.html',
  styleUrl: './manage-notes-crud.scss'
})
export class ManageNotesCrud implements OnChanges {
  private storeService = inject(StoreService)
  private notesService = inject(NotesService);
  private route = inject(ActivatedRoute);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);
  private fomBuilder = inject(FormBuilder);

  @Input() selectedAction: IManageNotesAction | undefined;

  notesForm: FormGroup = this.fomBuilder.group({});
  actions: IManageNotesAction[] = this.storeService.getManageNotesActions();
  sections: ISection[] = [];

  currentActionSubsections: ISubSection[] = [];
  currentActionContents: ITopic[] = [];
  openToggle: number = 0;
  toggleType: string = '';
  responseRowDetail: ISection | ISubSection | ITopic | undefined;
  subscriptions: Subscription[] = [];
  activeRow = {
    id: 0,
    type: ''
  };

  ngOnInit() {
    this.subscriptions.push(
      this.notesService.getNotesSection()
        .subscribe((res: ISection[]) => {
          this.sections = res;
          })
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sections']) {
      if (this.selectedAction != null) {
        const position = this.notesForm.get('position')?.value ? this.notesForm.get('position')?.value : '1';
        if (this.selectedAction.id === "Add_Section") {
          this.addSection(this.responseRowDetail as ISection, position);
        } else if (this.selectedAction.id === "Add_Sub_Section") {
          this.addSubSection(this.responseRowDetail as ISubSection, position);
        } else if (this.selectedAction.id === "Add_Content") {
          this.addContent(this.responseRowDetail as ITopic, position, "Add_Content");
        } else if (this.selectedAction.id === "Add_Bulk_Content") {
          this.notesForm.reset();
        }
      }
    }

    if (changes["selectedAction"]) {
      this.onSelectAction();
    }
  }

  ngAfterViewInit(): void {
    const routeQueryParams = this.route.snapshot.queryParams;
    const sectionId = routeQueryParams['sectionId'] ? +routeQueryParams['sectionId'] : 0;
    const contentId = routeQueryParams['contentId'] ? +routeQueryParams['contentId'] : 0;
    const subsectionId = routeQueryParams['subSectionId'] ? +routeQueryParams['subSectionId'] : 0;
    this.setActiveRow(sectionId, subsectionId, contentId);
    this.scrollManageViewList(sectionId, subsectionId, contentId);
  }

  setActiveRow(sectionId: number, subsectionId: number, contentId: number) {
    if (contentId != null && contentId > 0) {
      this.activeRow = {
        id: contentId,
        type: "content"
      }
    } else if (subsectionId != null && subsectionId > 0) {
      this.activeRow = {
        id: subsectionId,
        type: "subsection"
      }
    } else if (sectionId != null && sectionId > 0) {
      this.activeRow = {
        id: sectionId,
        type: "section"
      }
    }
  }

  scrollManageViewList(sectionId: number, subsectionId: number, contentId: number) {
    let elementId = '';
    if (contentId != null && contentId > 0) {
      elementId = "manage-content-" + contentId;
    } else if (subsectionId != null && subsectionId > 0) {
      elementId = "manage-subsection-" + subsectionId;
    } else if (sectionId != null && sectionId > 0) {
      elementId = 'manage-section-' + sectionId;
    }
    if (elementId) {
      const element = document.getElementById(elementId);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  setSubSectionControl() {
    this.notesForm.get('sectionId')?.valueChanges.subscribe(value => {
      this.currentActionSubsections = (value != null && value > 0) ? (this.sections.find(d => d.sectionId === value)?.subSections ?? []) : [];
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

  setContentControl() {
    this.notesForm.get('sectionId')?.valueChanges.subscribe(value => {
      if (value != null && value > 0) {
        this.currentActionSubsections = this.sections.find(d => d.sectionId === value)?.subSections ?? [];
        this.currentActionContents = this.sections.find(d => d.sectionId === value)?.topics ?? [];
      } else {
        this.currentActionSubsections = [];
        this.currentActionContents = [];
      }
      this.notesForm.patchValue({
        contentId: null,
        subSectionId: null,
      });
    });

    this.notesForm.get('subSectionId')?.valueChanges.subscribe(value => {
      this.currentActionContents = (value != null && value > 0) ? (this.currentActionSubsections.find(d => d.subSectionId === value)?.topics ?? []) : this.currentActionContents;
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

  onSelectAction() {
    if (this.sections.length > 0) {
      if (this.selectedAction?.id === "Add_Section") {
        const section: ISection = this.storeService.getDummySection();
        this.addSection(section, '');
      } else if (this.selectedAction?.id === "Add_Sub_Section") {
        const subSection: ISubSection = this.storeService.getDummySubSection();
        this.addSubSection(subSection, '');
      } else if (this.selectedAction?.id === "Add_Content") {
        const content: ITopic = this.storeService.getDummyContent();
        this.addContent(content, '', "Add_Content");
      } else if (this.selectedAction?.id === "Add_Bulk_Content") {
        const content: ITopic = this.storeService.getDummyContent();
        this.addContent(content, '', "Add_Bulk_Content");
      }
    } else {
      this.removeFormControls();
      this.currentActionSubsections = [];
      this.currentActionContents = [];
      this.selectedAction = this.actions.find(d => d.id === "Add_Section");
      this.notesForm.addControl('text', new FormControl('', [Validators.required]));
    }
  }

  removeFormControls() {
    Object.keys(this.notesForm.controls).forEach(key => {
      this.notesForm.removeControl(key);
    });
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
  }

  addSubSectOnSection(section: ISection) {
    const subSection: ISubSection = this.storeService.getDummySubSection();
    subSection['sectionId'] = section.sectionId;
    this.addSubSection(subSection, '');
  }

  addSubSection(selectedSubSection: ISubSection, position: string) {
    this.selectedAction = this.actions.find(d => d.id === "Add_Sub_Section");
    this.currentActionSubsections = [];
    this.currentActionContents = [];
    this.removeFormControls();
    const sectionId = (selectedSubSection.sectionId != null && selectedSubSection.sectionId > 0) ? selectedSubSection.sectionId : null;
    const subSectionId = (selectedSubSection.subSectionId != null && selectedSubSection.subSectionId > 0) ? selectedSubSection.subSectionId : null;
    this.currentActionSubsections = sectionId ? (this.sections.find(d => d.sectionId === selectedSubSection.sectionId)?.subSections ?? []) : [];
    this.notesForm.addControl('sectionId', new FormControl(sectionId, [Validators.required]));
    this.notesForm.addControl('subSectionId', new FormControl(subSectionId));
    this.notesForm.addControl('text', new FormControl('', [Validators.required]));
    if (subSectionId) {
      this.notesForm.addControl('position', new FormControl(position, [Validators.required]));
    }
    this.setSubSectionControl();
  }

  editSubSection(subSection: ISubSection) {
    this.selectedAction = {
      name: "Edit Sub Section",
      id: "Edit_Sub_Section",
      type: "Sub_Section"
    };
    this.removeFormControls();
    const sectionId = (subSection.sectionId != null && subSection.sectionId > 0) ? subSection.sectionId : null;
    const subSectionId = (subSection.subSectionId != null && subSection.subSectionId > 0) ? subSection.subSectionId : null;
    this.currentActionSubsections = sectionId ? (this.sections.find(d => d.sectionId === sectionId)?.subSections ?? []) : [];
    this.notesForm.addControl('sectionId', new FormControl({ value: sectionId, disabled: true }, [Validators.required]));
    this.notesForm.addControl('subSectionId', new FormControl({ value: subSectionId, disabled: true }, [Validators.required]));
    this.notesForm.addControl('text', new FormControl(subSection.name, [Validators.required]));
  }

  deleteSection(index: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this Section? All associated contents will be lost.',
      header: 'Confirmation',
      closable: true,
      closeOnEscape: true,
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Save',
      },
      accept: () => {
        this.selectedAction = undefined;
        this.notesService.onDeleteSection(index).subscribe((res: IResponse) => {
          if (res?.status) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Section has been deleted.' });
            this.notesService.getSections().subscribe();
          }
        });
      },
      reject: () => {
      },
    });
  }

  deleteSubSection(sectionIndex: number, subSectionIndex: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete this Sub Section? All associated contents will be lost.',
      header: 'Confirmation',
      closable: true,
      closeOnEscape: true,
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Save',
      },
      accept: () => {
        this.selectedAction = undefined;
        this.notesService.onDeleteSubSection(sectionIndex, subSectionIndex).subscribe((res: IResponse) => {
          if (res?.status) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Sub Section has been deleted.' });
            this.notesService.getSections().subscribe();
          }
        });
      },
      reject: () => {
      },
    });
  }

  editContent(content: ITopic) {
    this.removeFormControls();
    this.currentActionContents = [];
    this.currentActionSubsections = [];
    const sectionId = (content.sectionId != null && content.sectionId > 0) ? content.sectionId : null;
    const subSectionId = (content.subSectionId != null && content.subSectionId > 0) ? content.subSectionId : null;
    const contentId = (content.topicId != null && content.topicId > 0) ? content.topicId : null;
    if (subSectionId) {
      this.currentActionSubsections = sectionId ? (this.sections.find(d => d.sectionId === sectionId)?.subSections ?? []) : [];
      this.notesForm.addControl('subSectionId', new FormControl({ value: subSectionId, disabled: true }));
      this.currentActionContents = this.currentActionSubsections.find(d => d.subSectionId === subSectionId)?.topics ?? [];
    } else {
      this.currentActionContents = sectionId ? (this.sections.find(d => d.sectionId === content.sectionId)?.topics || []) : [];
    }
    this.notesForm.addControl('sectionId', new FormControl({ value: sectionId, disabled: true }));
    this.notesForm.addControl('text', new FormControl(content.text, [Validators.required]));
    this.notesForm.addControl('contentId', new FormControl({ value: contentId, disabled: true }));
    this.selectedAction = {
      name: "Edit Content",
      id: "Edit_Content",
      type: "Content"
    }
  }

  deleteContent(content: ITopic) {
    this.confirmationService.confirm({
      message: 'Do you really want to delete this record?',
      header: 'Confirmation',
      closable: true,
      closeOnEscape: true,
      rejectButtonProps: {
        label: 'Cancel',
        severity: 'secondary',
        outlined: true,
      },
      acceptButtonProps: {
        label: 'Save',
      },
      accept: () => {
        this.selectedAction = undefined;
        this.notesService.onDeleteContent(content).subscribe((res: IResponse) => {
          if (res.status) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Content has been deleted.' });
            this.notesService.getSections().subscribe();
          }
        });
      },
      reject: () => {
      },
    });
  }

  toggleMenu(id: number, type: string) {
    this.openToggle = this.openToggle === id ? -1 : id;
    this.toggleType = type;
  }

  addContentOnSection(section: ISection) {
    const content = this.storeService.getDummyContent();
    content["sectionId"] = section.sectionId;
    this.addContent(content, '', "Add_Content");
  }

  addContentOnSubSection(subSection: ISubSection) {
    const content: ITopic = this.storeService.getDummyContent();
    content["sectionId"] = subSection.sectionId;
    content["subSectionId"] = subSection.subSectionId;
    this.addContent(content, '', "Add_Content");
  }

  addSection(section: ISection, position: string) {
    this.removeFormControls();
    this.currentActionSubsections = [];
    this.currentActionContents = [];
    const sectionId = (section.sectionId != null || section.sectionId > 0) ? section.sectionId : null;
    this.selectedAction = this.actions.find(d => d.type === "Section");
    this.notesForm.addControl('sectionId', new FormControl(sectionId, [Validators.required]));
    this.notesForm.addControl('text', new FormControl('', [Validators.required]));
    this.notesForm.addControl('position', new FormControl(position, [Validators.required]));
  }

  addContent(content: ITopic, position: string, manageNotesActionId: ManageNotesIdType) {
    this.removeFormControls();
    this.currentActionSubsections = [];
    this.currentActionContents = [];
    this.selectedAction = this.actions.find(d => d.id === manageNotesActionId);
    const sectionId = (content.sectionId != null && content.sectionId > 0) ? content.sectionId : null;
    const subSectionId = (content.subSectionId != null && content.subSectionId > 0) ? content.subSectionId : null;
    const contentId = (content.topicId != null && content.topicId > 0) ? content.topicId : null;
    if (sectionId) {
      if (subSectionId) {
        this.currentActionSubsections = sectionId ? (this.sections.find(d => d.sectionId === sectionId)?.subSections ?? []) : [];
        this.currentActionContents = subSectionId ? (this.currentActionSubsections.find(d => d.subSectionId === content.subSectionId)?.topics ?? []) : [];
      } else {
        this.currentActionContents = sectionId ? (this.sections.find(d => d.sectionId === content.sectionId)?.topics ?? []) : [];
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
            sectionId: 0,
            noteType: this.notesService.getSelectedNotes().type,
            topics: [],
            subSections: [],
          }
          const index = this.sections.length > 0 ? this.sections.findIndex(d => d.sectionId === formValue.sectionId) + Number(formValue.position) : 0;
          this.notesService.onAddSection(section, index).subscribe((res: IResponse) => {
            if (res?.status) {
              if (res.data != null && res.data.length > 0) {
                this.responseRowDetail = res.data[0];
              }
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Section is created successfully.' });
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
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Section is successfully updated.' });
              this.notesService.getSections().subscribe();
            }
          })
        }
      } else if (this.selectedAction?.type === "Sub_Section") {
        if (this.selectedAction.id === "Add_Sub_Section") {
          const subSection: ISubSection = {
            name: editorText,
            sectionId: formValue.sectionId,
            subSectionId: 0,
            noteType: this.notesService.getSelectedNotes().type,
            topics: [],
          }

          const sectionIndex = this.sections.findIndex(d => d.sectionId === formValue.sectionId);
          let subSectionIndex = 0;
          if (formValue.subSectionId) {
            subSectionIndex = this.currentActionSubsections.findIndex(d => d.subSectionId === formValue.subSectionId) + Number(formValue.position);
          } else {
            subSectionIndex = this.sections[sectionIndex].subSections.length;
          }
          this.notesService.onAddSubSection(subSection, sectionIndex, subSectionIndex).subscribe((res: IResponse) => {
            if (res?.status) {
              if (res.data != null && res.data.length > 0) {
                this.responseRowDetail = res.data[0];
              }
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Sub Section is created successfully.' });
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
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Section is successfully updated.' });
              this.notesService.getSections().subscribe();
            }
          });
        }
      } else if (this.selectedAction?.type === "Content") {
        if (this.selectedAction.id === "Add_Content" || this.selectedAction.id === "Add_Bulk_Content") {
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
          const isBulkContent = this.selectedAction.id === "Add_Bulk_Content";
          this.notesService.onAddContent(content, sectionIndex, subSectionIndex, contentIndex, isBulkContent).subscribe((res: IResponse) => {
            if (res?.status) {
              if (res.data && res.data.length > 0) {
                if (isBulkContent) {
                  this.responseRowDetail = undefined;
                  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Contents are created successfully.' });
                } else {
                  this.responseRowDetail = res.data[0];
                  this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Content is created successfully.' });
                }
              }
              this.notesService.getSections().subscribe();
            } else {
              this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
            }
          });
        } else if (this.selectedAction.id === "Edit_Content") {
          const content: IEditContentRequest = {
            text: editorText,
            sectionId: formValue.sectionId,
            subSectionId: formValue.subSectionId,
            topicId: formValue.contentId
          }
          this.notesService.onEditContent(content).subscribe((res: IResponse) => {
            if (res?.status) {
              this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Content is successfully updated.' });
              this.notesService.getSections().subscribe();
            }
          });
        }
      }
    }
  }

  @HostListener('document:click')
  closeDropdown() {
    this.openToggle = 0;
    this.toggleType = '';
  }
}
