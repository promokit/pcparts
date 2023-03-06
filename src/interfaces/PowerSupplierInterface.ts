import { Types } from 'mongoose';
export interface PowerSupplierInterface {
    _id: string;
    model: string;
    brand: Types.ObjectId;
    form_factor: Types.ObjectId;
}

export interface PowerSupplierArgsInterface {
    _id: string;
    limit: number;
    brand: string;
    form_factor: string;
}
