import { inject, Injectable } from '@angular/core';
import { IEditContentRequest, IEditSectionRequest, IEditSubSectionRequest, INote, ISection, ISubSection, ITopic } from '../interfaces/note-interface';
import { BackendService } from './backend';
import { BehaviorSubject, EMPTY, Observable, of } from 'rxjs';
import { concatMap, tap, map, delay } from 'rxjs/operators';
import { IResponse } from '../interfaces/response-interface';
import { AbstractControl, Validators } from '@angular/forms';
import { StoreService } from './store';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private storeService = inject(StoreService);
  private backendService = inject(BackendService);

  protected selectedNotes: INote = this.storeService.getDummyNotes();
  private notesSection = new BehaviorSubject<ISection[]>([]);

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

  onAddContent(content: ITopic, sectionIndex: number, subSectionIndex: number, contentIndex: number, isBulkContent: boolean): Observable<IResponse> {
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

  onDeleteContent(content: ITopic): Observable<IResponse> {
    return this.backendService.onDeleteContent(content);
  }

  onDeleteSection(index: number): Observable<IResponse> {
    return this.backendService.onDeleteSection(index);
  }

  onDeleteSubSection(sectionIndex: number, subSectionIndex: number): Observable<IResponse> {
    return this.backendService.onDeleteSubSection(sectionIndex, subSectionIndex);
  }

  onAddDescription(topic: ITopic, description: string): Observable<IResponse> {
    return this.backendService.onAddDescription(topic, description);
  }

  setSelectedNotes(notes: INote) {
    this.selectedNotes = notes;
    this.getSections().subscribe();
  }

  getNotesSection(): Observable<ISection[]> {
    return this.notesSection.asObservable();
  }

  getSections(): Observable<ISection[]> {
    if (this.selectedNotes.type) {
      return this.backendService.getSections(this.selectedNotes.type).pipe(tap(section => {
        console.log(section);
        this.notesSection.next(section);
      }));
    }
    return EMPTY;
  }

  getSelectedNotes(): INote {
    return this.selectedNotes;
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
