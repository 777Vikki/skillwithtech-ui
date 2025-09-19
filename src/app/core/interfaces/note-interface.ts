export interface INote { 
    name: string;
    type: string;
    sections: ISection[];
}

export interface ISection {
    name: string;
    sectionId: number;
    noteType: string;
    topics: ITopic[];
    subSections: ISubSection[];
}

export interface ITopic {
    text: string;
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
    topics: ITopic[];
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
