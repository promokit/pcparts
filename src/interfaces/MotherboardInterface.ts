import { Types } from 'mongoose';
export interface MotherboardInterface {
    _id: string;
    model: string;
    ram_slots: number;
    brand: Types.ObjectId;
    socket: Types.ObjectId;
    chipset: Types.ObjectId;
    form_factor: Types.ObjectId;
    graphics_bus: Types.ObjectId;
}

export interface MotherboardArgsInterface {
    id: string;
    limit: number;
    brand: string;
    socket: string;
    chipset: string;
    form_factor: string;
    graphic_bus: string;
}
