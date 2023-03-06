import { Types } from 'mongoose';
export interface CaseInterface {
    _id: string;
    model: string;
    brand: Types.ObjectId;
    form_factor: Types.ObjectId;
}

export interface CaseArgsInterface {
    _id: string;
    limit: number;
    brand: string;
    form_factor: string;
}
