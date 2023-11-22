import { ref } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';

import IInput from '@/components/input/IInput.vue';

const meta: Meta<typeof IInput> = {
	title: 'Components/Input',
	parameters: {
		docs: {
			description: {
				component: 'Easily create nice looking forms with different styles and layouts.',
			},
		},
	},
	component: IInput,
	tags: ['autodocs'],
	argTypes: {
		error: {
			control: 'text',
		},
		fixedWidth: {
			control: 'select',
			options: ['xsmall', 'small', 'medium', 'large'],
		},
		isSuccess: {
			active: {
				control: 'boolean',
			},
		},
		label: {
			control: 'text',
		},
		size: {
			control: 'select',
			options: ['small', 'large'],
		},
		width: {
			control: 'select',
			options: [
				'1-1',
				'1-2',
				'1-3',
				'2-3',
				'1-4',
				'3-4',
				'1-5',
				'2-5',
				'3-5',
				'4-5',
				'1-6',
				'5-6',
			],
		},
	},

	args: {
		label: 'Input',
		placeholder: 'Placeholder',
	},
};

export default meta;
type Story = StoryObj<typeof IInput>;

export const DefaultInput: Story = {
	render: (args) => ({
		components: { IInput },
		setup() {
			const input = ref('');

			return { input, args };
		},
		template: `
			<div>
				Message is: {{ input }}
				<i-input
					v-model="input"
					v-bind="args"/>
			</div>`,
	}),
};

export const ErrorModifier: Story = {
	...DefaultInput,
	args: {
		error: 'Your input is empty',
	},
};

export const FixedWidthModifier: Story = {
	...DefaultInput,
	args: {
		fixedWidth: 'large',
	},
};

export const SuccessModifier: Story = {
	...DefaultInput,
	args: {
		isSuccess: true,
	},
};

export const RequiredModifier: Story = {
	...DefaultInput,
	args: {
		required: true,
	},
};

export const SizeModifier: Story = {
	...DefaultInput,
	args: {
		size: 'large',
	},
};

export const PrefixModifier: Story = {
	...DefaultInput,
	args: {
		prefix: '$',
	},
};
