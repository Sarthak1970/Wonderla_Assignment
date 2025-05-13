import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disables all rules by turning them off
      // You can explicitly add common ones to ensure they're disabled
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "@next/next/no-img-element": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-console": "off",
      "no-undef": "off",
      "react/no-unescaped-entities": "off",
      // Add more as needed, or use a wildcard tool/plugin to disable all
    },
  },
];

export default eslintConfig;
