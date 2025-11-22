import { Injectable, signal } from '@angular/core';
import { IManageNotesAction } from '../../../core/interfaces/manage-notes-action-interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { ISubject, ISection, IContent } from '../../../core/interfaces/note-interface';

@Injectable({
  providedIn: 'root'
})
export class SharedNotesService {
  private _manageNoteCurrentAction = signal<IManageNotesAction | undefined>(undefined);
  private _currentNoteSections = signal<ISection[]>([]);
  private _currentActionRow = signal<ISection | IContent | undefined>(undefined);
  private _applyActionPosition = signal<string>('');
  private _currentNote = signal<ISubject | undefined>(undefined);
  private _subjectList = signal<ISubject[]>([]);
  private _loadingSubject = signal<boolean>(true);
  private _activeReorderContentIdList = signal<number[] | undefined>(undefined);

  private _manageNoteActionBehaviourSub = new BehaviorSubject<IManageNotesAction | undefined>(this._manageNoteCurrentAction());
  private currentNoteSectionsBehaviourSub = new BehaviorSubject<ISection[]>(this._currentNoteSections());

  currentActionRow = this._currentActionRow.asReadonly();
  applyActionPosition = this._applyActionPosition.asReadonly();
  currentNote = this._currentNote.asReadonly();
  currentNoteSections = this._currentNoteSections.asReadonly();
  manageNoteCurrentAction = this._manageNoteCurrentAction.asReadonly();
  subjectList = this._subjectList.asReadonly();
  loadingSubject = this._loadingSubject.asReadonly();
  activeReorderContentIdList = this._activeReorderContentIdList.asReadonly();

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

  setCurrectActionRowDetail(row: ISection | IContent | undefined, position: string) {
    this._currentActionRow.set(row);
    this._applyActionPosition.set(position);
  }

  setCurrentNote(note: ISubject | undefined) {
    this._currentNote.set(note);
  }

  setCurrentNoteSections(sections: ISection[]) {
    this._currentNoteSections.set(sections);
    this.currentNoteSectionsBehaviourSub.next(sections);
  }

  setSubjectList(subjects: ISubject[]) {
    this._subjectList.set(subjects);
  }

  setloadingSubject(loading: boolean) {
    this._loadingSubject.set(loading);
  }

  setActiveReorderContentIdList(ids: number[]) {
    this._activeReorderContentIdList.set(ids);
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

  deleteConten(content: IContent) {
    this._currentNoteSections.update((sections: ISection[]) =>
      sections.map((section: ISection) =>
        content.subSectionId > -1
          ? {
            ...section,
            subSections: section.subSections.map((subSection) =>
              subSection.subSectionId === content.subSectionId
                ? {
                  ...subSection,
                  contents: subSection.contents.filter((contentData: IContent) => contentData.contentId !== content.contentId)
                }
                : subSection
            )
          }
          : {
            ...section,
            contents: section.contents.filter((contentData: IContent) => contentData.contentId !== content.contentId)
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
                contents: subSection.contents.map((content) =>
                  content.contentId === contentId ? { ...content, text } : content
                ),
              }
              : subSection
          ),
        };
      }

      // Update directly inside section
      return {
        ...section,
        contents: section.contents.map((content) =>
          content.contentId === contentId ? { ...content, text } : content
        ),
      };
    });
  }
}
