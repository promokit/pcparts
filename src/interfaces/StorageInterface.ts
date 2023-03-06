import { Types } from 'mongoose';
export interface StorageInterface {
    _id: number;
    model: string;
    cache: number;
    capacity: number;
    type: Types.ObjectId;
    brand: Types.ObjectId;
    port: Types.ObjectId;
    form_factor: Types.ObjectId;
}

export interface StorageArgsInterface {
    _id: number;
    limit: number;
    type: string;
    brand: string;
    port: string;
    form_factor: string;
}
