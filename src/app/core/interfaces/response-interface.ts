import { ISection, ISubSection, ITopic } from "./note-interface";

export interface IResponse {
    status: boolean;
    message: string;
    data: (ISection | ISubSection | ITopic)[]
}