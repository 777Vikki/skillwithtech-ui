import { inject, Injectable } from '@angular/core';
import { INote, ISection, ITopic } from '../interfaces/note-interface';
import { BackendService } from './backend';
import { BehaviorSubject, EMPTY, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IResponse } from '../interfaces/response-interface';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  backendService = inject(BackendService);

  protected selectedNotes: INote | undefined;
  private notesSection = new BehaviorSubject<ISection[]>([]);

  onAddSection(section: ISection, index: number): Observable<IResponse> {
    return this.backendService.onAddSection(section, index);
  }

  onAddTopic(topic: ITopic, index: number): Observable<IResponse> {
    return this.backendService.onAddTopic(topic, index);
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
    if (this.selectedNotes?.type) {
      return this.backendService.getSections(this.selectedNotes.type).pipe(tap(section => {
        this.notesSection.next(section);
      }));
    }
    return EMPTY;
  }

  getSelectedNotes(): INote {
    return this.selectedNotes || { name: '', type: '' };
  }

  getPlainText(rawHtml: string): string {
    let doc = new DOMParser().parseFromString(rawHtml, 'text/html');
    let plainText = doc.body.textContent || "";
    return plainText;
  }
}
