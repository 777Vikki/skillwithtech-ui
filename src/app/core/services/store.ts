import { Injectable } from '@angular/core';
import { INote } from '../interfaces/note-interface';
import { Note } from '../enums/note-enum';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private noteList: INote[] = [
    {
      name: "Angular",
      type: Note.ANGULAR
    },
    {
      name: "NgRx",
      type: Note.NGRX
    },
    {
      name: "RxJS",
      type: Note.RXJS
    },
    {
      name: "JavaScript",
      type: Note.JAVASCRIPT
    },
    {
      name: "TypeScript",
      type: Note.TYPESCRIPT
    },
    {
      name: "HTML",
      type: Note.HTML
    },
    {
      name: "CSS",
      type: Note.CSS
    },
  ];

  primaryNote() {
    return [...this.noteList].find(note => note.type === Note.ANGULAR);
  }

  getNotes(): INote[] {
    return [...this.noteList];
  }

}
