import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierPlugin from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";

export default defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    files: ["**/*.{ts,tsx,js,jsx}"],

    plugins: {
      prettier: prettierPlugin,
      import: importPlugin,
    },

    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },

    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single", { avoidEscape: true }],
      "comma-dangle": ["error", "always-multiline"],

      "no-unused-vars": "off", // desliga base
      "@typescript-eslint/no-unused-vars": ["warn"],
      "no-undef": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],

      "prettier/prettier": [
        "error",
        {
          printWidth: 90,
          singleQuote: true,
          semi: true,
          trailingComma: "all",
          tabWidth: 2,
          useTabs: false,
        },
      ],

      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1, maxBOF: 0 }],

      "react/react-in-jsx-scope": "off",
      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          shorthandLast: true,
          multiline: "last",
        },
      ],
      "react/jsx-no-duplicate-props": "error",

      "import/order": [
        "warn",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],

      "@typescript-eslint/consistent-type-imports": "error",
    },
  },

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "dist/**",
    "node_modules/**",
    "next-env.d.ts",
  ]),
]);
