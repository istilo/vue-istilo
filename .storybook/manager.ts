import { addons } from '@storybook/manager-api';
import IstiloTheme from './istilo-theme';

/**
 * Features and behavior
 *
 * To control the layout of Storybook’s UI you can use addons.setConfig in your .storybook/manager.ts:
 *
 * @see {@link https://storybook.js.org/docs/configure/features-and-behavior}
 */
addons.setConfig({
	/**
	 * isFullscreen
	 *
	 * @type Boolean
	 * @default false
	 *
	 * Show story component as full screen
	 */
	isFullscreen: false,

	/**
	 * showNav
	 *
	 * @type Boolean
	 * @default true
	 *
	 * Display panel that shows a list of stories
	 */
	showNav: true,

	/**
	 * showPanel
	 *
	 * @type Boolean
	 * @default true
	 *
	 * Display panel that shows addon configurations
	 */
	showPanel: true,

	/**
	 * panelPosition
	 *
	 * @type String | Object
	 * @default 'bottom''
	 *
	 * Where to show the addon panel
	 */
	panelPosition: 'bottom',

	/**
	 * enableShortcuts
	 *
	 * @type Boolean
	 * @default true
	 *
	 * Enable/disable shortcuts
	 */
	enableShortcuts: true,

	/**
	 * showToolbar
	 *
	 * @type Boolean
	 * @default true
	 *
	 * Show/hide tool bar
	 */
	showToolbar: true,

	/**
	 * theme
	 *
	 * @type Object
	 * @default undefined
	 *
	 * Storybook Theme, see next section
	 */
	theme: IstiloTheme,

	/**
	 * selectedPanel
	 *
	 * @type String
	 * @default undefined
	 *
	 * Id to select an addon panel
	 */
	selectedPanel: undefined,

	/**
	 * initialActive
	 *
	 * @type String
	 * @default 'sidebar''
	 *
	 * Select the default active tab on Mobile
	 */
	initialActive: 'sidebar',

	/**
	 * sidebar
	 *
	 * @type Object
	 *
	 * Sidebar options, see below
	 */
	sidebar: {
		/**
		 * sidebar.showRoots
		 *
		 * @type Boolean
		 * @default false
		 *
		 * Display the top-level nodes as a "root" in the sidebar
		 */
		showRoots: false,

		/**
		 * sidebar.collapsedRoots
		 *
		 * @type Array
		 *
		 * Set of root node IDs to visually collapse by default
		 */
		collapsedRoots: ['other'],
	},

	/**
	 * toolbar
	 *
	 * @type Object
	 *
	 * Modify the tools in the toolbar using the addon id
	 */
	toolbar: {
		title: {
			hidden: false,
		},
		zoom: {
			hidden: false,
		},
		eject: {
			hidden: false,
		},
		copy: {
			hidden: false,
		},
		fullscreen: {
			hidden: false,
		},
	},
});
