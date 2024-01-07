import type { Meta, StoryObj } from '@storybook/vue3';

import ILabel from '@/components/label/ILabel.vue';

const meta: Meta<typeof ILabel> = {
	title: 'Components/Label',
	parameters: {
		docs: {
			description: {
				component: 'Indicate important notes and highlight parts of your content.',
			},
		},
	},
	component: ILabel,
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: {
				type: 'string',
			},
		},
	},
	args: {},
};

export default meta;
type Story = StoryObj<typeof ILabel>;

export const DefaultLabel: Story = {
	render: (args) => ({
		components: { ILabel },
		setup() {
			return { args };
		},
		template: `<i-label v-bind="args">Label</i-label>`,
	}),
};

export const PrimaryLabel: Story = {
	...DefaultLabel,
	args: {
		color: 'primary',
	},
};

export const SecondaryLabel: Story = {
	...DefaultLabel,
	args: {
		color: 'secondary',
	},
};

export const SuccessLabel: Story = {
	...DefaultLabel,
	args: {
		color: 'success',
	},
};

export const WarningLabel: Story = {
	...DefaultLabel,
	args: {
		color: 'warning',
	},
};

export const DangerLabel: Story = {
	...DefaultLabel,
	args: {
		color: 'danger',
	},
};
