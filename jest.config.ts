export default {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/fileMock.js',
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
}