import { Types } from 'mongoose';
export interface MotherboardInterface {
    model: string;
    ram_slots: number;
    brand: Types.ObjectId;
    socket: Types.ObjectId;
    chipset: Types.ObjectId;
    form_factor: Types.ObjectId;
    graphics_bus: Types.ObjectId;
}

export interface MotherboardArgsInterface {
    limit: number;
    socket: string;
}
