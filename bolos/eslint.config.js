import js from '@eslint/js'
    import globals from 'globals'
    import reactHooks from 'eslint-plugin-react-hooks'
    import reactRefresh from 'eslint-plugin-react-refresh'
    import tseslint from '@typescript-eslint/eslint-plugin'
    import tsParser from '@typescript-eslint/parser'

    export default {
        ignores: ['dist'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parser: tsParser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            '@typescript-eslint': tseslint,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'no-unused-vars': 'off', // Disabled to avoid conflicts with @typescript-eslint
            '@typescript-eslint/no-unused-vars': [
                'warn',
                { varsIgnorePattern: '^React$' },
            ],
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
        },
        extends: [
            js.configs.recommended,
            'plugin:react-hooks/recommended',
            'plugin:@typescript-eslint/recommended',
        ],
        overrides: [
            {
                files: ['**/*.{ts,tsx}'],
                rules: {
                    '@typescript-eslint/no-unused-vars': [
                        'warn',
                        { varsIgnorePattern: '^React$' },
                    ],
                },
            },
        ],
    }