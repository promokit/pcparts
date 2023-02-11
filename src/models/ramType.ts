import { Schema, model } from 'mongoose';
import { BasicInterface } from '../interfaces';

const schema: Schema = new Schema<BasicInterface>({
    name: {
        type: String,
        required: [true, 'RAM Type can not be empty'],
        maxlength: [64, 'RAM Type name must have less 64 characters'],
        unique: true,
    },
});

export default model<BasicInterface>('RamType', schema);
