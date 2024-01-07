import type { Meta, StoryObj } from '@storybook/vue3';

import IBreadcrumb from '@/components/breadcrumb/IBreadcrumb.vue';

const meta: Meta<typeof IBreadcrumb> = {
	title: 'Components/BreadCrumb',
	parameters: {
		docs: {
			description: {
				component: 'Create breadcrumbs to show users their location within a website.',
			},
		},
	},
	component: IBreadcrumb,
	tags: ['autodocs'],
	argTypes: {
		items: Array,
	},
	args: {
		items: [
			{
				href: '/home',
				isDisabled: false,
				label: 'Home',
			},
			{
				href: '/profile',
				isDisabled: false,
				label: 'Profile',
			},
			{
				href: '/profile/john-doe',
				isDisabled: false,
				label: 'John Doe',
			},
		],
	},
};

export default meta;
type Story = StoryObj<typeof IBreadcrumb>;

export const DefaultBreadcrumb: Story = {
	render: (args) => ({
		components: { IBreadcrumb },
		setup() {
			return { args };
		},
		template: `
			<i-breadcrumb v-bind="args"/>`,
	}),
};
