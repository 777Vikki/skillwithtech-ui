import { Note } from "../core/enums/note-enum"
import { INote, ISection } from "../core/interfaces/note-interface"
import { angularList } from "./testing/angular-testing"
import { azureList } from "./testing/azure-list"

export const storeCount = () => {
  return {
    section: 30,
    subSection: 0,
    topic: 77,
  }
}

export const notesDb = (type: string): ISection[]  => {
  switch(type) {
    case Note.ANGULAR: {
      return angularList()
    }

    case Note.NGRX: {
      return []
    }

    case Note.RXJS: {
      return []
    }

    case Note.JAVASCRIPT: {
      return []
    }

    case Note.TYPESCRIPT: {
      return []
    }

    case Note.HTML: {
      return []
    }

    case Note.CSS: {
      return []
    }

    case Note.AZURE: {
      return azureList()
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
    {
      name: "JavaScript",
      type: Note.JAVASCRIPT,
      id: 4,
      sections: [],
    },
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
    {
      name: "Azure",
      type: Note.AZURE,
      id: 8,
      sections: []
    }
  ]
}