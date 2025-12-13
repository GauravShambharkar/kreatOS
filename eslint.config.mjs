import { definedata, globalIgnores } from "eslint/data";
import nextVitals from "eslint-data-next/core-web-vitals";
import nextTs from "eslint-data-next/typescript";

const eslintdata = definedata([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-data-next.
  globalIgnores([
    // Default ignores of eslint-data-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintdata;
