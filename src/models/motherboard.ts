import { Schema, model } from 'mongoose';
import { MotherboardInterface } from '../interfaces';

const schema: Schema = new Schema<MotherboardInterface>({
    model: {
        type: String,
        required: [true, 'Motherboard model can not be empty'],
        maxlength: [64, 'Motherboard model must have less 64 characters'],
        unique: true,
    },
    ram_slots: {
        type: Number,
        required: [true, 'Slots number can not be empty'],
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: [true, 'Motherboard must have a Brand!'],
    },
    graphics_bus: {
        type: Schema.Types.ObjectId,
        ref: 'GraphicBus',
        required: [true, 'Motherboard must have a Graphic Port!'],
    },
    form_factor: {
        type: Schema.Types.ObjectId,
        ref: 'FormFactor',
        required: [true, 'Motherboard must have a Form Factor!'],
    },
    socket: {
        type: Schema.Types.ObjectId,
        ref: 'Socket',
        required: [true, 'Motherboard must have a Socket!'],
    },
    chipset: {
        type: Schema.Types.ObjectId,
        ref: 'Chipset',
        required: [true, 'Motherboard must have a Chipset!'],
    },
});

export default model<MotherboardInterface>('Motherboard', schema);
