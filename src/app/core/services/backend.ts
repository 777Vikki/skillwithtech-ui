import { Injectable } from '@angular/core';
import { IEditContentRequest, IEditSectionRequest, IEditSubSectionRequest, ISubject, ISection, ISubSection, IContent } from '../interfaces/note-interface';
import { Observable, of } from 'rxjs';
import { IResponse } from '../interfaces/response-interface';
import { notesDb, notesDbById, availableNotes, storeCount } from '../../db/notes-db';

type Count = 'section' | 'subSection' | 'topic';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private currentNoteSections: ISection[] = [];
  private currentNoteKey: string | undefined;
  private count = storeCount();

  private getCount(type: Count) {
    const data = localStorage.getItem("count");
    if (data) {
      this.count = JSON.parse(data);
    }
    this.count[type] += 1;
    localStorage.setItem("count", JSON.stringify(this.count));
    return this.count[type];
  }

  getHeaders(): Observable<ISubject[]> {
    const header: ISubject[] = structuredClone(availableNotes());
    return of(structuredClone(header));
  }

  getSections(type: string): Observable<ISection[]> {
    this.currentNoteKey = type;
    const data = localStorage.getItem(type);
    if (data) {
      this.currentNoteSections = JSON.parse(data);
      return of(JSON.parse(data));
    }
    this.currentNoteSections = notesDb(type);
    return of(structuredClone(this.currentNoteSections));
  }

  getContent(noteId: number, sectionId: number, subSectionId: number, contentId: number): Observable<IResponse> {
    let sections: ISection[] = notesDbById(noteId);
    const type = sections.length > 0? sections[0].noteType : '';
    if(type) {
      const localStoragedata = localStorage.getItem(type);
      if(localStoragedata) {
        if(localStoragedata) sections = JSON.parse(localStoragedata);
      }
    }
    if (sections && sections.length) {
      const selectedSection = sections.find(d => d.sectionId === sectionId);
      if (selectedSection) {
        if (subSectionId > -1) {
          const selectedSubSection = selectedSection.subSections.find(d => d.subSectionId === subSectionId);
          if (selectedSubSection) {
            const selectedContent = selectedSubSection.topics.find(d => d.topicId === contentId);
            if (selectedContent) {
              return of({ status: true, message: 'Success', data: [structuredClone(selectedContent)] });
            }
          }
        } else {
          const selectedContent = selectedSection.topics.find(d => d.topicId === contentId);
          if (selectedContent) {
            return of({ status: true, message: 'Success', data: [structuredClone(selectedContent)] });
          }
        }
      }
    }
    return of({ status: false, message: 'Detail is not found.', data: [] });
  }

  onAddSection(section: ISection, index: number): Observable<IResponse> {
    section.sectionId = this.getCount("section");
    this.currentNoteSections.splice(index, 0, section);
    this.storeSection(this.currentNoteSections);
    return of({ status: true, message: 'Success', data: [section] });
  }

  onEditSection(section: IEditSectionRequest): Observable<IResponse> {
    const sec = this.currentNoteSections.find(d => d.sectionId === section.sectionId);
    if (sec) {
      sec.name = section.name;
      this.storeSection(this.currentNoteSections);
      return of({ status: true, message: 'Success', data: [] });
    }
    return of({ status: false, message: 'Detail is not found.', data: [] });

  }

  onEditSubSection(subSection: IEditSubSectionRequest): Observable<IResponse> {
    const subSections = this.currentNoteSections.find(d => d.sectionId === subSection.sectionId)?.subSections;
    if (subSections) {
      const subSec = subSections.find(d => d.subSectionId === subSection.subSectionId);
      if (subSec) {
        subSec.name = subSection.name;
        this.storeSection(this.currentNoteSections);
        return of({ status: true, message: 'Success', data: [] });
      }
    }
    return of({ status: false, message: 'Detail is not found.', data: [] });
  }

  onEditContent(content: IEditContentRequest): Observable<IResponse> {
    const section = this.currentNoteSections.find(d => d.sectionId === content.sectionId);
    let selectedContent: IContent | undefined;
    if (content.subSectionId > 0) {
      const contents = section?.subSections.find(d => d.subSectionId === content.subSectionId)?.topics
      selectedContent = contents?.find(d => d.topicId === content.topicId);
    } else {
      selectedContent = section?.topics.find(d => d.topicId === content.topicId);
    }
    if (selectedContent) {
      selectedContent.text = content.text;
      this.storeSection(this.currentNoteSections);
      return of({ status: true, message: 'Success', data: [] });
    }
    return of({ status: false, message: 'Detail is not found.', data: [] });
  }

  onDeleteContent(content: IContent): Observable<IResponse> {
    const section = this.currentNoteSections.find(d => d.sectionId === content.sectionId);
    let selectedContents: IContent[] = [];
    if (content.subSectionId > 0) {
      selectedContents = section?.subSections.find(d => d.subSectionId === content.subSectionId)?.topics ?? []
    } else {
      selectedContents = section?.topics ?? [];
    }
    const index = selectedContents.findIndex(d => d.topicId === content.topicId);
    if (index > -1) {
      selectedContents.splice(index, 1);
    }
    this.storeSection(this.currentNoteSections);
    return of({ status: true, message: 'Success', data: [] });
  }

  onDeleteSection(index: number) {
    this.currentNoteSections.splice(index, 1);
    this.storeSection(this.currentNoteSections);
    return of({ status: true, message: 'Success', data: [] });
  }

  onDeleteSubSection(sectionIndex: number, subSectionIndex: number) {
    this.currentNoteSections[sectionIndex].subSections.splice(subSectionIndex, 1);
    this.storeSection(this.currentNoteSections);
    return of({ status: true, message: 'Success', data: [] });
  }

  onAddContent(content: IContent, sectionIndex: number, subSectionIndex: number, contentIndex: number, isBulkContent: boolean): Observable<IResponse> {
    let contents: IContent[] = [];
    let message = '';
    if (isBulkContent) {
      let requestContents: string[] = content.text?.match(/<p>.*?<\/p>/g) ?? [];
      if (requestContents.length > 0) {
        contents = requestContents.map(d => {
          return Object.assign({}, content, { text: d, topicId: this.getCount("topic") });
        });
      } else {
        return of({ status: false, message: 'Text format is not correct. Please see Preview.', data: [] });
      }
    } else {
      content.topicId = this.getCount("topic");
      contents = [content];
    }
    if (subSectionIndex > -1) {
      this.currentNoteSections[sectionIndex].subSections[subSectionIndex].topics.splice(contentIndex, 0, ...contents);
    } else {
      this.currentNoteSections[sectionIndex].topics.splice(contentIndex, 0, ...contents);
    }
    this.storeSection(this.currentNoteSections);
    return of({ status: true, message: message ? message : 'Success', data: isBulkContent ? [] : [...contents] });
  }

  onAddSubSection(subSection: ISubSection, sectionIndex: number, subSectionIndex: number): Observable<IResponse> {
    const currentSubSections = this.currentNoteSections[sectionIndex]?.subSections ?? [];
    subSection.subSectionId = this.getCount("subSection");
    currentSubSections.splice(subSectionIndex, 0, subSection);
    this.storeSection(this.currentNoteSections);
    return of({ status: true, message: 'Success', data: [subSection] });
  }

  onAddDescription(topic: IContent, description: string): Observable<IResponse> {
    const section: ISection | undefined = this.currentNoteSections.find(d => d.sectionId === topic.sectionId);
    let selectedContent: IContent | undefined = undefined;
    if (section) {
      if (topic.subSectionId != null && topic.subSectionId > 0) {
        const subSection = section.subSections.find(d => d.subSectionId === topic.subSectionId) ?? undefined;
        if (subSection && subSection.topics.length) {
          selectedContent = subSection.topics.find(d => d.topicId === topic.topicId);
        }
      }
      if (!selectedContent && section.topics.length) {
        selectedContent = section.topics.find(d => d.topicId === topic.topicId) ?? undefined;
      }
      if (selectedContent) {
        selectedContent.description = description;
        this.storeSection(this.currentNoteSections);
        return of({ status: true, message: 'Success', data: [topic] });
      } else {
        return of({ status: false, message: 'data is not added.', data: [topic] });
      }
    }
    return of({ status: false, message: 'data is not added.', data: [topic] });
  }

  storeSection(sections: ISection[]) {
    const data = JSON.stringify(sections);
    if (this.currentNoteKey) {
      localStorage.setItem(this.currentNoteKey, data);
    }
  }
}
