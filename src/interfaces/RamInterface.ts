import { Types } from 'mongoose';
export interface RamInterface {
    model: string;
    type: Types.ObjectId;
    brand: Types.ObjectId;
    speed: Types.ObjectId;
    modules: number;
    first_word_latency: string;
    cas_latency: number;
    capacity: number;
}
