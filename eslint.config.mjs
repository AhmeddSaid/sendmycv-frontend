import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
});

// Add an initial config object with bail set to false
const eslintConfig = [
	{
		ignores: ["**/node_modules/**", "./build/**", "./.next/**"],
	},
	...compat.extends("next/core-web-vitals"),
	...compat.config({
		root: true,
		rules: {
			"comma-dangle": 0,
			"no-underscore-dangle": 0,
			"no-param-reassign": 0,
			"no-return-assign": 0,
			camelcase: ["error"],
			"import/extensions": 0,
			eqeqeq: ["error", "always"],
			"prefer-const": "error",
			"no-console": "error",
			"import/order": [
				"error",
				{
					alphabetize: {
						order: "asc",
					},
				},
			],
		},
		settings: {
			"import/resolver": {
				node: {},
			},
		},
	}),
];

export default eslintConfig;
