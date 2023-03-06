import { Types } from 'mongoose';
export interface CpuInterface {
    model: string;
    tdp: number;
    ram_max: number;
    core_clock: number;
    core_count: number;
    brand: Types.ObjectId;
    socket: Types.ObjectId;
    graphics: Types.ObjectId;
    ram_type: Types.ObjectId;
    ram_speed: Types.ObjectId;
    smt: boolean;
}

export interface CpuArgsInterface {
    _id: string;
    limit: number;
    brand: string;
    socket: string;
    ram_type: string;
    ram_speed: string;
}
