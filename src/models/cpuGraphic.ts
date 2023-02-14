import { Schema, model } from 'mongoose';
import { CpuGraphicInterface } from '../interfaces';

const schema: Schema = new Schema<CpuGraphicInterface>({
    name: {
        type: String,
        required: [true, 'CPU Graphic can not be empty'],
        maxlength: [64, 'CPU Graphic name must have less 64 characters'],
        unique: true,
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: [true, 'CPU Graphic must have a Brand!'],
    },
});

export default model<CpuGraphicInterface>('CpuGraphic', schema);
