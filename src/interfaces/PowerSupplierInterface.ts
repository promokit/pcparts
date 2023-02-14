import { Types } from 'mongoose';
export interface PowerSupplierInterface {
    model: string;
    brand: Types.ObjectId;
    form_factor: Types.ObjectId;
}
