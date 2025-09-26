import { Injectable, signal } from '@angular/core';
import { IManageNotesAction } from '../../../core/interfaces/manage-notes-action-interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { INote, ISection, ISubSection, ITopic } from '../../../core/interfaces/note-interface';

@Injectable({
  providedIn: 'root'
})
export class SharedNotesService {
  private _manageNoteCurrentAction = signal<IManageNotesAction | undefined>(undefined);
  private _currentNoteSections = signal<ISection[]>([]);
  private _currentActionRow = signal<ISection | ISubSection | ITopic | undefined>(undefined);
  private _applyActionPosition = signal<string>('');
  private _currentNote = signal<INote | undefined>(undefined);

  private _manageNoteActionBehaviourSub = new BehaviorSubject<IManageNotesAction | undefined>(this._manageNoteCurrentAction());
  private currentNoteSectionsBehaviourSub = new BehaviorSubject<ISection[]>(this._currentNoteSections());

  currentActionRow = this._currentActionRow.asReadonly();
  applyActionPosition = this._applyActionPosition.asReadonly();
  currentNote = this._currentNote.asReadonly();
  currentNoteSections = this._currentNoteSections.asReadonly();
  manageNoteCurrentAction = this._manageNoteCurrentAction.asReadonly();


  getCurrentActionObservable(): Observable<IManageNotesAction | undefined> {
    return this._manageNoteActionBehaviourSub.asObservable();
  }

  getCurrentNoteSectionsObservable(): Observable<ISection[]> {
    return this.currentNoteSectionsBehaviourSub.asObservable();
  }

  setCurrentActionObservable(action: IManageNotesAction | undefined) {
    this._manageNoteCurrentAction.set(action);
    this._manageNoteActionBehaviourSub.next(action);
  }

  setCurrectActionRowDetail(row: ISection | ISubSection | ITopic | undefined, position: string) {
    this._currentActionRow.set(row);
    this._applyActionPosition.set(position);
  }

  setCurrentNote(note: INote | undefined) {
    this._currentNote.set(note);
  }

  setCurrentNoteSections(sections: ISection[]) {
    this._currentNoteSections.set(sections);
    this.currentNoteSectionsBehaviourSub.next(sections);
  }

}
