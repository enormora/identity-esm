import { baseConfig } from '@enormora/eslint-config-base';
import { mochaNodeAssertConfig } from '@enormora/eslint-config-mocha-node-assert';
import { nodeConfig, nodeConfigFileConfig } from '@enormora/eslint-config-node';
import { typescriptConfig } from '@enormora/eslint-config-typescript';

export default [
    {
        ignores: [ 'distribution/**' ]
    },
    ...baseConfig,
    {
        ...nodeConfig,
        files: [ '**/*.{js,ts}' ]
    },
    {
        ...typescriptConfig,
        files: [ '**/*.ts' ],
        rules: {
            ...typescriptConfig.rules,
            'import/extensions': [
                'error',
                'always',
                {
                    ignorePackages: true
                }
            ]
        }
    },
    {
        ...mochaNodeAssertConfig,
        files: [ '**/*.test.ts' ],
        languageOptions: {
            globals: {
                suite: 'readonly',
                test: 'readonly'
            }
        }
    },
    {
        ...nodeConfigFileConfig,
        files: [ 'eslint.config.js', 'mocha.config.json', 'prettier.config.js' ]
    }
];
