import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { qwikEslint9Plugin } from "eslint-plugin-qwik";
import { fileURLToPath } from "url";

const ignores = [
];

const tsconfigRootDir = fileURLToPath(
  import.meta.url ? new URL(".", import.meta.url) : process.cwd()
);

export default tseslint.config(
  js.configs.recommended,
  tseslint.configs.recommended,
  qwikEslint9Plugin.configs.recommended,
  {
    ignores,
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.eslint.json",
        tsconfigRootDir,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.serviceworker,
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "qwik/no-use-visible-task": "off",
    },
  },
);