import { MotherboardArgsInterface, MotherboardInterface } from '../interfaces';
import { Motherboard } from '../models';

const getMotherboards = async (
    args: MotherboardArgsInterface
): Promise<MotherboardInterface[]> => {
    let filter = {};
    if (args.socket) {
        filter = { socket: args.socket };
    }
    const params = {
        path: 'brand socket chipset form_factor graphics_bus',
        select: 'name -_id',
    };
    return await Motherboard.find(filter).limit(args.limit).populate(params);
};

export { getMotherboards };
