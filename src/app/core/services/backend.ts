import { Injectable } from '@angular/core';
import { IEditContentRequest, IEditSectionRequest, ISection, IContent } from '../interfaces/note-interface';
import { Observable, of } from 'rxjs';
import { IResponse } from '../interfaces/response-interface';

type Count = 'subject' | 'section' | 'content';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private currentNoteSections: ISection[] = [];
  private currentNoteKey: string | undefined;
  private currentNoteId: number | undefined;
  private count = {
    "subject": 13,
    "section": 87,
    "content": 339
  };

  private getCount(type: Count) {
    const data = localStorage.getItem("count");
    if (data) {
      this.count = JSON.parse(data);
    }
    this.count[type] += 1;
    localStorage.setItem("count", JSON.stringify(this.count));
    return this.count[type];
  }

  getContent(noteId: number, sectionId: number, subSectionId: number, contentId: number): Observable<IResponse> {
    // let sections: ISection[] = notesDbById(noteId);
    // const type = sections.length > 0? sections[0].noteType : '';
    // if(type) {
    //   const localStoragedata = localStorage.getItem(type);
    //   if(localStoragedata) {
    //     if(localStoragedata) sections = JSON.parse(localStoragedata);
    //   }
    // }
    // if (sections && sections.length) {
    //   const selectedSection = sections.find(d => d.sectionId === sectionId);
    //   if (selectedSection) {
    //     if (subSectionId > -1) {
    //       const selectedSubSection = selectedSection.subSections.find(d => d.subSectionId === subSectionId);
    //       if (selectedSubSection) {
    //         const selectedContent = selectedSubSection.contents.find(d => d.contentId === contentId);
    //         if (selectedContent) {
    //           return of({ status: true, message: 'Success', data: [structuredClone(selectedContent)] });
    //         }
    //       }
    //     } else {
    //       const selectedContent = selectedSection.contents.find(d => d.contentId === contentId);
    //       if (selectedContent) {
    //         return of({ status: true, message: 'Success', data: [structuredClone(selectedContent)] });
    //       }
    //     }
    //   }
    // }
    return of({ status: false, message: 'Detail is not found.', data: [] });
  }

  onEditSubSection(subSection: IEditSectionRequest): Observable<IResponse> {
    const subSections = this.currentNoteSections.find(d => d.sectionId === subSection.sectionId)?.subSections;
    if (subSections) {
      const subSec = subSections.find(d => d.subSectionId === subSection.subSectionId);
      if (subSec) {
        subSec.name = subSection.name;
        this.storeSection(this.currentNoteSections);
        return of({ status: true, message: 'Success', data: [] });
      }
    }
    return of({ status: false, message: 'Detail is not found.', data: [] });
  }

  onEditContent(content: IEditContentRequest): Observable<IResponse> {
    const section = this.currentNoteSections.find(d => d.sectionId === content.sectionId);
    let selectedContent: IContent | undefined;
    if (content.subSectionId > 0) {
      const contents = section?.subSections.find(d => d.subSectionId === content.subSectionId)?.contents
      selectedContent = contents?.find(d => d.contentId === content.contentId);
    } else {
      selectedContent = section?.contents.find(d => d.contentId === content.contentId);
    }
    if (selectedContent) {
      selectedContent.text = content.text;
      this.storeSection(this.currentNoteSections);
      return of({ status: true, message: 'Success', data: [] });
    }
    return of({ status: false, message: 'Detail is not found.', data: [] });
  }

  onDeleteContent(content: IContent): Observable<IResponse> {
    const section = this.currentNoteSections.find(d => d.sectionId === content.sectionId);
    let selectedContents: IContent[] = [];
    if (content.subSectionId > 0) {
      selectedContents = section?.subSections.find(d => d.subSectionId === content.subSectionId)?.contents ?? []
    } else {
      selectedContents = section?.contents ?? [];
    }
    const index = selectedContents.findIndex(d => d.contentId === content.contentId);
    if (index > -1) {
      selectedContents.splice(index, 1);
    }
    this.storeSection(this.currentNoteSections);
    return of({ status: true, message: 'Success', data: [] });
  }

  onDeleteSection(index: number) {
    this.currentNoteSections.splice(index, 1);
    this.storeSection(this.currentNoteSections);
    return of({ status: true, message: 'Success', data: [] });
  }

  onDeleteSubSection(sectionIndex: number, subSectionIndex: number) {
    this.currentNoteSections[sectionIndex].subSections.splice(subSectionIndex, 1);
    this.storeSection(this.currentNoteSections);
    return of({ status: true, message: 'Success', data: [] });
  }

  onAddDescription(content: IContent, description: string): Observable<IResponse> {
    const section: ISection | undefined = this.currentNoteSections.find(d => d.sectionId === content.sectionId);
    let selectedContent: IContent | undefined = undefined;
    if (section) {
      if (content.subSectionId != null && content.subSectionId > 0) {
        const subSection = section.subSections.find(d => d.subSectionId === content.subSectionId) ?? undefined;
        if (subSection && subSection.contents.length) {
          selectedContent = subSection.contents.find(d => d.contentId === content.contentId);
        }
      }
      if (!selectedContent && section.contents.length) {
        selectedContent = section.contents.find(d => d.contentId === content.contentId) ?? undefined;
      }
      if (selectedContent) {
        selectedContent.description = description;
        this.storeSection(this.currentNoteSections);
        return of({ status: true, message: 'Success', data: [content] });
      } else {
        return of({ status: false, message: 'data is not added.', data: [content] });
      }
    }
    return of({ status: false, message: 'data is not added.', data: [content] });
  }

  storeSection(sections: ISection[]) {
    const data = JSON.stringify(sections);
    if (this.currentNoteKey) {
      localStorage.setItem(this.currentNoteKey, data);
    }
  }
}
