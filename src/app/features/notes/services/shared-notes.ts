import { Injectable, signal } from '@angular/core';
import { IManageNotesAction } from '../../../core/interfaces/manage-notes-action-interface';

@Injectable({
  providedIn: 'root'
})
export class SharedNotesService {
  private _manageNotesAction = signal<IManageNotesAction | undefined>(undefined);
  manageNotesAction = this._manageNotesAction.asReadonly()

  setManageNotesAction(action: IManageNotesAction | undefined) {
    this._manageNotesAction.set(action);
  }
}
