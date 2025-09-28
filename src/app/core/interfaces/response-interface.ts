import { ISection, ISubSection, IContent } from "./note-interface";

export interface IResponse {
    status: boolean;
    message: string;
    data: (ISection | ISubSection | IContent)[]
}