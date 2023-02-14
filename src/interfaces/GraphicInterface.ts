import { Types } from 'mongoose';
export interface GraphicInterface {
    model: string;
    brand: Types.ObjectId;
    graphics_bus: Types.ObjectId;
    memory_capacity: number;
    clock_speed: number;
    boost_clock: number;
    length: string;
    chipset: string;
}
