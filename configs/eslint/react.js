module.exports = {
	extends: ["plugin:react/recommended"],
	plugins: ["react"],
	settings: {
		react: {
			version: "detect",
		},
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		"react/react-in-jsx-scope": "off",
		"react/function-component-definition": [
			2,
			{
				namedComponents: "arrow-function",
			},
		],
		"react/prop-types": "off",
	},
};
