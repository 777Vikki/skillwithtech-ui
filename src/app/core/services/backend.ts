import { Injectable } from '@angular/core';
import { INote, ISection, ITopic } from '../interfaces/note-interface';
import { Observable, of } from 'rxjs';
import { angularTestingList } from '../../db/testing/angular-testing';
import { IResponse } from '../interfaces/response-interface';
import { Note } from '../enums/note-enum';
import { notesDb } from '../../db/notes-db';

type Count = 'section' | 'subSection' | 'topic';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  notes = notesDb();
  private count = {
    section: 23,
    subSection: 0,
    topic: 6,
  };

  private getCount(type: Count) {
    this.count[type] += 1;
    console.log(this.count);
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
    console.log("Total Section On ", section.noteType, " ", sections);
    return of({ status: true });
  }

  onAddTopic(topic: ITopic, index: number): Observable<IResponse> {
    const sectionId = topic.sectionId;
    topic.topicId = this.getCount("topic");
    const sections: ISection[] = this.notes.find(d => d.type === topic.noteType)?.sections ?? [];
    const section: ISection | undefined = sections.find(d => d.sectionId === topic.sectionId);
    if(section) {
      section.topics.splice(index, 0, topic);
    }
    console.log("Total Section On ", topic.noteType, " ", sections);
    return of({ status: true });
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
    console.log("Total Section On ", topic.noteType, " ", sections);
    return of({status: true});
  }
}
