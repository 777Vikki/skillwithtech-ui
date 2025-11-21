import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { ISection, IContent } from '../../../../core/interfaces/note-interface';
import { StoreService } from '../../../../core/services/store';
import { NotesService } from '../../../../core/services/notes';
import { IResponse } from '../../../../core/interfaces/response-interface';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Description } from '../../components/description/description';
import { ActivatedRoute, Router } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SharedNotesService } from '../../services/shared-notes';
import { DescriptionModal } from '../../../../shared/modals/description-modal/description-modal';

@Component({
  selector: 'app-active-notes',
  imports: [NgClass, NgTemplateOutlet, Toast, Description, CardModule, TooltipModule, DescriptionModal],
  templateUrl: './active-notes.html',
  styleUrl: './active-notes.scss',
  providers: [MessageService]
})
export class ActiveNotes implements OnInit {
  private sharedNotesService = inject(SharedNotesService);
  private store = inject(StoreService);
  private noteService = inject(NotesService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

  sections = this.sharedNotesService.currentNoteSections;
  selectedSection: ISection | undefined;
  selectedContent: IContent | undefined;
  isMobileScreen = this.store.checkMobileScreen();
  expandSections: number[] = [];
  expandSubSections: number[] = [];
  expandContents: number[] = [];
  isSectionCollapse: boolean = false;
  visibleDescriptionModal: boolean = false;
  descriptionModalData: IContent | undefined;
  isScrollAction = false;

  ngOnInit(): void {
    this.sharedNotesService.getCurrentNoteSectionsObservable().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(res => {
        if(!this.sharedNotesService.loadingSubject()) {
          this.resetSelectedValue();
        }
      })
  }

  scrollActiveNotes(sectionId: number, subsectionId: number, contentId: number) {
    if(this.isScrollAction) {
      return;
    }
    this.isScrollAction = true;
    if (sectionId > -1) {
      const element = document.getElementById('section_' + sectionId);
      console.log('Element Section: ', element);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    if (contentId > -1) {
      const element = document.getElementById('content_' + contentId);
      console.log('Element Content: ', element);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    console.log('Section Id: ', sectionId, 'Cotent Id: ', contentId);
  }

  onViewAnswer(event: MouseEvent) {
    const target = event.target as HTMLAnchorElement;
    if (target.href) {
      const parsedUrl = new URL(target.href);
      const params = parsedUrl.searchParams;
      const sectionId = params.get('sectionId');
      const subSectionId = params.get('subSectionId');
      const contentId = params.get('contentId');
      const subjectId = params.get('subjectId');
      if (subjectId && sectionId && contentId) {
        event.preventDefault();
        this.visibleDescriptionModal = true;
        this.noteService.getContent(+subjectId, +sectionId, subSectionId? +subSectionId : -1, +contentId)
          .subscribe(response => {
            if(response.status && response.data.length) {
              this.descriptionModalData = response.data[0] as IContent;
              this.descriptionModalData.subjectId = +subjectId;
            }
          })
      }
    }
  }

  onExpandSection(sectionId: number) {
    const index = this.expandSections.indexOf(sectionId);
    if (index >= 0) {
      this.expandSections.splice(index, 1);
    } else {
      this.expandSections.push(sectionId);
    }
  }

  onExpandSubSection(subSectionId: number) {
    const index = this.expandSubSections.indexOf(subSectionId);
    if (index >= 0) {
      this.expandSubSections.splice(index, 1);
    } else {
      this.expandSubSections.push(subSectionId);
    }
  }

  onExpandContent(contentId: number) {
    const index = this.expandContents.indexOf(contentId);
    if (index >= 0) {
      this.expandContents.splice(index, 1);
    } else {
      this.expandContents.push(contentId);
    }
  }

  resetSelectedValue() {
    this.selectedSection = undefined;
    this.selectedContent = undefined;
    const routeQueryParams = this.route.snapshot.queryParams;
    const selectedSectionId = routeQueryParams['sectionId'] ? +routeQueryParams['sectionId'] : 0;
    if (selectedSectionId != null && selectedSectionId > 0) {
      this.selectedSection = this.sections().find(d => d.sectionId === selectedSectionId) ?? undefined;
      if (this.selectedSection) {
        const contentId = routeQueryParams['contentId'] ? +routeQueryParams['contentId'] : 0;
        const subSectionId = routeQueryParams['subSectionId'] ? +routeQueryParams['subSectionId'] : 0;
        if (contentId != null && contentId > 0) {
          if (subSectionId != null && subSectionId > 0 && this.selectedSection?.subSections) {
            const availableSubSection = this.selectedSection?.subSections.find(d => d.subSectionId === subSectionId);
            if (availableSubSection && availableSubSection.contents.length) {
              this.selectedContent = availableSubSection.contents.find(d => d.contentId === contentId);
            }
          }
          if (!this.selectedContent) {
            this.selectedContent = this.selectedSection.contents.find(d => d.contentId === contentId);
          }
        }
      }
    }
    if (!this.selectedSection) {
      this.selectedSection = this.sections().length ? this.sections()[0] : undefined;
      if (this.selectedSection?.contents.length) {
        this.selectedContent = this.selectedSection.contents[0]
      } else if (this.selectedSection?.subSections.length && this.selectedSection.subSections[0].contents.length) {
        this.selectedContent = this.selectedSection.subSections[0].contents[0];
      }
    }
    this.setQueryParam();

  }

  setQueryParam() {
    let sectionId = 0;
    let subSectionId = 0;
    let contentId = 0;
    let subjectId = this.sharedNotesService.currentNote()?.id ?? 0;
    if (this.selectedContent) {
      sectionId = this.selectedContent.sectionId;
      subSectionId = this.selectedContent.subSectionId;
      contentId = this.selectedContent.contentId;
    } else if (this.selectedSection) {
      sectionId = this.selectedSection.sectionId;
    }
    const queryParamRequest = {
      sectionId: sectionId,
      subSectionId: subSectionId,
      contentId: contentId,
      subjectId: subjectId
    };

    this.router.navigate(['../'], { relativeTo: this.route, queryParams: queryParamRequest, queryParamsHandling: 'merge' });
    setTimeout(() => {
      this.scrollActiveNotes(sectionId, -1, this.selectedContent?.contentId ?? -1);
    }, 300);
  }

  onSelectSection(section: ISection) {
    this.selectedSection = section;
    let availableContent = this.selectedSection.contents?.length ? this.selectedSection.contents[0] : undefined;
    if (!availableContent) {
      if (this.selectedSection.subSections?.length) {
        availableContent = this.selectedSection.subSections[0].contents?.length ? this.selectedSection.subSections[0].contents[0] : undefined;
      }
    }
    this.selectedContent = availableContent;
    this.setQueryParam();
  }

  onSelectContent(content: IContent) {
    this.selectedContent = content;
    this.setQueryParam();
  }

  onAddDescription(text: string) {
    if (this.selectedContent) {
      this.noteService.onAddDescription(this.selectedContent, text).subscribe((res: IResponse) => {
        if (res?.status) {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Description is successfully updated.' });
          this.noteService.getSections().subscribe();
        } else {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: res.message });
        }
      });
    }

  }
}
