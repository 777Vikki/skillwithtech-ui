import { Note } from "../core/enums/note-enum"
import { ISubject, ISection } from "../core/interfaces/note-interface"
import { angularMicrofrontendList } from "./testing/angular-microfrontent"
import { angularList } from "./testing/angular-list"
import { azureList } from "./testing/azure-list"
import { htmlList } from "./testing/htmlList"
import { javascriptList } from "./testing/javascript-list"
import { ngrxList } from "./testing/ngrx-list"
import { practiceList } from "./testing/practice"
import { rxjsList } from "./testing/rxjs-list"
import { typescriptList } from "./testing/typescript-list"
import { angularUnitTestList } from "./testing/angular-unit-test-list"
import { cssList } from "./testing/css-list"

export const storeCount = () => {
  return {
    section: 64,
    subSection: 20,
    topic: 352,
  }
}

const notes = (): ISubject[] => {
  return [
    {
      name: "Angular",
      id: 1,
      links: [],
      sections: angularList(),
    },
    {
      name: "Angular Unit Test",
      links: [],
      id: 11,
      sections: angularUnitTestList(),
    },
    {
      name: "NgRx",
      links: [],
      id: 2,
      sections: ngrxList(),
    },
    {
      name: "RxJS",
      links: [],
      id: 3,
      sections: rxjsList(),
    },
    {
      name: "JavaScript",
      links: [],
      id: 4,
      sections: javascriptList(),
    },
    {
      name: "TypeScript",
      links: [],
      id: 5,
      sections: typescriptList(),
    },
    {
      name: "HTML",
      links: [],
      id: 6,
      sections: htmlList(),
    },
    {
      name: "CSS",
      links: [],
      id: 7,
      sections: cssList(), 
    },
    {
      name: "CI/CD pipelines with Azure",
      links: [],
      id: 8,
      sections: azureList(),
    },
    {
      name: "Micro Frontend in Angular",
      links: [],
      id: 9,
      sections: angularMicrofrontendList()
    },
    {
      name: "Practice Set",
      links: [],
      id: 10,
      sections: practiceList(),
    }
  ]
}

export const availableNotes = (): ISubject[] => {
  const filterNotes: number[] = [];
  const headers = [...notes()].filter(s => !filterNotes.includes(s.id)).map(d => {
    d.sections = [];
    return d;
  });
  return headers;
}

export const notesDb = (id: number): ISection[] => {
  return [...notes()].find(d => d.id === id)?.sections ?? [];
}

export const notesDbById = (id: number): ISection[] => {
  return [...notes()].find(d => d.id === id)?.sections ?? [];
}