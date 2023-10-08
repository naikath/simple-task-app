module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:@typescript-eslint/recommended',
		'standard-with-typescript',
		'prettier',
	],
	ignorePatterns: [
		'dist',
		'.eslintrc.cjs',
		'postcss.config.js',
		'vite.config.ts',
		'tailwind.config.js',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parser: '@typescript-eslint/parser',

	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', 'react-refresh'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/no-confusing-void-expression': 'off',
		'react-refresh/only-export-components': 'off',
		'@typescript-eslint/triple-slash-reference': 'off',
	},
};
