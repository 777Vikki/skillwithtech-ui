export interface ISubject { 
    name: string;
    type: string;
    id: number;
    sections: ISection[];
}

export interface ISection {
    name: string;
    sectionId: number;
    noteType: string;
    topics: IContent[];
    subSections: ISubSection[];
}

export interface IContent {
    text: string;
    noteId?: number;
    sectionId: number;
    subSectionId: number;
    noteType: string;
    topicId: number;
    description: string;
}
export interface ISubSection {
    name: string;
    sectionId: number;
    subSectionId: number;
    noteType: string;
    topics: IContent[];
}

export interface IEditSectionRequest {
    name: string;
    sectionId: number;
    noteType: string;
}

export interface IEditSubSectionRequest {
    name: string;
    sectionId: number;
    subSectionId: number;
    noteType: string;
}

export interface IEditContentRequest {
    text: string;
    sectionId: number;
    subSectionId: number;
    topicId: number;
}
