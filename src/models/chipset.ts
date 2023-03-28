import { Schema, model, InferSchemaType, Document } from 'mongoose';

const schema: Schema = new Schema({
    name: {
        type: String,
        required: [true, 'Chipset can not be empty'],
        maxlength: [64, 'Chipset name must have less 64 characters'],
        unique: true,
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: [true, 'Chipset must belong to a Brand!'],
    },
});

type schemaType = InferSchemaType<typeof schema>;

interface ChipsetInterface extends Document, schemaType {}

const ChipsetModel = model<ChipsetInterface>('Chipset', schema);

export { ChipsetInterface, ChipsetModel };
