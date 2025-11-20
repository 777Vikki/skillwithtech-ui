export interface IContent {
    description: string;
    subjectId: number;
    sectionId: number;
    parentSectionId: number;
    text: string;
    contentId: number;
}

export interface ISection {
    name: string;
    subjectId: number;
    sectionId: number;
    parentSectionId: number;
    contents: IContent[];
    subSections: ISection[];
}

export interface ISubject { 
    id: number;
    links: string[];
    name: string;
    sections: ISection[];
}

export interface IEditSectionRequest {
    name: string;
    parentSectionId: number;
    sectionId: number;
    subjectId: number;
}

export interface IEditContentRequest {
    text: string;
    sectionId: number;
    subSectionId: number;
    contentId: number;
}
