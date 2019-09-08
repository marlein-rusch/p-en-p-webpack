module.exports = {
	'extends': 'airbnb',
    'parser': 'babel-eslint',
	'env': {
		'jest': true,
	},
	'rules': {
		'no-use-before-define': 'off',
		'react/jsx-filename-extension': 'off',
		'react/prop-types': 'off',
		'camelcase': 'off',
		'comma-dangle': 'off',
		'linebreak-style': 'off',
		"indent": [ "warn", 'tab', { "SwitchCase": 1, "ignoredNodes": [ "JSXAttribute", "JSXSpreadAttribute", ], } ],
		'no-tabs': 'off',
		'no-floating-decimal': 'off',
		'import/no-named-as-default': 'off',
		'react/jsx-indent-props': [true, 'first'],
		'jsx-a11y/label-has-associated-control': 'off',
		'jsx-a11y/label-has-for': 'off',
		'react/no-array-index-key': 'off',
		'no-plusplus': 'off',
		'no-return-assign': 'off',
		'arrow-parens': 'off',
		'max-len': ["error", { 
			"comments": 200,
			"code": 140 
		}]
	},
	'globals': {
		'fetch': false,
		'shallow': false,
		'document': false,
		'window': false,
		'FormData': false,
		'localStorage': false
	}
}