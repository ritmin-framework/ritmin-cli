module.exports = {
    // Specifies the directories Jest should scan for tests and modules
    roots: ['./source'],
  
    // Specifies the patterns Jest uses to detect test files
    testMatch: [
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[tj]s?(x)'
    ],
  
    // Specifies file extensions to consider for tests
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  
    // Configuration for transforming files before testing
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
  
    // Specifies patterns to skip for testing
    testPathIgnorePatterns: ['/node_modules/'],
  };
  