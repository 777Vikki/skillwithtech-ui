import { Injectable, signal } from '@angular/core';
import { IManageNotesAction } from '../../../core/interfaces/manage-notes-action-interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { INote, ISection, ISubSection, ITopic } from '../../../core/interfaces/note-interface';

@Injectable({
  providedIn: 'root'
})
export class SharedNotesService {
  private _manageNoteCurrentAction = signal<IManageNotesAction | undefined>(undefined);
  private _currentNoteSections = signal<ISection[]>([]);
  private _currentActionRow = signal<ISection | ISubSection | ITopic | undefined>(undefined);
  private _applyActionPosition = signal<string>('');
  private _currentNote = signal<INote | undefined>(undefined);

  private _manageNoteActionBehaviourSub = new BehaviorSubject<IManageNotesAction | undefined>(this._manageNoteCurrentAction());
  private currentNoteSectionsBehaviourSub = new BehaviorSubject<ISection[]>(this._currentNoteSections());

  currentActionRow = this._currentActionRow.asReadonly();
  applyActionPosition = this._applyActionPosition.asReadonly();
  currentNote = this._currentNote.asReadonly();
  currentNoteSections = this._currentNoteSections.asReadonly();
  manageNoteCurrentAction = this._manageNoteCurrentAction.asReadonly();


  getCurrentActionObservable(): Observable<IManageNotesAction | undefined> {
    return this._manageNoteActionBehaviourSub.asObservable();
  }

  getCurrentNoteSectionsObservable(): Observable<ISection[]> {
    return this.currentNoteSectionsBehaviourSub.asObservable();
  }

  setCurrentActionObservable(action: IManageNotesAction | undefined) {
    this._manageNoteCurrentAction.set(action);
    this._manageNoteActionBehaviourSub.next(action);
  }

  setCurrectActionRowDetail(row: ISection | ISubSection | ITopic | undefined, position: string) {
    this._currentActionRow.set(row);
    this._applyActionPosition.set(position);
  }

  setCurrentNote(note: INote | undefined) {
    this._currentNote.set(note);
  }

  setCurrentNoteSections(sections: ISection[]) {
    this._currentNoteSections.set(sections);
    this.currentNoteSectionsBehaviourSub.next(sections);
  }

  deleteSection(sectionIndex: number) {
    this._currentNoteSections.update((sections: ISection[]) =>
      sections.filter((section: ISection, index: number) => sectionIndex !== index)
    )
  }

  deleteSubSection(sectionIndex: number, subSectionIndex: number) {
    this._currentNoteSections.update((sections: ISection[]) =>
      sections.map((section, index) =>
        index === sectionIndex
          ? {
            ...section,
            subSections: section.subSections.filter((_, i) => i !== subSectionIndex)
          }
          : section
      )
    )
  }

  deleteConten(content: ITopic) {
    this._currentNoteSections.update((sections: ISection[]) =>
      sections.map((section: ISection) =>
        content.subSectionId > -1
          ? {
            ...section,
            subSections: section.subSections.map((subSection) =>
              subSection.subSectionId === content.subSectionId
                ? {
                  ...subSection,
                  topics: subSection.topics.filter((topic: ITopic) => topic.topicId !== content.topicId)
                }
                : subSection
            )
          }
          : {
            ...section,
            topics: section.topics.filter((topic: ITopic) => topic.topicId !== content.topicId)
          }
      )
    )
  }

  private updateSections(updater: (section: ISection) => ISection): void {
    this._currentNoteSections.update((sections: ISection[]) =>
      sections.map(updater)
    );
  }

  updateSectionText(text: string, sectionId: number) {
    this.updateSections((section) =>
      section.sectionId === sectionId
        ? { ...section, name: text }
        : section
    );
  }

  updateSubSectionText(text: string, sectionId: number, subSectionId: number) {
    this.updateSections((section) =>
      section.sectionId === sectionId
        ? {
          ...section,
          subSections: section.subSections.map((subSection) =>
            subSection.subSectionId === subSectionId
              ? { ...subSection, name: text }
              : subSection
          ),
        }
        : section
    );
  }

  updateContentText(
    text: string,
    sectionId: number,
    subSectionId: number,
    contentId: number
  ) {
    this.updateSections((section) => {
      if (section.sectionId !== sectionId) return section;

      if (subSectionId > 0) {
        // Update inside subsection
        return {
          ...section,
          subSections: section.subSections.map((subSection) =>
            subSection.subSectionId === subSectionId
              ? {
                ...subSection,
                topics: subSection.topics.map((topic) =>
                  topic.topicId === contentId ? { ...topic, text } : topic
                ),
              }
              : subSection
          ),
        };
      }

      // Update directly inside section
      return {
        ...section,
        topics: section.topics.map((topic) =>
          topic.topicId === contentId ? { ...topic, text } : topic
        ),
      };
    });
  }


  // updateSectionText(text: string, sectionId: number) {
  //   this._currentNoteSections.update((sections: ISection[]) =>
  //     sections.map((section: ISection) =>
  //       section.sectionId === sectionId
  //         ? {
  //           ...section,
  //           name: text
  //         }
  //         : section
  //     )
  //   );
  // }

  // updateSubSectionText(text: string, sectionId: number, subSectionId: number) {
  //   this._currentNoteSections.update((sections: ISection[]) =>
  //     sections.map((section) =>
  //       section.sectionId === sectionId
  //         ? {
  //           ...section,
  //           subSections: section.subSections.map((subsection: ISubSection) =>
  //             subsection.subSectionId === subSectionId
  //               ? {
  //                 ...subsection,
  //                 name: text
  //               }
  //               : subsection
  //           )
  //         }
  //         : section
  //     )
  //   );
  // }

  // updateContentText(text: string, sectionId: number, subSectionId: number, contentId: number) {
  //   this._currentNoteSections.update((sections: ISection[]) =>
  //     sections.map((section: ISection) =>
  //       section.sectionId === sectionId
  //         ? subSectionId > 0
  //           ? {
  //             ...section,
  //             subSections: section.subSections.map((subSection: ISubSection) =>
  //               subSection.subSectionId === subSectionId
  //                 ? {
  //                   ...subSection,
  //                   topics: subSection.topics.map((content: ITopic) =>
  //                     content.topicId === contentId
  //                       ? {
  //                         ...content,
  //                         text: text
  //                       }
  //                       : content
  //                   )
  //                 }
  //                 : subSection
  //             )
  //           }
  //           : {
  //             ...section,
  //             topics: section.topics.map((content: ITopic) =>
  //               content.topicId === contentId
  //                 ? {
  //                   ...content,
  //                   text: text
  //                 }
  //                 : content
  //             )
  //           }
  //         : section
  //     )
  //   )
  // }
}
