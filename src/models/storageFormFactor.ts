import { Schema, model } from 'mongoose';
import { BasicInterface } from '../interfaces';

const schema: Schema = new Schema<BasicInterface>({
    name: {
        type: String,
        required: [true, 'Storage Form Factor can not be empty'],
        maxlength: [64, 'Storage Form Factor must have less 64 characters'],
        unique: true,
    },
});

export default model<BasicInterface>('StorageFormFactor', schema);
