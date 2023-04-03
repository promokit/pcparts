import type { Config } from 'jest';

const config: Config = {
    verbose: true,
    preset: 'ts-jest',
    collectCoverage: false,
    roots: ['<rootDir>/src'],
};

export default config;
