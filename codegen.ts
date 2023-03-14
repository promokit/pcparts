import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://localhost:3000',
    generates: {
        'src/graphql/generated/index.ts': {
            plugins: ['typescript', 'typescript-resolvers'],
        },
    },
};

export default config;
