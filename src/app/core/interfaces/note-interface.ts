export interface ISubject {
    name: string;
    links: string[];
    id: number;
    sections: ISection[]
}

export interface ISection {
    name: string;
    subjectId: number;
    sectionId: number;
    subSectionId: number;
    subSections: ISection[];
    contents: IContent[];
}

export interface IContent {
    description: string;
    subjectId: number;
    sectionId: number;
    subSectionId: number;
    contentId: number;
    text: string;
}

export interface IEditSectionRequest {
    name: string;
    subSectionId: number;
    sectionId: number;
    subjectId: number;
}

export interface IEditContentRequest {
    text: string;
    sectionId: number;
    subSectionId: number;
    contentId: number;
}
