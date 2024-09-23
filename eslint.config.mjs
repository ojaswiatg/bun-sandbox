import pluginJs from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
    { files: ["**/*.{js,mjs,cjs,ts}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,

    {
        rules: {
            "prefer-const": "error",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    argsIgnorePattern: "^_",
                },
            ],
            curly: ["error", "all"],
            // "no-console": [
            //     "error",
            //     {
            //         allow: ["warn", "error", "info"],
            //     },
            // ],
        },
    },
];
