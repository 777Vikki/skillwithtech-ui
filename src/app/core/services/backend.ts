import { Injectable } from '@angular/core';
import { IEditContentRequest, IEditSectionRequest, IEditSubSectionRequest, INote, ISection, ISubSection, ITopic } from '../interfaces/note-interface';
import { Observable, of } from 'rxjs';
import { IResponse } from '../interfaces/response-interface';
import { notesDb, availableNotes, storeCount } from '../../db/notes-db';

type Count = 'section' | 'subSection' | 'topic';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  currentNoteSections: ISection[] = [];
  currentNoteKey: string | undefined;
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

  getHeaders(): Observable<INote[]> {
    const header: INote[] = structuredClone(availableNotes());
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

  onAddSection(section: ISection, index: number): Observable<IResponse> {
    console.log(section);
    section.sectionId = this.getCount("section");
    this.currentNoteSections.splice(index, 0, section);
    this.storeSection(this.currentNoteSections)
    return of({ status: true });
  }

  onEditSection(section: IEditSectionRequest): Observable<IResponse> {
    console.log(section);
    const sec = this.currentNoteSections.find(d => d.sectionId === section.sectionId);
    if (sec) {
      sec.name = section.name;
    }
    this.storeSection(this.currentNoteSections);
    return of({ status: true });
  }

  onEditSubSection(subSection: IEditSubSectionRequest): Observable<IResponse> {
    console.log(subSection);
    const subSections = this.currentNoteSections.find(d => d.sectionId === subSection.sectionId)?.subSections;
    if (subSections) {
      const subSec = subSections.find(d => d.subSectionId === subSection.subSectionId);
      if (subSec) {
        subSec.name = subSection.name;
      }
    }
    this.storeSection(this.currentNoteSections);
    return of({ status: true });
  }

  onEditContent(content: IEditContentRequest): Observable<IResponse> {
    console.log(content);
    const section = this.currentNoteSections.find(d => d.sectionId === content.sectionId);
    let selectedContent: ITopic | undefined;
    if (content.subSectionId > 0) {
      const contents = section?.subSections.find(d => d.subSectionId === content.subSectionId)?.topics
      selectedContent = contents?.find(d => d.topicId === content.topicId);
    } else {
      selectedContent = section?.topics.find(d => d.topicId === content.topicId);
    }
    if (selectedContent) {
      selectedContent.text = content.text;
    }
    this.storeSection(this.currentNoteSections);
    return of({ status: true });
  }

  onDeleteContent(content: ITopic): Observable<IResponse> {
    console.log(content);
    const section = this.currentNoteSections.find(d => d.sectionId === content.sectionId);
    let selectedContents: ITopic[] = [];
    if (content.subSectionId > 0) {
      selectedContents = section?.subSections.find(d => d.subSectionId === content.subSectionId)?.topics ?? []
    } else {
      selectedContents = section?.topics ?? [];
    }
    const index = selectedContents.findIndex(d => d.topicId === content.topicId);
    if(index > -1) {
      selectedContents.splice(index, 1);
    }
    this.storeSection(this.currentNoteSections);
    return of({status: true});
  }

  onDeleteSection(index: number) {
    console.log(index);
    this.currentNoteSections.splice(index, 1);
    this.storeSection(this.currentNoteSections);
    return of({ status: true });
  }

  onDeleteSubSection(sectionIndex: number, subSectionIndex: number) {
    console.log('sectionIndex: ', sectionIndex, ' subSectionIndex: ', subSectionIndex);
    this.currentNoteSections[sectionIndex].subSections.splice(subSectionIndex, 1);
    this.storeSection(this.currentNoteSections);
    return of({ status: true });
  }

  onAddContent(content: ITopic, sectionIndex: number, subSectionIndex: number, contentIndex: number): Observable<IResponse> {
    console.log((content));
    console.log('SectionIndex: ', sectionIndex, ' SubSectionIndex', subSectionIndex, ' contentIndex', contentIndex)
    content.topicId = this.getCount("topic");
    if (subSectionIndex > -1) {
      this.currentNoteSections[sectionIndex].subSections[subSectionIndex].topics.splice(contentIndex, 0, content);
    } else {
      this.currentNoteSections[sectionIndex].topics.splice(contentIndex, 0, content);
    }

    this.storeSection(this.currentNoteSections);
    return of({ status: true });
  }

  onAddSubSection(subSection: ISubSection, sectionIndex: number, subSectionIndex: number): Observable<IResponse> {
    console.log(subSection);
    console.log('sectionIndex: ', sectionIndex, ' subSectionIndex: ', subSectionIndex);
    subSection.subSectionId = this.getCount("subSection");
    this.currentNoteSections[sectionIndex].subSections.splice(subSectionIndex, 0, subSection);
    this.storeSection(this.currentNoteSections);
    return of({ status: true });
  }

  onAddDescription(topic: ITopic, description: string): Observable<IResponse> {
    console.log(topic);
    console.log('Description: ', description);
    const section: ISection | undefined = this.currentNoteSections.find(d => d.sectionId === topic.sectionId);
    if (section) {
      const selectedTopic = section.topics.find(d => d.topicId === topic.topicId);
      if (selectedTopic) {
        selectedTopic.description = description;
      }
    }
    this.storeSection(this.currentNoteSections);
    return of({ status: true });
  }

  storeSection(sections: ISection[]) {
    const data = JSON.stringify(sections);
    if (this.currentNoteKey) {
      localStorage.setItem(this.currentNoteKey, data);
    }
  }
}
