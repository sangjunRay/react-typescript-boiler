module.exports = {
    semi: true,
    printWidth: 120,
    singleQuote: true,
    trailingComma: 'all',
    bracketSpacing: false,
    bracketSameLine: true,
    useTabs: false,
    endOfLine: 'auto',
    overrides: [
        {
            files: '*.d.ts',
            options: {
                // This is needed for TypeScript 3.2 support
                trailingComma: 'es5',
            },
        },
    ],
};
