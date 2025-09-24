import { Injectable, signal } from '@angular/core';
import { IManageNotesAction } from '../../../core/interfaces/manage-notes-action-interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISection, ISubSection, ITopic } from '../../../core/interfaces/note-interface';

@Injectable({
  providedIn: 'root'
})
export class SharedNotesService {
  private _manageNoteActionBehaviourSub = new BehaviorSubject<IManageNotesAction | undefined>(undefined);
  private _currentActionRow = signal<ISection | ISubSection | ITopic | undefined>(undefined);
  private _applyActionPosition = signal<string>('');

  currentActionRow = this._currentActionRow.asReadonly();
  applyActionPosition = this._applyActionPosition.asReadonly();


  getCurrentActionObservable(): Observable<IManageNotesAction | undefined> {
    return this._manageNoteActionBehaviourSub.asObservable();
  } 

  setCurrentActionObservable(action: IManageNotesAction | undefined) {
    this._manageNoteActionBehaviourSub.next(action);
  }

  setCurrectActionRow(row: ISection | ISubSection | ITopic | undefined) {
    this._currentActionRow.set(row);
  }

  setApplyActionPosition(position: string) {
    this._applyActionPosition.set(position);
  }
}
