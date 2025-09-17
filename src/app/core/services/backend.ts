import { Injectable } from '@angular/core';
import { ISection, ITopic } from '../interfaces/note-interface';
import { Observable, of } from 'rxjs';
import { angularTestingList } from '../../db/testing/angular-testing';
import { IResponse } from '../interfaces/response-interface';
import { Note } from '../enums/note-enum';

type Count = 'section' | 'subSection' | 'topic';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  angularNotes: ISection[] = [];
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

  getSections(type: string): Observable<ISection[]> {
    let sections: ISection[] = [];
    switch (type) {
      case Note.ANGULAR: {
        if (this.angularNotes.length === 0) {
          this.angularNotes = angularTestingList();
        }
        sections = [...this.angularNotes];
      }
    }
    return of(sections);
  }

  onAddSection(section: ISection, index: number): Observable<IResponse> {
    section.sectionId = this.getCount("section");
    switch (section.noteType) {
      case Note.ANGULAR: {
        this.angularNotes.splice(index, 0, section);
      }
    }
    console.log("Add Section: ", section);
    console.log("Total Section On ", section.noteType, " ", this.angularNotes);
    return of({ status: true });
  }

  onAddTopic(topic: ITopic, index: number): Observable<IResponse> {
    const sectionId = topic.sectionId;
    topic.topicId = this.getCount("topic");
    switch (topic.noteType) {
      case Note.ANGULAR: {
        const section = this.angularNotes.find(s => s.sectionId === sectionId);
        section?.topics.push(topic);
      }
    }
    console.log("Add Topic: ", topic);
    console.log("Total Section On ", topic.noteType, " ", this.angularNotes);
    return of({ status: true });
  }

  onAddDescription(topic: ITopic, description: string): Observable<IResponse> {
    topic.description = description;
    console.log(this.angularNotes);
    switch(topic.noteType) {
      case Note.ANGULAR: {
        console.log("Total Section On ", topic.noteType, " ", this.angularNotes);
      }
    }
    return of({status: true});
  }
}
