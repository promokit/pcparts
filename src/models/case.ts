import { Schema, model } from 'mongoose';
import { CaseInterface } from '../interfaces';

const schema: Schema = new Schema<CaseInterface>({
    model: {
        type: String,
        required: [true, 'Case model can not be empty'],
        maxlength: [64, 'Case model must have less 64 characters'],
        unique: true,
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: [true, 'Case must have a Brand!'],
    },
    form_factor: {
        type: Schema.Types.ObjectId,
        ref: 'FormFactor',
        required: [true, 'Case must have a Form Factor!'],
    },
});

export default model<CaseInterface>('Case', schema);
