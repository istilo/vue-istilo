import type { Meta, StoryObj } from '@storybook/vue3';

import IIcon from '@/components/icon/IIcon.vue';

const meta: Meta<typeof IIcon> = {
	title: 'Components/Icon',
	parameters: {
		docs: {
			description: {
				component: 'Place scalable vector icons anywhere in your content.',
			},
		},
	},
	component: IIcon,
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['small', 'medium', 'large', 'xlarge', 'xxlarge'],
		},
		type: {
			control: 'select',
			options: [
				'dashboard',
				'training',
				'schedule',
				'courses',
				'categories',
				'lessons',
				'instructors',
				'people',
				'organizations',
				'room',
				'user',
				'roles',
				'modules',
				'permissions',
				'cadet-type',
				'settings',
				'messenger',
				'search',
				'bell',
				'moon',
				'sun',
				'double-arrow-left',
				'double-arrow-right',
				'export',
				'filter',
				'sort',
				'plus',
				'minus',
				'angle-left',
				'angle-right',
				'ellipsis-v',
				'ellipsis-h',
				'edit',
				'save',
				'trash',
				'upload',
				'clipboard',
				'full-view',
				'share',
				'close',
			],
		},
	},
};

export default meta;
type Story = StoryObj<typeof IIcon>;

export const DefaultIcon: Story = {
	render: (args) => ({
		components: { IIcon },
		setup() {
			return { args };
		},
		template: `
			<i-icon v-bind="args"/>`,
	}),

	args: {
		type: 'dashboard',
	},
};

export const SizeModifier: Story = {
	...DefaultIcon,
	args: {
		type: 'dashboard',
		size: 'xxlarge',
	},
};
