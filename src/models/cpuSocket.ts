import { Schema, model } from 'mongoose';
import { BasicInterface } from '../interfaces';

const schema: Schema = new Schema<BasicInterface>({
    name: {
        type: String,
        required: [true, 'CPU Socket can not be empty'],
        maxlength: [64, 'CPU Socket name must have less 64 characters'],
        unique: true,
    },
});

export default model<BasicInterface>('CpuSocket', schema);
