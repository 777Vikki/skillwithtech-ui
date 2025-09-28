import { Injectable } from '@angular/core';
import { IEditContentRequest, IEditSectionRequest, IEditSubSectionRequest, ISubject, ISection, ISubSection, IContent } from '../interfaces/note-interface';
import { Observable, of } from 'rxjs';
import { IResponse } from '../interfaces/response-interface';
import { notesDb, availableNotes, storeCount } from '../../db/notes-db';

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

  onAddSection(section: ISection, index: number): Observable<IResponse> {
    const avaibaleSection = this.currentNoteSections.find(d => this.getPlainTextWithTrim(d.name) === this.getPlainTextWithTrim(section.name));
    if (avaibaleSection) {
      return of({ status: false, message: 'Section is already added.', data: [] });
    } else {
      section.sectionId = this.getCount("section");
      this.currentNoteSections.splice(index, 0, section);
      this.storeSection(this.currentNoteSections);
      return of({ status: true, message: 'Success', data: [section] });
    }
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
    const flatQuestionList = this.getFlatPlainTextContent(this.currentNoteSections);
    if (isBulkContent) {
      let requestContents: string[] = content.text?.match(/<p>.*?<\/p>/g) ?? [];
      if (requestContents.length > 0) {
        const filterRequestContents = requestContents.filter(d => !flatQuestionList.includes(this.getPlainTextWithTrim(d)));
        if (filterRequestContents.length > 0) {
          if (filterRequestContents.length !== requestContents.length) {
            message = (requestContents.length - filterRequestContents.length) + ' Content(s) are dublicates.';
            requestContents = filterRequestContents;
          }
          contents = requestContents.map(d => {
            return Object.assign({}, content, { text: d, topicId: this.getCount("topic") });
          });
        } else {
          return of({ status: true, message: 'All Contents are dublicates.', data: [] });
        }
      } else {
        return of({ status: false, message: 'Text format is not correct. Please see Preview.', data: [] });
      }
    } else {
      if (flatQuestionList.includes(this.getPlainTextWithTrim(content.text))) {
        return of({ status: false, message: 'Contant is dublicated.', data: [] });
      } else {
        content.topicId = this.getCount("topic");
        contents = [content]
      }
    }
    if (subSectionIndex > -1) {
      this.currentNoteSections[sectionIndex].subSections[subSectionIndex].topics.splice(contentIndex, 0, ...contents);
    } else {
      this.currentNoteSections[sectionIndex].topics.splice(contentIndex, 0, ...contents);
    }
    this.storeSection(this.currentNoteSections);
    return of({ status: true, message: message ? message : 'Success', data: isBulkContent? [] : [...contents] });
  }

  onAddSubSection(subSection: ISubSection, sectionIndex: number, subSectionIndex: number): Observable<IResponse> {
    const currentSubSections = this.currentNoteSections[sectionIndex]?.subSections ?? [];
    const availableSubSection = currentSubSections.find((subSec: ISubSection) => this.getPlainTextWithTrim(subSec.name) === this.getPlainTextWithTrim(subSection.name));
    if (availableSubSection) {
      return of({ status: false, message: 'Sub Section is already added in Current Section.', data: [] });
    } else {
      subSection.subSectionId = this.getCount("subSection");
      currentSubSections.splice(subSectionIndex, 0, subSection);
      this.storeSection(this.currentNoteSections);
      return of({ status: true, message: 'Success', data: [subSection] });
    }
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

  getFlatPlainTextContent(sec: (ISection | ISubSection | IContent)[]): string[] {
    let resultContents: string[] = [];
    if (Array.isArray(sec) && sec.length > 0) {
      const rowDetail = sec[0];
      if (('sectionId' in rowDetail) && !('subSectionId' in rowDetail) && !('topicId' in rowDetail)) {
        const sections = sec as ISection[];
        for (let i = 0; i < sections.length; i++) {
          if (sections[i].topics?.length) {
            resultContents = [...resultContents, ...this.getFlatPlainTextContent(sections[i].topics)];
          }
        }
      } else if (('sectionId' in rowDetail) && ('subSectionId' in rowDetail) && !('topicId' in rowDetail)) {
        const subSections = sec as ISubSection[];
        for (let i = 0; i < subSections.length; i++) {
          if (subSections[i].topics.length) {
            resultContents = [...resultContents, ...this.getFlatPlainTextContent(subSections[i].topics)];
          }
        }
      } else if (('sectionId' in rowDetail) && ('subSectionId' in rowDetail) && ('topicId' in rowDetail)) {
        const contents = sec as IContent[];
        resultContents = [...resultContents, ...contents.map(d => this.getPlainTextWithTrim(d.text))];
      }
    }
    return resultContents;
  }

  getPlainTextWithTrim(rawHtml: string): string {
    let doc = new DOMParser().parseFromString(rawHtml, 'text/html');
    let plainText = doc.body.textContent || "";
    return plainText.trim();
  }
}
