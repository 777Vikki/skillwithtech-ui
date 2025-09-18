import { Component, inject, OnInit } from '@angular/core';
import { ISection, ITopic } from '../../../../core/interfaces/note-interface';
import { StoreService } from '../../../../core/services/store';
import { NotesService } from '../../../../core/services/notes';
import { TextEditorModal } from '../../../../shared/modals/text-editor-modal/text-editor-modal';
import { IResponse } from '../../../../core/interfaces/response-interface';
import { NgClass } from '@angular/common';
import { CardModule } from 'primeng/card';
import { Description } from '../../components/description/description';

@Component({
  selector: 'app-notes-page',
  imports: [NgClass, Description, TextEditorModal, CardModule],
  templateUrl: './notes-page.html',
  styleUrl: './notes-page.scss'
})
export class NotesPage implements OnInit {
  store = inject(StoreService);
  noteService = inject(NotesService);
  show: boolean = false;
  sections: ISection[] = [];
  actions: INoteAction | undefined;
  selectedSection: ISection | undefined;
  selectedTopic: ITopic | undefined;
  isMobile = this.noteService.checkMobileScreen();

  ngOnInit(): void {
    this.noteService.getNotesSection()
      .subscribe(res => {
        this.sections = res;
        this.resetSelectedValue();
      });
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

  addSection() {
    this.show = true;
    this.actions = {
      header: "Add Section",
      type: "Add",
      task: "Section",
      index: this.sections.length,
    }
    // this.noteService.onAddSection(section);
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

  addTopic() {
    this.show = true;
    this.actions = {
      header: "Add Question on Section: " + this.noteService.getPlainText(this.selectedSection?.name ?? ''),
      type: "Add",
      task: "Topic",
      index: this.selectedSection?.topics.length ?? -1,
    }
  }

  onCloseModal(value: { text: string }) {
    this.show = false;
    if (value) {
      if (this.actions?.task === "Section") {
        const section: ISection = {
          name: value.text,
          sectionId: -1,
          noteType: this.noteService.getSelectedNotes().type,
          topics: [],
          subSections: [],
        }
        this.noteService.onAddSection(section, this.actions.index)
          .subscribe((res: IResponse) => {
            if (res.status) {
              this.noteService.getSections().subscribe();
            }
          });
      } else if (this.actions?.task === "Topic") {
        const topic: ITopic = {
          text: value.text,
          sectionId: this.selectedSection?.sectionId ?? -1,
          subSectionId: -1,
          noteType: this.noteService.getSelectedNotes().type,
          topicId: -1,
          description: ''
        }
        this.noteService.onAddTopic(topic, this.actions.index)
          .subscribe((res: IResponse) => {
            if (res.status) {
              this.noteService.getSections().subscribe();
            }
          });
      }
    } else {
      this.actions = undefined;
    }
  }
}
