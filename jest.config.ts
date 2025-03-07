export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.tsx?$": "ts-jest" 
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__ mocks __/files.ts',
        "\\.(css|less)$": "<rootDir>/test/__mocks__/styles.ts",
    },
    modulePathIgnorePatterns: ["__mocks__"],
    setupFiles: ['./test/__mocks__/global.ts']
}