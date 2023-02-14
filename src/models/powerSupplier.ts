import { Schema, model } from 'mongoose';
import { PowerSupplierInterface } from '../interfaces';

const schema: Schema = new Schema<PowerSupplierInterface>({
    model: {
        type: String,
        required: [true, 'Power Supplier model can not be empty'],
        maxlength: [64, 'Power Supplier model must have less 64 characters'],
        unique: true,
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: [true, 'Power Supplier must belong to a Brand!'],
    },
    form_factor: {
        type: Schema.Types.ObjectId,
        ref: 'FormFactor',
        required: [true, 'Power Supplier must belong to a Form Factor!'],
    },
});

export default model<PowerSupplierInterface>('PowerSupplier', schema);
