import { Injectable } from '@angular/core';
import { IEditSectionRequest, INote, ISection, ISubSection, ITopic } from '../interfaces/note-interface';
import { Observable, of } from 'rxjs';
import { IResponse } from '../interfaces/response-interface';
import { notesDb } from '../../db/notes-db';

type Count = 'section' | 'subSection' | 'topic';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  notes = notesDb();
  private count = {
    section: 24,
    subSection: 0,
    topic: 26,
  };

  private getCount(type: Count) {
    this.count[type] += 1;
    // console.log(this.count);
    localStorage.setItem("count", JSON.stringify(this.count));
    return this.count[type];
  }

  getHeaders(): Observable<INote[]> {
    const header: INote[] = this.notes.map(d => {
      return {
        name: d.name,
        type: d.type,
        sections: [],
      }
    });
    return of(structuredClone(header));
  }

  getSections(type: string): Observable<ISection[]> {
    const sections: ISection[] = this.notes.find(d => d.type === type)?.sections ?? [];
    return of(structuredClone(sections));
  }

  onAddSection(section: ISection, index: number): Observable<IResponse> {
    section.sectionId = this.getCount("section");
    const sections: ISection[] = this.notes.find(d => d.type === section.noteType)?.sections ?? [];
    sections.splice(index, 0, section);
    // console.log("Total Section On ", section.noteType, " ", sections);
    localStorage.setItem("sections", JSON.stringify(sections));
    return of({ status: true });
  }

  onEditSection(section: IEditSectionRequest): Observable<IResponse> {
    const sections: ISection[] = this.notes.find(d => d.type === section.noteType)?.sections ?? [];
    const sec = sections.find(d => d.sectionId === section.sectionId);
    if(sec) {
      sec.name = section.name;
    }
    return of({ status: true });
  }

  onAddTopic(topic: ITopic, index: number): Observable<IResponse> {
    topic.topicId = this.getCount("topic");
    const sections: ISection[] = this.notes.find(d => d.type === topic.noteType)?.sections ?? [];
    const section: ISection | undefined = sections.find(d => d.sectionId === topic.sectionId);
    if(section) {
      section.topics.splice(index, 0, topic);
    }
    // console.log("Total Section On ", topic.noteType, " ", sections);
    localStorage.setItem("sections", JSON.stringify(sections));
    return of({ status: true });
  }

  onAddSubSection(subSection: ISubSection, sectionIndex: number, subSectionIndex: number): Observable<IResponse> {
    subSection.subSectionId = this.getCount("subSection");
    const sections: ISection[] = this.notes.find(d => d.type === subSection.noteType)?.sections ?? [];
    sections[sectionIndex].subSections.splice(subSectionIndex, 0, subSection);
    return of({status: true});
  }

  onAddDescription(topic: ITopic, description: string): Observable<IResponse> {
    const sections: ISection[] = this.notes.find(d => d.type === topic.noteType)?.sections ?? [];
    const section: ISection | undefined = sections.find(d => d.sectionId === topic.sectionId);
    if(section) {
      const selectedTopic = section.topics.find(d => d.topicId === topic.topicId);
      if(selectedTopic) {
        selectedTopic.description = description;
      }
    }
    // console.log("Total Section On ", topic.noteType, " ", sections);
    localStorage.setItem("sections", JSON.stringify(sections));
    return of({status: true});
  }
}
