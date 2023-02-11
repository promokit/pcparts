import { Schema, model } from 'mongoose';
import { BasicInterface } from '../interfaces';

const schema: Schema = new Schema<BasicInterface>({
    name: {
        type: String,
        required: [true, 'Brand can not be empty'],
        maxlength: [64, 'Brand name must have less 64 characters'],
        unique: true,
    },
});

export default model<BasicInterface>('Brand', schema);
