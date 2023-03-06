import {
    GraphQLFieldConfig,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
} from 'graphql';
import Powersupplier from '../types/powersupplier';
import { getPowerSuppliers } from '../../services';
import { PowerSupplierArgsInterface } from '../../interfaces';

// FIXME: create and pass app context here
const getPowerSuppliersBy: GraphQLFieldConfig<unknown, unknown> = {
    description: 'Returns a list of Power Suppliers',
    type: new GraphQLList(Powersupplier),
    args: {
        _id: { type: GraphQLString },
        limit: { type: GraphQLInt },
        brand: { type: GraphQLString },
        form_factor: { type: GraphQLString },
    },
    resolve: async (_, args: PowerSupplierArgsInterface) => {
        return await getPowerSuppliers(args);
    },
};

export default getPowerSuppliersBy;
