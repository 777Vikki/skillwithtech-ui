import { Note } from "../core/enums/note-enum"
import { angularList } from "./testing/angular-testing"

export const notesDb = () => {
    return [
        {
          name: "Angular",
          type: Note.ANGULAR,
          sections: angularList(),
        },
        {
          name: "NgRx",
          type: Note.NGRX,
          sections: [],
        },
        {
          name: "RxJS",
          type: Note.RXJS,
          sections: [],
        },
        {
          name: "JavaScript",
          type: Note.JAVASCRIPT,
          sections: [],
        },
        {
          name: "TypeScript",
          type: Note.TYPESCRIPT,
          sections: [],
        },
        {
          name: "HTML",
          type: Note.HTML,
          sections: [],
        },
        {
          name: "CSS",
          type: Note.CSS,
          sections: [],
        },
      ]
}