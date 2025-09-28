import { inject, Injectable } from '@angular/core';
import { IEditContentRequest, IEditSectionRequest, IEditSubSectionRequest, ISubject, ISection, ISubSection, IContent } from '../interfaces/note-interface';
import { BackendService } from './backend';
import { BehaviorSubject, EMPTY, Observable, of } from 'rxjs';
import { concatMap, tap, map, delay } from 'rxjs/operators';
import { IResponse } from '../interfaces/response-interface';
import { AbstractControl, Validators } from '@angular/forms';
import { SharedNotesService } from '../../features/notes/services/shared-notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private sharedNotesService = inject(SharedNotesService);
  private backendService = inject(BackendService);

  onAddSection(section: ISection, index: number): Observable<IResponse> {
    return this.backendService.onAddSection(section, index).pipe(
      concatMap(postResult => {
        if (postResult.status) {
          return this.getSections().pipe(
            map(() => postResult)
          )
        } else {
          return of(postResult);
        }
      }));
  }

  onEditSection(section: IEditSectionRequest): Observable<IResponse> {
    return this.backendService.onEditSection(section);
  }

  onAddSubSection(subSection: ISubSection, sectionIndex: number, subSectionIndex: number): Observable<IResponse> {
    return this.backendService.onAddSubSection(subSection, sectionIndex, subSectionIndex).pipe(
      concatMap(postResult => {
        if (postResult?.status) {
          return this.getSections().pipe(
            map(() => postResult)
          )
        } else {
          return of(postResult);
        }
      }));
  }

  onAddContent(content: IContent, sectionIndex: number, subSectionIndex: number, contentIndex: number, isBulkContent: boolean): Observable<IResponse> {
    return this.backendService.onAddContent(content, sectionIndex, subSectionIndex, contentIndex, isBulkContent).pipe(
      concatMap(postResult => {
        if (postResult?.status) {
          return this.getSections().pipe(
            map(() => postResult)
          );
        } else {
          return of(postResult);
        }
      }));
  }

  onEditSubSection(subSection: IEditSubSectionRequest): Observable<IResponse> {
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

  getSections(): Observable<ISection[]> {
    const selectedNote = this.sharedNotesService.currentNote();
    if (selectedNote?.type) {
      return this.backendService.getSections(selectedNote.type).pipe(tap(sections => {
        console.log(sections);
        this.sharedNotesService.setCurrentNoteSections(sections);
      }));
    }
    return EMPTY;
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
}
