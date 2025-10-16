export interface ISubject1 {
    id: number;
    title: string;
    description?: string;
    sections: ISection1[];
}

export interface ISection1 {
    subjectId: number;
    sectionId: number;
    rootId: number;
    title: string;
    qaData: IQuestionAnswer[];
    subSections: ISection1[];
}

export interface IQuestionAnswer {
    id: number;
    sectionId: number;
    question: string;
    answerList: string[];
}

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
