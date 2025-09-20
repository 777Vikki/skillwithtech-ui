import { Note } from "../core/enums/note-enum"
import { INote, ISection } from "../core/interfaces/note-interface"
import { angularList } from "./testing/angular-testing"
import { azureList } from "./testing/azure-list"

export const storeCount = () => {
  return {
    section: 25,
    subSection: 0,
    topic: 64,
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
    {
      name: "Azure",
      type: Note.AZURE,
      sections: []
    }
  ]
}