import { Types } from 'mongoose';
export interface RamInterface {
    _id: string;
    model: string;
    type: Types.ObjectId;
    brand: Types.ObjectId;
    speed: Types.ObjectId;
    modules: number;
    first_word_latency: string;
    cas_latency: number;
    capacity: number;
}

export interface RamArgsInterface {
    _id: string;
    limit: number;
    brand: string;
    type: string;
    speed: number;
}
