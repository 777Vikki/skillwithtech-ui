import { AfterViewInit, Component, DestroyRef, ElementRef, inject, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import { ISection, IContent } from '../../../../core/interfaces/note-interface';
import { StoreService } from '../../../../core/services/store';
import { NotesService } from '../../../../core/services/notes';
// import { TextEditorModal } from '../../../../shared/modals/text-editor-modal/text-editor-modal';
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
export class ActiveNotes implements OnInit, AfterViewInit {
  private sharedNotesService = inject(SharedNotesService);
  private store = inject(StoreService);
  private noteService = inject(NotesService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private messageService = inject(MessageService);
  private destroyRef = inject(DestroyRef);

  sections = this.sharedNotesService.currentNoteSections;
  selectedSection: ISection | undefined;
  selectedTopic: IContent | undefined;
  isMobileScreen = this.store.checkMobileScreen();
  expandSections: number[] = [];
  expandSubSections: number[] = [];
  expandTopics: number[] = [];
  isSectionCollapse: boolean = false;
  visibleDescriptionModal: boolean = false;
  descriptionModalData: IContent | undefined;

  ngOnInit(): void {
    this.sharedNotesService.getCurrentNoteSectionsObservable().pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(res => {
        this.resetSelectedValue();
      })
  }

  ngAfterViewInit(): void {
    const routeQueryParams = this.route.snapshot.queryParams;
    const sectionId = routeQueryParams['sectionId'] ? +routeQueryParams['sectionId'] : -1;
    const contentId = routeQueryParams['contentId'] ? +routeQueryParams['contentId'] : -1;

    this.scrollActiveNotes(sectionId, -1, contentId);
  }

  scrollActiveNotes(sectionId: number, subsectionId: number, contentId: number) {
    if (sectionId > -1) {
      const element = document.getElementById('section_' + sectionId);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    if (contentId > -1) {
      const element = document.getElementById('content_' + contentId);
      element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  onViewAnswer(event: MouseEvent) {
    const target = event.target as HTMLAnchorElement;
    if (target.href) {
      const parsedUrl = new URL(target.href);
      const params = parsedUrl.searchParams;
      const sectionId = params.get('sectionId');
      const subSectionId = params.get('subSectionId');
      const contentId = params.get('contentId');
      const notesId = params.get('notesId');
      if (notesId && sectionId && contentId) {
        event.preventDefault();
        this.visibleDescriptionModal = true;
        this.noteService.getContent(+notesId, +sectionId, subSectionId? +subSectionId : -1, +contentId)
          .subscribe(response => {
            if(response.status && response.data.length) {
              this.descriptionModalData = response.data[0] as IContent;
              this.descriptionModalData.noteId = +notesId;
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

  onExpandTopic(topicId: number) {
    const index = this.expandTopics.indexOf(topicId);
    if (index >= 0) {
      this.expandTopics.splice(index, 1);
    } else {
      this.expandTopics.push(topicId);
    }
  }

  resetSelectedValue() {
    this.selectedSection = undefined;
    this.selectedTopic = undefined;
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
            if (availableSubSection && availableSubSection.topics.length) {
              this.selectedTopic = availableSubSection.topics.find(d => d.topicId === contentId);
            }
          }
          if (!this.selectedTopic) {
            this.selectedTopic = this.selectedSection.topics.find(d => d.topicId === contentId);
          }
        }
      }
    }
    if (!this.selectedSection) {
      this.selectedSection = this.sections().length ? this.sections()[0] : undefined;
      if (this.selectedSection?.topics.length) {
        this.selectedTopic = this.selectedSection.topics[0]
      } else if (this.selectedSection?.subSections.length && this.selectedSection.subSections[0].topics.length) {
        this.selectedTopic = this.selectedSection.subSections[0].topics[0];
      }
    }
    this.setQueryParam();





    //   if (this.sections.length) {
    //     const availableSection = this.selectedSection ? this.sections.find(s => s.sectionId === this.selectedSection?.sectionId) : this.sections[0];
    //     this.selectedSection = availableSection || this.sections[0];
    //     if (this.selectedSection.topics.length) {
    //       const availableTopic = this.selectedTopic ? this.selectedSection.topics.find(t => t.topicId === this.selectedTopic?.topicId) : this.selectedSection.topics[0];
    //       this.selectedTopic = availableTopic || this.selectedSection.topics[0];
    //     } else {
    //       this.selectedTopic = undefined;
    //     }
    //   } else {
    //     this.selectedSection = undefined;
    //     this.selectedTopic = undefined;
    //   }

  }

  setQueryParam() {
    let sectionId = 0;
    let subSectionId = 0;
    let contentId = 0;
    let notesId = this.sharedNotesService.currentNote()?.id ?? 0;
    if (this.selectedTopic) {
      sectionId = this.selectedTopic.sectionId;
      subSectionId = this.selectedTopic.subSectionId;
      contentId = this.selectedTopic.topicId;
    } else if (this.selectedSection) {
      sectionId = this.selectedSection.sectionId;
    }
    const queryParamRequest = {
      sectionId: sectionId,
      subSectionId: subSectionId,
      contentId: contentId,
      notesId: notesId
    };

    this.router.navigate(['../'], { relativeTo: this.route, queryParams: queryParamRequest, queryParamsHandling: 'merge' });
    setTimeout(() => {
      this.scrollActiveNotes(-1, -1, this.selectedTopic?.topicId ?? -1);
    });
  }

  onSelectSection(section: ISection) {
    this.selectedSection = section;
    let availableContent = this.selectedSection.topics?.length ? this.selectedSection.topics[0] : undefined;
    if (!availableContent) {
      if (this.selectedSection.subSections?.length) {
        availableContent = this.selectedSection.subSections[0].topics?.length ? this.selectedSection.subSections[0].topics[0] : undefined;
      }
    }
    this.selectedTopic = availableContent;
    this.setQueryParam();
  }

  onSelectContent(topic: IContent) {
    this.selectedTopic = topic;
    this.setQueryParam();
  }

  onAddDescription(text: string) {
    if (this.selectedTopic) {
      this.noteService.onAddDescription(this.selectedTopic, text).subscribe((res: IResponse) => {
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
