import { Schema, model, InferSchemaType } from 'mongoose';

const schema: Schema = new Schema({
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

type schemaType = InferSchemaType<typeof schema>;

interface PowerSupplierInterface extends schemaType {}

const PowerSupplierModel = model<PowerSupplierInterface>(
    'PowerSupplier',
    schema
);

export { PowerSupplierInterface, PowerSupplierModel };
