import type { Meta, StoryObj } from '@storybook/vue3';

import ICard from '@/components/card/ICard.vue';

const meta: Meta<typeof ICard> = {
	title: 'Components/Card',
	parameters: {
		docs: {
			description: {
				component: 'Create layout boxes with different styles.',
			},
		},
	},
	component: ICard,
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'select',
			options: ['default', 'primary', 'secondary'],
		},
		isHover: {
			active: {
				control: 'boolean',
			},
		},
		size: {
			control: 'select',
			options: ['small', 'large'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof ICard>;

export const DefaultCard: Story = {
	render: (args) => ({
		components: { ICard },
		setup() {
			return { args };
		},
		template: `
			<i-card v-bind="args">
				<p>Card</p>
			</i-card>`,
	}),
};

export const PrimaryCard: Story = {
	...DefaultCard,
	args: {
		color: 'primary',
	},
};

export const SecondaryCard: Story = {
	...DefaultCard,
	args: {
		color: 'secondary',
	},
};

export const HoverCard: Story = {
	...DefaultCard,
	args: {
		isHover: true,
	},
};

export const SmallCard: Story = {
	...DefaultCard,
	args: {
		size: 'small',
	},
};

export const LargeCard: Story = {
	...DefaultCard,
	args: {
		size: 'large',
	},
};

export const HeaderFooterCard: Story = {
	render: (args) => ({
		components: { ICard },
		setup() {
			return { args };
		},
		template: `
			<i-card v-bind="args">
				<template v-slot:header>
					<p>Header</p>
				</template>
				<p>Body</p>
				<template v-slot:footer>
					<p>Footer</p>
				</template>
			</i-card>`,
	}),
};
