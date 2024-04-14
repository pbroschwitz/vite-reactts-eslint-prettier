module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked'
  ],
  /**
   * ESLint rules
   *
   * All available rules: http://eslint.org/docs/rules/
   *
   * Rules take the following form:
   *   "rule-name", [severity, { opts }]
   * Severity: 2 == error, 1 == warning, 0 == off.
   */
  rules: {
    '@typescript-eslint/no-unused-vars': [
      1,
      { args: 'none' },
    ],
    '@typescript-eslint/consistent-type-imports': [
      2,
      { disallowTypeAnnotations: false },
    ],
    /**
     * Enforced rules
     */

    // anti-patterns
    'no-var': 2,
    'no-with': 2,
    'no-multi-str': 2,
    'no-caller': 2,
    'no-implied-eval': 2,
    'no-labels': 2,
    'no-new-object': 2,
    'no-octal-escape': 2,
    'no-self-compare': 2,
    'no-shadow-restricted-names': 2,
    'no-cond-assign': 2,
    'no-debugger': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-unreachable': 2,
    'no-unsafe-negation': 2,
    // radix: 2,
    'valid-typeof': 2,
    'no-implicit-globals': [2],
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    'no-proto': 2,

    // es2015 features
    'require-yield': 2,
    'template-curly-spacing': [2, 'never'],

    // Project
    'keyword-spacing': [
      2,
      {
        overrides: {
          if: { after: true },
          else: { after: true },
          for: { after: true },
          switch: { after: true },
          return: { after: true },
        },
      },
    ],
  },
};
