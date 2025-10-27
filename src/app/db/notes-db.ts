import { Note } from "../core/enums/note-enum"
import { ISubject, ISection } from "../core/interfaces/note-interface"
import { angularMicrofrontendList } from "./testing/angular-microfrontent"
import { angularList } from "./testing/angular-testing"
import { azureList } from "./testing/azure-list"
import { htmlList } from "./testing/htmlList"
import { javascriptList } from "./testing/javascript-list"
import { ngrxList } from "./testing/ngrx-list"
import { practiceList } from "./testing/practice"
import { rxjsList } from "./testing/rxjs-list"
import { typescriptList } from "./testing/typescript-list"

export const storeCount = () => {
  return {
    section: 55,
    subSection: 18,
    topic: 265,
  }
}

const notes = (): ISubject[] => {
  return [
    {
      name: "Angular",
      type: Note.ANGULAR,
      id: 1,
      sections: angularList(),
    },
    {
      name: "NgRx",
      type: Note.NGRX,
      id: 2,
      sections: ngrxList(),
    },
    {
      name: "RxJS",
      type: Note.RXJS,
      id: 3,
      sections: rxjsList(),
    },
    {
      name: "JavaScript",
      type: Note.JAVASCRIPT,
      id: 4,
      sections: javascriptList(),
    },
    {
      name: "TypeScript",
      type: Note.TYPESCRIPT,
      id: 5,
      sections: typescriptList(),
    },
    {
      name: "HTML",
      type: Note.HTML,
      id: 6,
      sections: htmlList(),
    },
    {
      name: "CSS",
      type: Note.CSS,
      id: 7,
      sections: [],
    },
    {
      name: "CI/CD pipelines with Azure",
      type: Note.AZURE,
      id: 8,
      sections: azureList(),
    },
    {
      name: "Micro Frontend in Angular",
      type: Note.ANGULAR_MICROFRONTEND,
      id: 9,
      sections: angularMicrofrontendList()
    },
    {
      name: "Practice Set",
      type: Note.PRACTICE_SET,
      id: 10,
      sections: practiceList(),
    }
  ]
}

export const availableNotes = (): ISubject[] => {
  const filterNotes: string[] = [Note.CSS, Note.AZURE];
  const headers = [...notes()].filter(s => !filterNotes.includes(s.type)).map(d => {
    d.sections = [];
    return d;
  });
  return headers;
}

export const notesDb = (type: string): ISection[] => {
  return [...notes()].find(d => d.type === type)?.sections ?? [];
}