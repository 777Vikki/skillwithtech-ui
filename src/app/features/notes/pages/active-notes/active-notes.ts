import { Component, inject, OnInit } from '@angular/core';
import { ISection, ITopic } from '../../../../core/interfaces/note-interface';
import { StoreService } from '../../../../core/services/store';
import { NotesService } from '../../../../core/services/notes';
// import { TextEditorModal } from '../../../../shared/modals/text-editor-modal/text-editor-modal';
import { IResponse } from '../../../../core/interfaces/response-interface';
import { NgClass } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Description } from '../../components/description/description';

@Component({
  selector: 'app-active-notes',
  imports: [NgClass, Description, CardModule],
  templateUrl: './active-notes.html',
  styleUrl: './active-notes.scss'
})
export class ActiveNotes implements OnInit {
  store = inject(StoreService);
  noteService = inject(NotesService);
  sections: ISection[] = [];
  selectedSection: ISection | undefined;
  selectedTopic: ITopic | undefined;
  isMobileScreen = this.store.checkMobileScreen();
  expandSections: number[] = [];
  expandTopics: number[] = [];
  isSectionCollapse: boolean = false;

  ngOnInit(): void {
    this.noteService.getNotesSection()
      .subscribe(res => {
        this.sections = res;
        this.resetSelectedValue();
      });
  }

  onExpandSection(sectionId: number) {
    const index = this.expandSections.indexOf(sectionId);
    if(index >= 0) {
      this.expandSections.splice(index, 1);
    } else {
      this.expandSections.push(sectionId);
    }
  }

  onExpandTopic(topicId: number) {
    const index = this.expandTopics.indexOf(topicId);
    if(index >= 0) {
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
        if(res?.status) {
          this.noteService.getSections().subscribe();
        }
      });
    }

  }
}
