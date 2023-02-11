import { Schema, model } from 'mongoose';
import { RamSpeedInterface } from '../interfaces';

const schema: Schema = new Schema<RamSpeedInterface>({
    speed: {
        type: Number,
        required: [true, 'RAM Speed can not be empty'],
        maxlength: [64, 'RAM Speed name must have less 64 characters'],
        unique: true,
    },
});

export default model<RamSpeedInterface>('RamSpeed', schema);
