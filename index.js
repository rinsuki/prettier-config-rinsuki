module.exports = {
    printWidth: 100,
    tabWidth: 4,
    semi: false,
    singleQuote: false,
    trailingComma: "all",
    bracketSpacing: true,
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
