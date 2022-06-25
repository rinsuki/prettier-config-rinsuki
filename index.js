module.exports = {
    printWidth: 100,
    tabWidth: 4,
    useTabs: false,
    semi: false,
    singleQuote: false,
    quoteProps: "consistent",
    trailingComma: "all",
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: "avoid",
    endOfLine: "lf",
    overrides: [
        {
            files: ["*.yml", "*.yaml"],
            options: {
                tabWidth: 2,
            },
        },
    ],
}
