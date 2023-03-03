import { Schema, model } from 'mongoose';
import { GraphicInterface } from '../interfaces';

const schema: Schema = new Schema<GraphicInterface>({
    _id: {
        type: String,
        required: [true, 'Graphic model can not be empty'],
        maxlength: [64, 'Graphic model must have less 64 characters'],
    },
    model: {
        type: String,
        required: [true, 'Graphic model can not be empty'],
        maxlength: [64, 'Graphic model must have less 64 characters'],
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: [true, 'Graphic must have a Brand!'],
    },
    graphics_bus: {
        type: Schema.Types.ObjectId,
        ref: 'GraphicBus',
        required: [true, 'Graphic must have a Graphic Bus!'],
    },
    memory_capacity: {
        type: Number,
        required: [true, 'Memory Capacity can not be empty'],
        min: 0,
        max: 999,
    },
    clock_speed: {
        type: Number,
        required: [true, 'Clock Speed can not be empty'],
        min: 0,
        max: 10000,
    },
    boost_clock: {
        type: Number,
        required: [true, 'Boost Clock Speed can not be empty'],
        min: 0,
        max: 10000,
    },
    chipset: {
        type: String,
        required: [true, 'Graphic must have a chipset'],
    },
    length: {
        type: String,
        required: [true, 'Graphic must have a length'],
    },
});

export default model<GraphicInterface>('Graphic', schema);
