import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ISection, ITopic } from '../../../../core/interfaces/note-interface';
import { StoreService } from '../../../../core/services/store';
import { NotesService } from '../../../../core/services/notes';
// import { TextEditorModal } from '../../../../shared/modals/text-editor-modal/text-editor-modal';
import { IResponse } from '../../../../core/interfaces/response-interface';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Description } from '../../components/description/description';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-active-notes',
  imports: [NgClass, NgTemplateOutlet, Description, CardModule],
  templateUrl: './active-notes.html',
  styleUrl: './active-notes.scss'
})
export class ActiveNotes implements OnInit, OnDestroy, AfterViewInit {
  store = inject(StoreService);
  noteService = inject(NotesService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  sections: ISection[] = [];
  selectedSection: ISection | undefined;
  selectedTopic: ITopic | undefined;
  isMobileScreen = this.store.checkMobileScreen();
  expandSections: number[] = [];
  expandTopics: number[] = [];
  isSectionCollapse: boolean = false;
  subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.subscriptions.push(
      this.noteService.getNotesSection()
        .subscribe(res => {
          this.sections = res;
          const routeQueryParams = this.route.snapshot.queryParams;
          const selectedSectionId = routeQueryParams['sectionId'] ? +routeQueryParams['sectionId'] : -1;
          if (selectedSectionId > 0) {
            this.selectedSection = this.sections.find(d => d.sectionId === selectedSectionId) ?? undefined;
          }
          const contentId = routeQueryParams['contentId'] ? +routeQueryParams['contentId'] : -1;
          if (contentId > 0) {
            this.selectedTopic = this.selectedSection?.topics.find(d => d.topicId === contentId) ?? undefined;
          }
          this.resetSelectedValue();
        })
    )
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

  check(dd: any) {
    console.log(dd);
  }

  onExpandSection(sectionId: number) {
    const index = this.expandSections.indexOf(sectionId);
    if (index >= 0) {
      this.expandSections.splice(index, 1);
    } else {
      this.expandSections.push(sectionId);
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
    if (this.sections.length) {
      const availableSection = this.selectedSection ? this.sections.find(s => s.sectionId === this.selectedSection?.sectionId) : this.sections[0];
      this.selectedSection = availableSection || this.sections[0];
      if (this.selectedSection.topics.length) {
        const availableTopic = this.selectedTopic ? this.selectedSection.topics.find(t => t.topicId === this.selectedTopic?.topicId) : this.selectedSection.topics[0];
        this.selectedTopic = availableTopic || this.selectedSection.topics[0];
      } else {
        this.selectedTopic = undefined;
      }
    } else {
      this.selectedSection = undefined;
      this.selectedTopic = undefined;
    }
    const queryParamRequest = {
      sectionId: this.selectedSection?.sectionId ?? -1,
      subSectionId: -1,
      contentId: this.selectedTopic?.topicId ?? -1
    }

    this.router.navigate(['../'], { relativeTo: this.route, queryParams: queryParamRequest, queryParamsHandling: 'merge' });
    setTimeout(() => {
      this.scrollActiveNotes(-1, -1, this.selectedTopic?.topicId ?? -1);
    });
  }

  onSelectSection(section: ISection) {
    this.selectedSection = section;
    this.resetSelectedValue();
  }

  onSelectTopic(topic: ITopic) {
    this.selectedTopic = topic;
    this.resetSelectedValue();
  }

  onAddDescription(text: string) {
    if (this.selectedTopic) {
      this.noteService.onAddDescription(this.selectedTopic, text).subscribe((res: IResponse) => {
        if (res?.status) {
          this.noteService.getSections().subscribe();
        }
      });
    }

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }
}
