module.exports = {
	extends: [
		"next/core-web-vitals",
		"eslint:recommended",
		"next",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	root: true,
}
