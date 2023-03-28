import gql from 'graphql-tag';
import { DocumentNode } from 'graphql';
import { Query, ResolversParentTypes } from '../../generated';

export interface GqlComponentInterface {
    typeDefs: DocumentNode;
    resolvers: ResolversParentTypes['Query'];
}

export interface GqlApolloConfigInterface {
    typeDefs: DocumentNode[];
    resolvers: Query[];
}

export const rootTypesDefs = gql`
    type Query
    type BasicInstance {
        _id: ID
        name: String
    }
    type Motherboards {
        _id: ID
        model: String
        ram_slots: Int
        brand: BasicInstance
        socket: BasicInstance
        chipset: BasicInstance
        form_factor: BasicInstance
        graphics_bus: BasicInstance
        relatedGraphics: [Graphic]
        relatedCases: [Case]
        relatedCpus: [Cpu]
        relatedRam: [Ram]
    }
    type Cpu {
        _id: ID
        model: String
        brand: BasicInstance
        socket: BasicInstance
        graphics: BasicInstance
        ram_type: BasicInstance
        ram_speed: BasicInstance
        tdp: Int
        ram_max: Int
        core_clock: Int
        core_count: Int
        smt: Boolean
        relatedRam: [Ram]
        relatedMotherboards: [Motherboards]
    }

    type Case {
        _id: ID
        model: String
        brand: BasicInstance
        form_factor: BasicInstance
        relatedMotherboards: [Motherboards]
    }

    type Graphic {
        _id: ID
        model: String
        brand: BasicInstance
        graphics_bus: BasicInstance
        memory_capacity: Int
        clock_speed: Int
        boost_clock: Int
        length: String
        chipset: String
        relatedMotherboards: [Motherboards]
    }

    type Ram {
        _id: ID
        model: String
        type: BasicInstance
        brand: BasicInstance
        speed: BasicInstance
        modules: Int
        first_word_latency: String
        cas_latency: Int
        capacity: Int
        relatedMotherboards: [Motherboards]
    }

    type Storage {
        _id: ID
        model: String
        brand: BasicInstance
        type: BasicInstance
        port: BasicInstance
        form_factor: BasicInstance
        capacity: Int
        cache: Int
    }

    type PowerSupplier {
        _id: ID
        model: String
        brand: BasicInstance
        form_factor: BasicInstance
    }
`;
