import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      "commonjs/no-require": "off", // Desativa a regra de erro para require
    },
  },
];
