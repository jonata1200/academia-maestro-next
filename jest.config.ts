import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@design-system/(.*)$': '<rootDir>/src/design-system/$1',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '\\.(png|jpg|jpeg|gif|webp|svg|avif)$': '<rootDir>/src/__tests__/mocks/fileMock.js',
  },
  testMatch: ['**/?(*.)+(test|spec).(ts|tsx)'],
  modulePathIgnorePatterns: ['<rootDir>/.next/'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.*',
    '!src/stories/**',
    '!src/**/__tests__/**',
    '!src/**/__mocks__/**',
    '!src/app/**/layout.tsx',
    '!src/app/**/page.tsx',
  ],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text', 'lcov', 'html'],
};

export default createJestConfig(customJestConfig);

