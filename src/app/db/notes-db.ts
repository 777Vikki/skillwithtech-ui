import { Note } from "../core/enums/note-enum"
import { INote, ISection } from "../core/interfaces/note-interface"
import { angularMicrofrontendList } from "./testing/angular-microfrontent"
import { angularList } from "./testing/angular-testing"
import { azureList } from "./testing/azure-list"
import { htmlList } from "./testing/htmlList"
import { ngrxList } from "./testing/ngrx-list"
import { rxjsList } from "./testing/rxjs-list"
import { typescriptList } from "./testing/typescript-list"

export const storeCount = () => {
  return {
    section: 43,
    subSection: 12,
    topic: 194,
  }
}

export const notesDb = (type: string): ISection[]  => {
  switch(type) {
    case Note.ANGULAR: {
      return angularList();
    }

    case Note.NGRX: {
      return ngrxList();
    }

    case Note.RXJS: {
      return rxjsList();
    }

    case Note.JAVASCRIPT: {
      return []
    }

    case Note.TYPESCRIPT: {
      return typescriptList()
    }

    case Note.HTML: {
      return htmlList()
    }

    case Note.CSS: {
      return []
    }

    case Note.AZURE: {
      return azureList();
    }

    case Note.ANGULAR_MICROFRONTEND: {
      return angularMicrofrontendList()
    }
  }
  return [];
}

export const availableNotes = (): INote[] => {
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
      sections: [],
    },
    {
      name: "RxJS",
      type: Note.RXJS,
      id: 3,
      sections: [],
    },
    // {
    //   name: "JavaScript",
    //   type: Note.JAVASCRIPT,
    //   id: 4,
    //   sections: [],
    // },
    {
      name: "TypeScript",
      type: Note.TYPESCRIPT,
      id: 5,
      sections: [],
    },
    {
      name: "HTML",
      type: Note.HTML,
      id: 6,
      sections: [],
    },
    {
      name: "CSS",
      type: Note.CSS,
      id: 7,
      sections: [],
    },
    // {
    //   name: "CI/CD pipelines with Azure",
    //   type: Note.AZURE,
    //   id: 8,
    //   sections: []
    // }
    {
      name: "Micro Frontend in Angular",
      type: Note.ANGULAR_MICROFRONTEND,
      id: 9,
      sections: []
    }
  ]
}