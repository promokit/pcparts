import { Types, Schema } from 'mongoose';
export interface StorageInterface {
    model: string;
    cache: number;
    capacity: number;
    type: Types.ObjectId;
    brand: Types.ObjectId;
    port: Types.ObjectId;
    form_factor: Types.ObjectId;
}
