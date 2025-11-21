import { inject, Injectable } from '@angular/core';
import { IEditContentRequest, IEditSectionRequest, ISection, IContent, ISubject, ICount } from '../interfaces/note-interface';
import { BackendService } from './backend';
import { EMPTY, Observable, of } from 'rxjs';
import { concatMap, tap, map, delay } from 'rxjs/operators';
import { IResponse } from '../interfaces/response-interface';
import { AbstractControl, Validators } from '@angular/forms';
import { SharedNotesService } from '../../features/notes/services/shared-notes';
import { HttpClient } from '@angular/common/http';

type Count = 'subject' | 'section' | 'content';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private http = inject(HttpClient);
  private sharedNotesService = inject(SharedNotesService);
  private backendService = inject(BackendService);
  private count: ICount = {
    subject: 0,
    section: 0,
    content: 0
  }

  private getCount(type: Count) {
    const data = localStorage.getItem("count");
    if (data) {
      this.count = JSON.parse(data);
    }
    this.count[type] += 1;
    localStorage.setItem("count", JSON.stringify(this.count));
    return this.count[type];
  }

  onAddSection(section: ISection, index: number): Observable<IResponse> {
    const sections = structuredClone(this.sharedNotesService.currentNoteSections());
    section.sectionId = this.getCount("section");
    sections.splice(index, 0, section);
    this.storeSection(sections);
    return this.getSections().pipe(map(() => {
      return { status: true, message: 'Success', data: [section] }
    }));
  }

  onEditSection(section: IEditSectionRequest): Observable<IResponse> {
    const sections = structuredClone(this.sharedNotesService.currentNoteSections());
    const currentSection = sections.find((sectionData: ISection) => sectionData.sectionId === section.sectionId);
    if (currentSection) {
      currentSection.name = section.name;
      this.storeSection(sections);
      return of({ status: true, message: 'Success', data: [] });
    }
    return of({ status: false, message: 'Detail is not found.', data: [] });
  }

  onAddSubSection(subSection: ISection, sectionIndex: number, subSectionIndex: number): Observable<IResponse> {
    const sections = structuredClone(this.sharedNotesService.currentNoteSections());
    const subSections = sections[sectionIndex]?.subSections ?? [];
    subSection.subSectionId = this.getCount("section");
    subSections.splice(subSectionIndex, 0, subSection);
    this.storeSection(sections);
    return this.getSections().pipe(map(() => {
      return { status: true, message: 'Success', data: [subSection] }
    }));
  }

  onAddContent(content: IContent, sectionIndex: number, subSectionIndex: number, contentIndex: number, isBulkContent: boolean): Observable<IResponse> {
    let contents: IContent[] = [];
    let message = '';

    if (isBulkContent) {
      let requestContents: string[] = content.text?.match(/<p>.*?<\/p>/g) ?? [];
      if (requestContents.length > 0) {
        contents = requestContents.map(d => {
          return Object.assign({}, content, { text: d, topicId: this.getCount("content") });
        });
      } else {
        return of({ status: false, message: 'Text format is not correct. Please see Preview.', data: [] });
      }
    } else {
      content.contentId = this.getCount("content");
      contents = [content];
    }

    const sections = structuredClone(this.sharedNotesService.currentNoteSections());
    if (subSectionIndex > -1) {
      sections[sectionIndex].subSections[subSectionIndex].contents.splice(contentIndex, 0, ...contents);
    } else {
      sections[sectionIndex].contents.splice(contentIndex, 0, ...contents);
    }
    this.storeSection(sections);
    return this.getSections().pipe(map(() => {
      return { status: true, message: message ? message : 'Success', data: isBulkContent ? [] : [...contents] }
    }));
  }

  onEditSubSection(subSection: IEditSectionRequest): Observable<IResponse> {
    return this.backendService.onEditSubSection(subSection);
  }

  onEditContent(content: IEditContentRequest): Observable<IResponse> {
    return this.backendService.onEditContent(content);
  }

  onDeleteContent(content: IContent): Observable<IResponse> {
    return this.backendService.onDeleteContent(content);
  }

  onDeleteSection(index: number): Observable<IResponse> {
    return this.backendService.onDeleteSection(index);
  }

  onDeleteSubSection(sectionIndex: number, subSectionIndex: number): Observable<IResponse> {
    return this.backendService.onDeleteSubSection(sectionIndex, subSectionIndex);
  }

  onAddDescription(topic: IContent, description: string): Observable<IResponse> {
    return this.backendService.onAddDescription(topic, description);
  }

  getSubjectList() {
    return this.http.get<ISubject[]>('/subject.json').pipe(tap((subjectList: ISubject[]) => {
      this.sharedNotesService.setSubjectList(subjectList);
    }));
  }

  getCountDetail(): Observable<ICount> {
    const localStorageCount = localStorage.getItem('count');
    if (localStorageCount) {
      this.count = JSON.parse(localStorageCount);
      return of(this.count);
    } else {
      return this.http.get<ICount>('/count.json').pipe(tap((countDetail: ICount) => {
        this.count = countDetail;
      }));
    }

  }

  getSections(): Observable<ISection[]> {
    this.sharedNotesService.setloadingSubject(true);
    const selectedSubject = this.sharedNotesService.currentNote();
    const key = selectedSubject?.id + '_' + selectedSubject?.name.split(" ").map(d => d.trim()).join("_");
    const localStorageSections = localStorage.getItem(key);
    if (localStorageSections) {
      this.sharedNotesService.setloadingSubject(false);
      const sections: ISection[] = JSON.parse(localStorageSections);
      this.sharedNotesService.setCurrentNoteSections(sections);
      return of(sections);
    } else if (Array.isArray(selectedSubject?.links) && selectedSubject?.links.length > 0) {
      return this.http.get<ISection[]>(selectedSubject.links[0]).pipe(tap(sections => {
        console.log(sections);
        this.sharedNotesService.setloadingSubject(false);
        this.sharedNotesService.setCurrentNoteSections(sections);
      }));
    }
    return EMPTY;
  }

  getContent(noteId: number, sectionId: number, subSectionId: number, contentId: number): Observable<IResponse> {
    return this.backendService.getContent(noteId, sectionId, subSectionId, contentId);
  }

  removeUnusedTag(text: string) {
    let editorText = text.replace(/&nbsp;/g, ' ').replace(/(<p>\s*<\/p>)/g, '</br>');
    editorText = editorText === '</br>' ? '' : editorText;
    return editorText;
  }

  getPlainText(rawHtml: string): string {
    let doc = new DOMParser().parseFromString(rawHtml, 'text/html');
    let plainText = doc.body.textContent || "";
    return plainText;
  }

  addRequired(control: AbstractControl | null) {
    if (!control) return;

    // Angular keeps validators in _rawValidators
    const validators = (control as any)._rawValidators || [];

    // add required if it's not already there
    if (!validators.includes(Validators.required)) {
      validators.push(Validators.required);
    }

    control.setValidators(validators);
    control.updateValueAndValidity();
  }

  removeRequired(control: AbstractControl | null) {
    if (!control) return;

    // Angular stores validators in `_rawValidators`
    const validators = (control as any)._rawValidators || [];

    // keep everything except required
    const newValidators = validators.filter((v: any) => v !== Validators.required);

    control.setValidators(newValidators);
    control.updateValueAndValidity();
  }

  storeSection(sections: ISection[]) {
    const selectedSubject = this.sharedNotesService.currentNote();
    const key = selectedSubject?.id + '_' + selectedSubject?.name.split(" ").map(d => d.trim()).join("_");
    const data = JSON.stringify(sections);
    if (key) {
      localStorage.setItem(key, data);
    }
  }
}
