import { Types } from 'mongoose';
export interface CaseInterface {
    model: string;
    brand: Types.ObjectId;
    form_factor: Types.ObjectId;
}
