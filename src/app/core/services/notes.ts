import { inject, Injectable } from '@angular/core';
import { IEditContentRequest, IEditSectionRequest, ISection, IContent, ISubject, ICount } from '../interfaces/note-interface';
import { EMPTY, Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';
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
      console.log('Add Section: ', section);
      return { status: true, message: 'Success', data: [section] }
    }));
  }

  onAddSubSection(subSection: ISection, sectionIndex: number, subSectionIndex: number): Observable<IResponse> {
    const sections = structuredClone(this.sharedNotesService.currentNoteSections());
    const subSections = sections[sectionIndex]?.subSections ?? [];
    subSection.subSectionId = this.getCount("section");
    subSections.splice(subSectionIndex, 0, subSection);
    this.storeSection(sections);
    return this.getSections().pipe(map(() => {
      console.log('Add Sub Section: ', subSection);
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
          return Object.assign({}, content, { text: d, contentId: this.getCount("content") });
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
      console.log('Add contents: ', contents);
      return { status: true, message: message ? message : 'Success', data: isBulkContent ? [] : [...contents] }
    }));
  }

  onAddDescription(content: IContent, description: string): Observable<IResponse> {
    const sections = structuredClone(this.sharedNotesService.currentNoteSections());
    let section = sections.find((sectionData: ISection) => sectionData.sectionId === content.sectionId);
    if (section) {
      if (content.subSectionId > 0) {
        section = section.subSections.find((subSection: ISection) => content.subSectionId === subSection.subSectionId);
      }

      if (section) {
        const contentDetail = section.contents.find((contentData: IContent) => contentData.contentId === content.contentId);
        if (contentDetail) {
          contentDetail.description = description;
          this.storeSection(sections);
          return of({ status: true, message: 'Success', data: [{ ...contentDetail }] });
        }
      }
    }
    return of({ status: false, message: 'data is not added.', data: [content] });
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

  onEditSubSection(subSection: IEditSectionRequest): Observable<IResponse> {
    const sections = structuredClone(this.sharedNotesService.currentNoteSections());
    const subSectionDetail = sections.find((section: ISection) => section.sectionId === subSection.sectionId)
      ?.subSections.find((subSec: ISection) => subSec.subSectionId === subSection.subSectionId);
    if (subSectionDetail) {
      subSectionDetail.name = subSection.name;
      this.storeSection(sections);
      return of({ status: true, message: 'Success', data: [] });
    }
    return of({ status: false, message: 'Detail is not found.', data: [] });
  }

  onEditContent(content: IEditContentRequest): Observable<IResponse> {
    const sections = structuredClone(this.sharedNotesService.currentNoteSections());

    let section = sections.find((section: ISection) => section.sectionId === content.sectionId);
    if (section) {
      if (content.subSectionId > 0) {
        section = section.subSections.find((subSection: ISection) => subSection.subSectionId === content.subSectionId);
      }

      if (section) {
        const contentDetail = section.contents.find((contentData: IContent) => contentData.contentId === content.contentId);
        if (contentDetail) {
          contentDetail.text = content.text;
          this.storeSection(sections);
          return of({ status: true, message: 'Success', data: [] });
        }
      }
    }
    return of({ status: false, message: 'Detail is not found.', data: [] });
  }

  onDeleteSection(index: number): Observable<IResponse> {
    const sections = structuredClone(this.sharedNotesService.currentNoteSections());
    sections.splice(index, 1);
    this.storeSection(sections);
    return of({ status: true, message: 'Success', data: [] });
  }

  onDeleteSubSection(sectionIndex: number, subSectionIndex: number): Observable<IResponse> {
    const sections = structuredClone(this.sharedNotesService.currentNoteSections());
    sections[sectionIndex].subSections.splice(subSectionIndex, 1);
    this.storeSection(sections);
    return of({ status: true, message: 'Success', data: [] });
  }

  onDeleteContent(content: IContent): Observable<IResponse> {
    const sections = structuredClone(this.sharedNotesService.currentNoteSections());

    let section = sections.find((section: ISection) => section.sectionId === content.sectionId);
    if (section) {
      if (content.subSectionId > 0) {
        section = section.subSections.find((subSection: ISection) => subSection.subSectionId === content.subSectionId);
      }

      if (section) {
        section.contents = section.contents.filter((contentData: IContent) => contentData.contentId !== content.contentId)
        this.storeSection(sections);
        return of({ status: true, message: 'Success', data: [] });
      }
    }
    return of({ status: false, message: 'Detail is not found.', data: [] });
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
    const key = selectedSubject ? this.getLocalStorageKey(selectedSubject) : '';
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

  getContent(subjectId: number, sectionId: number, subSectionId: number, contentId: number): Observable<IResponse> {
    const currentSubject = this.sharedNotesService.currentNote();
    if (currentSubject && currentSubject.id === subjectId) {
      const sections = structuredClone(this.sharedNotesService.currentNoteSections());
      const content = this.getContentFromSections(sections, sectionId, subSectionId, contentId)
      if (content) {
        return of({ status: true, message: 'Success', data: [structuredClone(content)] });
      }
    } else {
      const subject = this.sharedNotesService.subjectList().find((subjectData: ISubject) => subjectData.id === subjectId);
      if (subject) {
        const key = this.getLocalStorageKey(subject);
        const localStorageSections = localStorage.getItem(key);
        if (localStorageSections) {
          const sections: ISection[] = JSON.parse(localStorageSections);
          const content = this.getContentFromSections(sections, sectionId, subSectionId, contentId)
          if (content) {
            return of({ status: true, message: 'Success', data: [structuredClone(content)] });
          }
        } else {
          return this.http.get<ISection[]>(subject.links[0]).pipe(map((sections: ISection[]) => {
            const content = this.getContentFromSections(sections, sectionId, subSectionId, contentId)
            if (content) {
              return { status: true, message: 'Success', data: [structuredClone(content)] };
            }
            return { status: false, message: 'Detail is not found.', data: [] };
          }));
        }
      }
    }
    return of({ status: false, message: 'Detail is not found.', data: [] });
  }

  private getContentFromSections(sections: ISection[], sectionId: number, subSectionId: number, contentId: number): IContent | undefined {
    let section = sections.find((sectionData: ISection) => sectionData.sectionId === sectionId);
    if (section) {
      if (subSectionId > 0) {
        section = section.subSections.find((subSection: ISection) => subSection.subSectionId === subSectionId);
        if (section) {
          const content = section.contents.find((contentData: IContent) => contentData.contentId === contentId);
          return content
        }
      }
    }
    return undefined;
  }

  private getLocalStorageKey(subject: ISubject): string {
    if (subject) {
      return subject.id + '_' + subject.name.split(" ").map(d => d.trim()).join("_");
    }
    return '';
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

  private storeSection(sections: ISection[]) {
    const selectedSubject = this.sharedNotesService.currentNote();
    const key = selectedSubject? this.getLocalStorageKey(selectedSubject) : '';
    const data = JSON.stringify(sections);
    if (key) {
      localStorage.setItem(key, data);
    }
  }
}
