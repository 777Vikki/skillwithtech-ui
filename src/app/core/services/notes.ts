import { inject, Injectable } from '@angular/core';
import { IEditContentRequest, IEditSectionRequest, IEditSubSectionRequest, INote, ISection, ISubSection, ITopic } from '../interfaces/note-interface';
import { BackendService } from './backend';
import { BehaviorSubject, EMPTY, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IResponse } from '../interfaces/response-interface';
import { AbstractControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  backendService = inject(BackendService);

  protected selectedNotes: INote = { name: '', type: '', sections: [] };
  private notesSection = new BehaviorSubject<ISection[]>([]);

  onAddSection(section: ISection, index: number): Observable<IResponse> {
    return this.backendService.onAddSection(section, index);
  }

  onEditSection(section: IEditSectionRequest): Observable<IResponse> {
    return this.backendService.onEditSection(section);
  }

  onAddSubSection(subSection: ISubSection, sectionIndex: number, subSectionIndex: number): Observable<IResponse> {
    return this.backendService.onAddSubSection(subSection, sectionIndex, subSectionIndex);
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

  onAddContent(content: ITopic, sectionIndex: number, subSectionIndex: number, contentIndex: number): Observable<IResponse> {
    return this.backendService.onAddContent(content, sectionIndex, subSectionIndex, contentIndex);
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
        this.notesSection.next(section);
      }));
    }
    return EMPTY;
  }

  getSelectedNotes(): INote {
    return this.selectedNotes;
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
