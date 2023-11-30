import { create } from '@storybook/theming/create';

export default create({
	base: 'light',

	// Typography
	fontBase: '"Lato", sans-serif',
	fontCode: 'monospace',

	brandTitle: 'Istilo Storybook',
	brandUrl: 'https://istilo.com',
	brandImage: 'https://storybook.js.org/images/placeholders/350x150.png',
	brandTarget: '_self',

	//
	colorPrimary: '#EE4D73',
	colorSecondary: '#91E1EC',

	// UI
	appBg: '#EE4D73',
	appContentBg: '#ffffff',
	appPreviewBg: '#ffffff',
	appBorderColor: '#91E1EC',
	appBorderRadius: 10,

	// Text colors
	textColor: '#10162F',
	textInverseColor: '#ffffff',

	// Toolbar default and active colors
	barTextColor: '#FFFFFF',
	barSelectedColor: '#FFFFFF',
	barBg: '#EE4D73',

	// Form colors
	inputBg: '#ffffff',
	inputBorder: '#10162F',
	inputTextColor: '#10162F',
	inputBorderRadius: 2,
});
