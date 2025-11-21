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
import { angularVersionFeatureList } from "./testing/angular-version-features-list"
import { AngularRelatedFrontend } from "./testing/angular-related-frontend"

export const storeCount = () => {
  return {
    section: 75,
    subSection: 29,
    topic: 383,
  }
}

const notes = (): ISubject[] => {
  return [
    {
      name: "Angular",
      // type: Note.ANGULAR,
      id: 1,
      links: [],
      sections: angularList(),
    },
    {
      name: "Angular Version Features",
      // type: Note.ANGULAR_VERSION_FEATURES,
      links: [],
      id: 2,
      sections: angularVersionFeatureList(),
    },
    {
      name: "Advanced Angular",
      // type: Note.ANGULAR_RELATED_FRONTEND,
      links: [],
      id: 3,
      sections: AngularRelatedFrontend(),
    },
    {
      name: "Angular Unit Test",
      // type: Note.ANGULAR_UNIT_TEST,
      links: [],
      id: 4,
      sections: angularUnitTestList(),
    },
    // {
    //   name: "NgRx",
    //   type: Note.NGRX,
    //   id: 2,
    //   sections: ngrxList(),
    // },
    // {
    //   name: "RxJS",
    //   type: Note.RXJS,
    //   id: 3,
    //   sections: rxjsList(),
    // },
    // {
    //   name: "JavaScript",
    //   type: Note.JAVASCRIPT,
    //   id: 4,
    //   sections: javascriptList(),
    // },
    // {
    //   name: "TypeScript",
    //   type: Note.TYPESCRIPT,
    //   id: 5,
    //   sections: typescriptList(),
    // },
    // {
    //   name: "HTML",
    //   type: Note.HTML,
    //   id: 6,
    //   sections: htmlList(),
    // },
    // {
    //   name: "CSS",
    //   type: Note.CSS,
    //   id: 7,
    //   sections: cssList(), 
    // },
    // {
    //   name: "CI/CD pipelines with Azure",
    //   type: Note.AZURE,
    //   id: 8,
    //   sections: azureList(),
    // },
    // {
    //   name: "Micro Frontend in Angular",
    //   type: Note.ANGULAR_MICROFRONTEND,
    //   id: 9,
    //   sections: angularMicrofrontendList()
    // },
    // {
    //   name: "Practice Set",
    //   type: Note.PRACTICE_SET,
    //   id: 10,
    //   sections: practiceList(),
    // }
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