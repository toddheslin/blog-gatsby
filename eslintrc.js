module.exports = {
	extends: ['standard', 'prettier'
  ],
	rules: {
		'no-unused-vars': [
      1,
      {
				argsIgnorePattern: 'res|next|^err',
      },
    ],
		'arrow-body-style': [
      2, 'as-needed'
    ],
		'no-param-reassign': [
      2,
      {
				props: false,
      },
    ],
		'no-console': 0,
		'import/prefer-default-export': 0,
		'import': 0,
		'func-names': 0,
		'space-before-function-paren': 0,
		'comma-dangle': 0,
		'max-len': 0,
		'import/extensions': 0,
		'no-underscore-dangle': 0,
		'consistent-return': 0,
		'radix': 0,
		'no-shadow': [
      2,
      {
				hoist: 'all',
				allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'
        ],
      },
    ],
		quotes: [
      2,
			'single',
      {
				avoidEscape: true,
				allowTemplateLiterals: true,
      },
    ],
		'prettier/prettier': [
			'error',
      {
				trailingComma: 'none',
				singleQuote: true,
				printWidth: 120,
				semi: false,
				useTabs: true,
				jsxBracketSameLine: true,
      },
    ],
  },
	plugins: ['prettier'
  ],
}