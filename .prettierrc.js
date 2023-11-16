module.exports = {
	/**
	 * Print Width
	 *
	 * @type Number
	 * @default 80
	 *
	 * Specify the line length that the printer will wrap on.
	 *
	 * @see {@link https://prettier.io/docs/en/options.html#print-width}
	 */
	printWidth: 100,

	/**
	 * Tab Width
	 *
	 * @type Number
	 * @default 2
	 *
	 * Specify the number of spaces per indentation-level.
	 *
	 * @see {@link https://prettier.io/docs/en/options.html#tab-width}
	 */
	tabWidth: 4,

	/**
	 * Tabs
	 *
	 * @type Boolean
	 * @default false
	 *
	 * @see {@link https://prettier.io/docs/en/options.html#tabs}
	 */
	tabs: true,

	/**
	 * Semicolons
	 *
	 * @type Boolean
	 * @default false
	 *
	 * Print semicolons at the ends of statements.
	 *
	 * @see {@link https://prettier.io/docs/en/options.html#semicolons}
	 */
	semi: true,

	/**
	 * Quotes
	 *
	 * @type Boolean
	 * @default false
	 *
	 * Use single quotes instead of double quotes.
	 *
	 * @see {@link https://prettier.io/docs/en/options.html#quotes}
	 */
	singleQuote: true,

	/**
	 * Trailing Commas
	 *
	 * @type String
	 * @default 'es5'
	 *
	 * Print trailing commas wherever possible in multi-line comma-separated syntactic structures.
	 * (A single-line array, for example, never gets trailing commas.)
	 *
	 * @see {@link https://prettier.io/docs/en/options.html#trailing-commas}
	 */
	trailingComma: 'es5',

	/**
	 * Bracket Spacing
	 *
	 * @type Boolean
	 * @default true
	 *
	 * Print spaces between brackets in object literals.
	 *
	 * @see {@link https://prettier.io/docs/en/options.html#bracket-spacing}
	 */
	bracketSpacing: true,

	/**
	 * Bracket Line
	 *
	 * @type Boolean
	 * @default true
	 *
	 * Put the > of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last
	 * line instead of being alone on the next line (does not apply to self closing elements).
	 *
	 * @see {@link https://prettier.io/docs/en/options.html#bracket-line}
	 */
	bracketSameLine: true,

	/**
	 * Arrow Function Parentheses
	 *
	 * @type String
	 * @default 'always''
	 *
	 * @see {@link https://prettier.io/docs/en/options.html#arrow-function-parentheses}
	 */
	arrowParens: 'always',

	/**
	 * Vue files script and style tags indentation
	 *
	 * @type Boolean
	 * @default false
	 *
	 * Whether or not to indent the code inside <script> and <style> tags in Vue files.
	 *
	 * @see {@link https://prettier.io/docs/en/options.html#vue-files-script-and-style-tags-indentation}
	 */
	vueIndentScriptAndStyle: false,

	/**
	 * Single Attribute Per Line
	 *
	 * @type Boolean
	 * @default false
	 *
	 * Enforce single attribute per line in HTML, Vue and JSX.
	 *
	 * @see {@link https://prettier.io/docs/en/options.html#single-attribute-per-line}
	 */
	singleAttributePerLine: true,
};
