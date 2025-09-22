import { ISection, ISubSection, ITopic } from "./note-interface";

export interface IResponse {
    status: boolean;
    data: (ISection | ISubSection | ITopic)[]
}