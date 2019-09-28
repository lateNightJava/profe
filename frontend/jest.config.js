module.exports = {
  preset: 'ts-jest',
  setupFiles: [
    '<rootDir>/tests/setup.ts',
  ],
  testEnvironment: 'node',
  // collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/index.ts',
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  }
};
