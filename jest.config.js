module.exports = {
  // preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  roots: ['<rootDir>/'],
  testMatch: ['**/?(*.)+(spec|test).+(ts|tsx|js)'],
  // transform: {
  //   '^.+\\.(ts|tsx)$': 'ts-jest',
  // },
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/node_modules/jest-css-modules',
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/cypress/',
  ],
  testEnvironment: 'jest-environment-jsdom',
};
