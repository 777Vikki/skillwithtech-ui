import { Component, DestroyRef, HostListener, inject, Input, OnInit, signal } from '@angular/core';
import { StoreService } from '../../../../core/services/store';
import { NotesService } from '../../../../core/services/notes';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ISection, IContent } from '../../../../core/interfaces/note-interface';
import { IManageNotesAction, ManageNotesIdType } from '../../../../core/interfaces/manage-notes-action-interface';
import { IResponse } from '../../../../core/interfaces/response-interface';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { SharedNotesService } from '../../services/shared-notes';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Toast } from 'primeng/toast';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-manage-notes-crud',
  imports: [NgTemplateOutlet, NgClass, ConfirmDialogModule, Toast],
  templateUrl: './manage-notes-crud.html',
  styleUrl: './manage-notes-crud.scss',
  providers: [ConfirmationService]
})
export class ManageNotesCrud implements OnInit {
  private storeService = inject(StoreService)
  private notesService = inject(NotesService);
  private sharedNotesService = inject(SharedNotesService);
  private route = inject(ActivatedRoute);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);
  private destroyRef = inject(DestroyRef);

  private isScrollAction = false;

  sections = this.sharedNotesService.currentNoteSections;
  openToggle = signal<{ id: number, type: string }>({ id: 0, type: '' });
  activeRow = signal<{ id: number, type: string }>({ id: 0, type: '' });

  ngOnInit() {
    this.sharedNotesService.getCurrentNoteSectionsObservable()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(res => {
        console.log('#ManageNotesCrud');
        if (!this.sharedNotesService.loadingSubject()) {
          this.setDetailToScroll();
        }
      })
  }

  ngAfterViewInit(): void {

  }

  setDetailToScroll() {
    const routeQueryParams = this.route.snapshot.queryParams;
    const sectionId = routeQueryParams['sectionId'] ? +routeQueryParams['sectionId'] : 0;
    const contentId = routeQueryParams['contentId'] ? +routeQueryParams['contentId'] : 0;
    const subsectionId = routeQueryParams['subSectionId'] ? +routeQueryParams['subSectionId'] : 0;
    setTimeout(() => {
      this.setActiveRow(sectionId, subsectionId, contentId);
      this.scrollManageViewList(sectionId, subsectionId, contentId);
    }, 300);
  }

  setActiveRow(sectionId: number, subsectionId: number, contentId: number) {
    if(this.isScrollAction) {
      return;
    }
    if (contentId != null && contentId > 0) {
      this.activeRow.set({ id: contentId, type: 'content' });
    } else if (subsectionId != null && subsectionId > 0) {
      this.activeRow.set({ id: subsectionId, type: 'subsection' });
    } else if (sectionId != null && sectionId > 0) {
      this.activeRow.set({ id: sectionId, type: 'section' });
    }
  }

  scrollManageViewList(sectionId: number, subsectionId: number, contentId: number) {
    if(this.isScrollAction) {
      return;
    }
    this.isScrollAction = true;
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

  addSection(section: ISection, position: string) {
    this.sharedNotesService.setCurrectActionRowDetail(section, position);
    const actions = this.storeService.getManageNotesActions()
    const action: IManageNotesAction | undefined = actions.find(d => d.type === "Section");
    this.sharedNotesService.setCurrentActionObservable(action);
  }

  addSubSectOnSection(section: ISection) {
    const subSection: ISection = this.storeService.getDummySubSection();
    subSection['sectionId'] = section.sectionId;
    this.addSubSection(subSection, '');
  }

  addSubSection(subSection: ISection, position: string) {
    const actions = this.storeService.getManageNotesActions();
    const action = actions.find(d => d.id === "Add_Sub_Section") ?? undefined;
    this.sharedNotesService.setCurrectActionRowDetail(subSection, position);
    this.sharedNotesService.setCurrentActionObservable(action);
  }

  addContentOnSection(section: ISection) {
    const content = this.storeService.getDummyContent();
    content["sectionId"] = section.sectionId;
    this.addContent(content, '', "Add_Content");
  }

  addContentOnSubSection(subSection: ISection) {
    const content: IContent = this.storeService.getDummyContent();
    content["sectionId"] = subSection.sectionId;
    content["subSectionId"] = subSection.subSectionId;
    this.addContent(content, '', "Add_Content");
  }

  addContent(content: IContent, position: string, manageNotesActionId: ManageNotesIdType) {
    const actions = this.storeService.getManageNotesActions();
    const action = actions.find(d => d.id === manageNotesActionId) ?? undefined;
    this.sharedNotesService.setCurrectActionRowDetail(content, position);
    this.sharedNotesService.setCurrentActionObservable(action);
  }

  editSection(section: ISection) {
    const action: IManageNotesAction = {
      name: "Edit Section",
      id: "Edit_Section",
      type: "Section"
    };
    this.sharedNotesService.setCurrectActionRowDetail(section, '');
    this.sharedNotesService.setCurrentActionObservable(action);
  }

  editSubSection(subSection: ISection) {
    const action: IManageNotesAction = {
      name: "Edit Sub Section",
      id: "Edit_Sub_Section",
      type: "Sub_Section"
    };
    this.sharedNotesService.setCurrectActionRowDetail(subSection, '');
    this.sharedNotesService.setCurrentActionObservable(action);
  }

  editContent(content: IContent) {
    const action: IManageNotesAction = {
      name: "Edit Content",
      id: "Edit_Content",
      type: "Content"
    }
    this.sharedNotesService.setCurrectActionRowDetail(content, '');
    this.sharedNotesService.setCurrentActionObservable(action);
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
        this.sharedNotesService.setCurrectActionRowDetail(undefined, '');
        this.notesService.onDeleteSection(index).subscribe((res: IResponse) => {
          if (res?.status) {
            this.sharedNotesService.deleteSection(index);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Section has been deleted.' });
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
        this.sharedNotesService.setCurrectActionRowDetail(undefined, '');
        this.notesService.onDeleteSubSection(sectionIndex, subSectionIndex).subscribe((res: IResponse) => {
          if (res?.status) {
            this.sharedNotesService.deleteSubSection(sectionIndex, subSectionIndex);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Sub Section has been deleted.' });
          }
        });
      },
      reject: () => {
      },
    });
  }

  deleteContent(content: IContent) {
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
        this.sharedNotesService.setCurrectActionRowDetail(undefined, '');
        this.notesService.onDeleteContent(content).subscribe((res: IResponse) => {
          if (res.status) {
            this.sharedNotesService.deleteConten(content);
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Content has been deleted.' });
          }
        });
      },
      reject: () => {
      },
    });
  }

  toggleMenu(id: number, type: string) {
    this.openToggle.set({ id: id, type: type });
  }

  @HostListener('document:click')
  closeDropdown() {
    this.openToggle.set({ id: 0, type: '' });
  }
}
