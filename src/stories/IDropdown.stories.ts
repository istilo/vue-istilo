import { reactive } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';

import IButton from '@/components/button/IButton.vue';
import IDropdown from '@/components/dropdown/IDropdown.vue';

const meta: Meta<typeof IDropdown> = {
	title: 'Components/Dropdown',
	parameters: {
		docs: {
			description: {
				component: 'Defines different styles for a toggleable dropdown.',
			},
		},
	},
	component: IDropdown,
	tags: ['autodocs'],
	argTypes: {
		isOpen: {
			active: {
				control: 'boolean',
			},
		},
		position: {
			control: 'select',
			options: ['top', 'bottom', 'left', 'right'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof IDropdown>;

export const DefaultDropdown: Story = {
	render: (args) => ({
		components: { IDropdown, IButton },
		setup() {
			const state = reactive({
				isOpen: false,
			});

			const toggleDropdown = () => {
				state.isOpen ? (state.isOpen = false) : (state.isOpen = true);
			};

			const closeDropdown = () => {
				state.isOpen = false;
			};
			``;

			return { state, toggleDropdown, closeDropdown, args };
		},
		template: `
			<i-dropdown
				:isOpen="state.isOpen"
				@close="closeDropdown"
				v-bind="args">
				<i-button
					@click="toggleDropdown">
					Dropdown
				</i-button>
				
				<template v-slot:menu><p>Dropdown</p></template>
			</i-dropdown>`,
	}),
};

export const PositionModifier: Story = {
	...DefaultDropdown,
	args: {
		position: 'right',
	},
};
