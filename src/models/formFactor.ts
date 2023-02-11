import { Schema, model } from 'mongoose';
import { BasicInterface } from '../interfaces';

const schema: Schema = new Schema<BasicInterface>({
    name: {
        type: String,
        required: [true, 'Form Factor can not be empty'],
        maxlength: [64, 'Form Factor name must have less 64 characters'],
        unique: true,
    },
});

export default model<BasicInterface>('FormFactor', schema);
