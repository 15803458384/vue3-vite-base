module.exports = {
	extends: ['plugin:vue/vue3-essential'],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: ['vue'],
	rules: {
		'no-console': 0,
		'no-invalid-regexp': 2,
		'no-debugger': 1, // 禁用 debugger
		'no-invalid-this': 2,
		'no-inline-comments': 0,
		'no-lonely-if': 0,
		'no-multiple-empty-lines': [
			1,
			{
				max: 2,
			},
		],
		'no-obj-calls': 0,
		'no-path-concat': 0,
		'no-plusplus': 0,
		'no-redeclare': 2,
		'no-unused-vars': [
			0,
			{
				vars: 'all',
				args: 'after-used',
			},
		],
		'no-var': 0,
		'vue/multi-word-component-names': [
			0,
			{
				ignores: [],
			},
		],
		'spaced-comment': 1,
		'no-proto': 0,
		'no-sync': 0,
		'no-shadow': 2,
		'no-dupe-args': 2,
		'no-undef-init': 0,
		'no-unneeded-ternary': 1, // 禁止不必要的嵌套 var isYes = answer === 1 ? true : false;
		'no-self-compare': 2, // 不能比较自身
		'no-undefined': 0,
		'init-declarations': 0,
		'no-const-assign': 2,
		'no-use-before-define': 2, // 未定义前不能使用
		'no-useless-call': 2, // 禁止不必要的call和apply
		'no-void': 2, // 禁用void操作符
		'no-unreachable': 2,
		'max-params': [0, 10],
	},
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				// 这里写覆盖vue文件的规则
			},
		},
	],
};