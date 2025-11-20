import { inject, Injectable, signal } from '@angular/core';
import { ISubject, ISection, IContent } from '../interfaces/note-interface';
import { BackendService } from './backend';
import { Observable, tap } from 'rxjs';
import { IManageNotesAction } from '../interfaces/manage-notes-action-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private http = inject(HttpClient);
  backendService = inject(BackendService);

  private headerList = signal<ISubject[]>([]);

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

  private dummySubject: ISubject = {
    id: 0,
    links: [],
    name: '',
    sections: [],
  }
  private dummyContent: IContent = {
    text: '',
    sectionId: 0,
    parentSectionId: 0,
    subjectId: 0,
    contentId: 0,
    description: ''
  };
  private dummySection: ISection = {
    name: '',
    subjectId: 0,
    sectionId: 0,
    parentSectionId: 0,
    contents: [],
    subSections: []
  }

  primaryHeader() {
    return [...this.headerList()].find(note => note.id === 1);
  }

  getHeaders(): Observable<ISubject[]> {
    return this.http.get<ISubject[]>('/subject_list.json').pipe(tap((d: ISubject[]) => {
      this.headerList.set(d);
    }));
  }

  getDummySubject() {
    return { ...this.dummySubject }
  }

  getDummySection() {
    return { ...this.dummySection };
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
