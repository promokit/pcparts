import { Schema, model } from 'mongoose';
import { StorageInterface } from '../interfaces';

const schema: Schema = new Schema<StorageInterface>({
    model: {
        type: String,
        required: [true, 'Storage model can not be empty'],
        maxlength: [64, 'Storage model must have less 64 characters'],
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: [true, 'Storage must have a Brand!'],
    },
    form_factor: {
        type: Schema.Types.ObjectId,
        ref: 'StorageFormFactor',
        required: [true, 'Storage must have a Form Factor!'],
    },
    cache: {
        type: Number,
        default: null,
    },
    capacity: {
        type: Number,
        required: [true, 'Storage capacity can not be empty'],
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: 'StorageType',
        required: [true, 'Storage must have a Type!'],
    },
    port: {
        type: Schema.Types.ObjectId,
        ref: 'StoragePort',
        required: [true, 'Storage must have a Port!'],
    },
});

export default model<StorageInterface>('Storage', schema);
