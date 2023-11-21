import type { Meta, StoryObj } from '@storybook/vue3';

import IAvatar from '@/components/avatar/IAvatar.vue';

const meta: Meta<typeof IAvatar> = {
	title: 'Components/IAvatar',
	parameters: {
		docs: {
			description: {
				component: 'Display a User avatar image or text.',
			},
		},
	},
	component: IAvatar,
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'select',
			options: ['primary', 'secondary'],
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
		},
		src: {
			control: 'text',
		},
		label: {
			control: 'text',
		},
	},
	args: {
		label: 'AV',
	},
};

export default meta;
type Story = StoryObj<typeof IAvatar>;

export const DefaultAvatar: Story = {
	render: (args) => ({
		components: { IAvatar },
		setup() {
			return { args };
		},
		template: `<i-avatar v-bind="args"/>`,
	}),
};

export const PrimaryAvatar: Story = {
	...DefaultAvatar,
	args: {
		color: 'primary',
		label: 'PA',
	},
};

export const SecondaryAvatar: Story = {
	...DefaultAvatar,
	args: {
		color: 'secondary',
		label: 'PA',
	},
};

export const XSmallAvatar: Story = {
	...DefaultAvatar,
	args: {
		size: 'xsmall',
		label: 'XS',
	},
};

export const SmallAvatar: Story = {
	...DefaultAvatar,
	args: {
		size: 'small',
		label: 'S',
	},
};

export const MediumAvatar: Story = {
	...DefaultAvatar,
	args: {
		size: 'medium',
		label: 'M',
	},
};

export const LargeAvatar: Story = {
	...DefaultAvatar,
	args: {
		size: 'large',
		label: 'L',
	},
};

export const XLargeAvatar: Story = {
	...DefaultAvatar,
	args: {
		size: 'xlarge',
		label: 'XL',
	},
};

export const ImageAvatar: Story = {
	...DefaultAvatar,
	args: {
		label: 'PA',
		src: 'https://statinfer.com/wp-content/uploads/dummy-user.png',
	},
};
