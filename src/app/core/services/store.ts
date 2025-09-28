import { inject, Injectable } from '@angular/core';
import { ISubject, ISection, ISubSection, IContent } from '../interfaces/note-interface';
import { Note } from '../enums/note-enum';
import { BackendService } from './backend';
import { Observable, tap } from 'rxjs';
import { IManageNotesAction } from '../interfaces/manage-notes-action-interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  backendService = inject(BackendService);

  private headerList: ISubject[] = [];

  private manageNotesActions: IManageNotesAction[] = [
    {
      name: "Add Section",
      id: "Add_Section",
      type: "Section"
    },
    {
      name: "Add Sub Section",
      id: "Add_Sub_Section",
      type: "Sub_Section"
    },
    {
      name: "Add Content",
      id: "Add_Content",
      type: "Content"
    },
    {
      name: "Add Bulk Content",
      id: "Add_Bulk_Content",
      type: "Content"
    }
  ];

  private dummyNotes: ISubject = {
    name: '',
    type: '',
    id: 0,
    sections: []
  }
  private dummyContent: IContent = {
    text: '',
    sectionId: 0,
    subSectionId: 0,
    noteType: '',
    topicId: 0,
    description: ''
  };
  private dummySection: ISection = {
    name: '',
    sectionId: 0,
    noteType: '',
    topics: [],
    subSections: []
  }

  private dummySubSection: ISubSection = {
    name: '',
    sectionId: 0,
    subSectionId: 0,
    noteType: '',
    topics: [],
  }

  primaryHeader() {
    return [...this.headerList].find(note => note.type === Note.ANGULAR);
  }

  getHeaders(): Observable<ISubject[]> {
    return this.backendService.getHeaders().pipe(tap((d: ISubject[]) => {
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

  getManageNotesActions(): IManageNotesAction[] {
    return [...this.manageNotesActions];
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
