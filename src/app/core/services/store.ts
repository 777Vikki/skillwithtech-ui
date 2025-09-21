import { inject, Injectable } from '@angular/core';
import { INote, ISection, ISubSection, ITopic } from '../interfaces/note-interface';
import { Note } from '../enums/note-enum';
import { BackendService } from './backend';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  backendService = inject(BackendService);

  private headerList: INote[] = [];

  private dummyNotes: INote = {
    name: '',
    type: '',
    id: -1,
    sections: []
  }
  private dummyContent: ITopic = {
    text: '',
    sectionId: -1,
    subSectionId: -1,
    noteType: '',
    topicId: -1,
    description: ''
  };
  private dummySection: ISection = {
    name: '',
    sectionId: -1,
    noteType: '',
    topics: [],
    subSections: []
  }

  private dummySubSection: ISubSection = {
    name: '',
    sectionId: -1,
    subSectionId: -1,
    noteType: '',
    topics: [],
  }

  primaryHeader() {
    return [...this.headerList].find(note => note.type === Note.ANGULAR);
  }

  getHeaders(): Observable<INote[]> {
    return this.backendService.getHeaders().pipe(tap((d: INote[]) => {
      this.headerList = d;
    }));
  }

  getDummyNotes() {
    return { ...this.dummyNotes }
  }

  getDummySection() {
    return { ...this.dummySection };
  }

  getDummySubSection() {
    return { ...this.dummySubSection };
  }

  getDummyContent() {
    return { ...this.dummyContent };
  }

  checkMobileScreen(): boolean {
    // Mobile (small devices) → window.innerWidth <= 768px
    // Tablet (medium devices) → 769px – 1024px
    // Desktop (large devices) → >= 1025px
    if (window.location.hostname === 'localhost') {
      return window.innerWidth <= 450;
    } else {
      return window.innerWidth <= 768;
    }
  }

}
