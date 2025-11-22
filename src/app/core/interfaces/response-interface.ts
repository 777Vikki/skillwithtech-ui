import { ISection, IContent } from "./note-interface";

export interface IResponse {
    status: boolean;
    message: string;
    data: (ISection | IContent)[]
}