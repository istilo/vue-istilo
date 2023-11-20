import type { Meta, StoryObj } from '@storybook/vue3';

import IButton from '@/components/button/IButton.vue';

const meta: Meta<typeof IButton> = {
	title: 'Components/IButton',
	parameters: {
		docs: {
			description: {
				component: 'Easily create nice looking buttons, which come in different styles.',
			},
		},
	},
	component: IButton,
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'select',
			options: ['primary', 'secondary', 'success', 'warning', 'danger'],
		},
		href: {
			control: 'text',
		},
		isCircle: {
			active: {
				control: 'boolean',
			},
		},
		isDashed: {
			active: {
				control: 'boolean',
			},
		},
		isDisabled: {
			active: {
				control: 'boolean',
			},
		},
		isOutline: {
			active: {
				control: 'boolean',
			},
		},
		isRounded: {
			active: {
				control: 'boolean',
			},
		},
		isText: {
			active: {
				control: 'boolean',
			},
		},
		isSquare: {
			active: {
				control: 'boolean',
			},
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
		},
		label: {
			control: 'text',
		},
		onClick: { action: 'clicked' },
	},
	args: { title: 'Default Button' },
};

export default meta;
type Story = StoryObj<typeof IButton>;

export const DefaultButton: Story = {
	render: (args) => ({
		components: { IButton },
		setup() {
			return { args };
		},
		template: `
			<i-button v-bind="args">
				Button
			</i-button>`,
	}),

	args: {
		label: 'Default Button',
	},
};

export const PrimaryButton: Story = {
	...DefaultButton,
	args: {
		color: 'primary',
		label: 'Primary Button',
	},
};

export const SecondaryButton: Story = {
	...DefaultButton,
	args: {
		color: 'secondary',
		label: 'Secondary Button',
	},
};

export const WarningButton: Story = {
	...DefaultButton,
	args: {
		color: 'warning',
		label: 'Warning Button',
	},
};

export const DangerButton: Story = {
	...DefaultButton,
	args: {
		color: 'danger',
		label: 'Danger Button',
	},
};

export const LinkButton: Story = {
	...DefaultButton,
	args: {
		href: 'htts://google.com',
		label: 'Link Button',
	},
};

export const CircleButton: Story = {
	...DefaultButton,
	args: {
		isCircle: true,
		label: 'Circle Button',
	},
};

export const DashedButton: Story = {
	...DefaultButton,
	args: {
		isDashed: true,
		label: 'Dashed Button',
	},
};

export const OutlineButton: Story = {
	...DefaultButton,
	args: {
		isOutline: true,
		label: 'Outline Button',
	},
};

export const OutlinePrimaryButton: Story = {
	...DefaultButton,
	args: {
		isOutline: true,
		color: 'primary',
		label: 'Outline Primary Button',
	},
};

export const RoundedButton: Story = {
	...DefaultButton,
	args: {
		isRounded: true,
		label: 'Rounded Button',
	},
};

export const TextButton: Story = {
	...DefaultButton,
	args: {
		isText: true,
		label: 'Text Button',
	},
};

export const SmallButton: Story = {
	...DefaultButton,
	args: {
		size: 'small',
		label: 'Small Button',
	},
};

export const MediumButton: Story = {
	...DefaultButton,
	args: {
		size: 'medium',
		label: 'Medium Button',
	},
};

export const LargeButton: Story = {
	...DefaultButton,
	args: {
		size: 'large',
		label: 'Large Button',
	},
};
