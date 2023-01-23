module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'eslint:recommended', 
        'plugin:@typescript-eslint/recommended',
    ],
    overrides: [
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        babelOptions: {
            presets: ["@babel/preset-react"],
        },
    },
    plugins: [
        'react'
    ],
    ignorePatterns: ["**/*.css", "**/*.scss"],
    rules: {
        indent: ["error", 4],
        semi: [2, "never"],
        "no-use-before-define": ["error", { "variables": false }],
        "@typescript-eslint/explicit-function-return-type": "warn",
        "react/react-in-jsx-scope": "off",
    }
}
