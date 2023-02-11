import { Types } from 'mongoose';
import { BasicInterface } from './BasicInterface';
export interface CpuGraphicInterface extends BasicInterface {
    brand: Types.ObjectId;
}
