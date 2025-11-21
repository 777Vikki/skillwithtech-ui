import { inject, Injectable } from '@angular/core';
import { ISubject, ISection, IContent } from '../interfaces/note-interface';
import { BackendService } from './backend';
import { Observable, tap } from 'rxjs';
import { IManageNotesAction } from '../interfaces/manage-notes-action-interface';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  backendService = inject(BackendService);

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
    id: 0,
    links: [],
    sections: []
  }
  private dummyContent: IContent = {
    text: '',
    sectionId: -1,
    subSectionId: 0,
    subjectId: -1,
    contentId: -1,
    description: ''
  };
  private dummySection: ISection = {
    name: '',
    sectionId: -1,
    subSectionId: -1,
    subjectId: -1,
    contents: [],
    subSections: []
  }

  private dummySubSection: ISection = {
    name: '',
    sectionId: -1,
    subSectionId: -1,
    subjectId: -1,
    contents: [],
    subSections: []
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
