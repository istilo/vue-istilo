import type { Meta, StoryObj } from '@storybook/vue3';

import IBadge from '@/components/badge/IBadge.vue';

const meta: Meta<typeof IBadge> = {
	title: 'Components/Badge',
	parameters: {
		docs: {
			description: {
				component: 'Easily create nice looking notification badges.',
			},
		},
	},
	component: IBadge,
	tags: ['autodocs'],
	argTypes: {
		count: {
			control: {
				type: 'number',
				min: 0,
			},
		},
	},
	args: {},
};

export default meta;
type Story = StoryObj<typeof IBadge>;

export const DefaultBadge: Story = {
	render: (args) => ({
		components: { IBadge },
		setup() {
			return { args };
		},
		template: `<i-badge v-bind="args"/>`,
	}),

	args: {
		count: 12,
	},
};
