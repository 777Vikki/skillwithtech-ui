import { Note } from "../core/enums/note-enum"
import { ISubject, ISection, IContent, ISubSection, ISubject1, ISection1, IQuestionAnswer } from "../core/interfaces/note-interface"
import { angularMicrofrontendList } from "./testing/angular-microfrontent"
import { angularList } from "./testing/angular-testing"
import { azureList } from "./testing/azure-list"
import { htmlList } from "./testing/htmlList"
import { javascriptList } from "./testing/javascript-list"
import { ngrxList } from "./testing/ngrx-list"
import { rxjsList } from "./testing/rxjs-list"
import { typescriptList } from "./testing/typescript-list"

export const storeCount = () => {
  return {
    section: 50,
    subSection: 14,
    topic: 233,
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
    }
  ]
}

const countData: any = {
    subjectId: 1,
    sectionId: 1,
    qaDataId: 1,
}

function getCountData(type: string): number {
  const d = countData[type];
  countData[type] = countData[type] + 1;
  return d;
}

function testData() {
  let noteList: any[] = structuredClone(notes());
  const noteListMap: ISubject1[] = noteList.map(subjectData => {
    const subjectId = getCountData('subjectId');
    const subjectDataMap: ISubject1 = {
      id: subjectId,
      title: subjectData.name,
      description: '',
      sections: subjectData.sections.map((sectionData: ISection) => {
        const sectionId = getCountData('sectionId');
        const sectionDataMap: ISection1 = {
          subjectId: subjectId,
          sectionId: sectionId,
          rootId: 0,
          title: sectionData.name,
          qaData: sectionData.topics.map((questionData: IContent) => {
            const qaDataId = getCountData('qaDataId');
            const questionDataMap = {
              id: qaDataId,
              sectionId: sectionId,
              question: questionData.text,
              answerList: [questionData.description]
            }
            return questionDataMap;
          }),
          subSections: sectionData.subSections.map((subSectionData: ISubSection) => {
            const subSectionId = getCountData('sectionId');
            const subSectionDataMap: ISection1 = {
              subjectId: subjectData.id,
              sectionId: subSectionId,
              rootId: sectionId,
              title: subSectionData.name,
              qaData: subSectionData.topics.map((questionDataSub: IContent) => {
                const qaDataSubId = getCountData('qaDataId');
                const questionDataSubMap: IQuestionAnswer = {
                  id: qaDataSubId,
                  sectionId: subSectionId,
                  question: questionDataSub.text,
                  answerList: [questionDataSub.description]
                }
                return questionDataSubMap;
              }),
              subSections: [],
            }
            return subSectionDataMap;
          })
        }
        return sectionDataMap;
      }),
    }
    return subjectDataMap;
  });
  console.log(noteListMap);
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
  testData();
  return [...notes()].find(d => d.type === type)?.sections ?? [];
}