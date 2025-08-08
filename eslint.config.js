import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { qwikEslint9Plugin } from "eslint-plugin-qwik";

const ignores = [
  "**/*.log",
  "**/.DS_Store",
  "**/*.",
  ".vscode/settings.json",
  "**/.history",
  "**/.yarn",
  "**/bazel-*",
  "**/bazel-bin",
  "**/bazel-out",
  "**/bazel-qwik",
  "**/bazel-testlogs",
  "**/dist",
  "**/dist-dev",
  "**/lib",
  "**/lib-types",
  "**/etc",
  "**/external",
  "**/node_modules",
  "**/temp",
  "**/tsc-out",
  "**/tsdoc-metadata.json",
  "**/target",
  "**/output",
  "**/rollup.config.js",
  "**/build",
  "**/.cache",
  "**/.vscode",
  "**/.rollup.cache",
  "**/dist",
  "**/tsconfig.tsbuildinfo",
  "**/vite.config.ts",
  "**/*.spec.tsx",
  "**/*.spec.ts",
  "**/.netlify",
  "**/pnpm-lock.yaml",
  "**/package-lock.json",
  "**/yarn.lock",
  "**/server",
  "eslint.config.js",
  "tailwind.config.js",
];

export default tseslint.config(
  js.configs.recommended,
  tseslint.configs.recommended,
  qwikEslint9Plugin.configs.recommended,
  {
    ignores,
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.url
          ? new URL(".", import.meta.url).pathname
          : process.cwd(),
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
    },
  },
);