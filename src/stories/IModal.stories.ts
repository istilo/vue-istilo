import { reactive } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';

import IButton from '@/components/button/IButton.vue';
import IModal from '@/components/modal/IModal.vue';

const meta: Meta<typeof IModal> = {
	title: 'Components/Modal',
	parameters: {
		docs: {
			description: {
				component: 'Create layout boxes with different styles.',
			},
		},
	},
	component: IModal,
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'select',
			options: ['default', 'primary', 'secondary'],
		},
		hasBackDropClose: {
			active: {
				control: 'boolean',
			},
		},
		hasCloseButton: {
			active: {
				control: 'boolean',
			},
		},
		hasEscapeClose: {
			active: {
				control: 'boolean',
			},
		},
		isOpen: {
			active: {
				control: 'boolean',
			},
		},
		isCenter: {
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
type Story = StoryObj<typeof IModal>;

export const DefaultModal: Story = {
	render: (args) => ({
		components: { IModal, IButton },
		setup() {
			const state = reactive({
				isOpen: false,
			});

			const openModal = () => {
				state.isOpen = true;
			};

			const closeModal = () => {
				state.isOpen = false;
			};

			return { state, openModal, closeModal, args };
		},
		template: `
			<div>
				<i-button
					@click="openModal">
					Open Modal
				</i-button>

				<i-modal
					:isOpen="state.isOpen"
					@close="closeModal"
					@backDropClose="closeModal"
					@escapeClose="closeModal"
					v-bind="args">
					<h1 class="i-modal-title">Headline</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<div class="i-text-right i-margin-top">
						<i-button
							class="i-margin-xsmall-right"
							@click="closeModal">
							Cancel
						</i-button>
						<i-button
							:color="'primary'">
							Save
						</i-button>
					</div>
				</i-modal>
			</div>`,
	}),
};

export const HeaderAndFooter: Story = {
	render: (args) => ({
		components: { TasModal, TasButton },
		setup() {
			const state = reactive({
				isOpen: false,
			});

			const openModal = () => {
				state.isOpen = true;
			};

			const closeModal = () => {
				state.isOpen = false;
			};

			return { state, openModal, closeModal, args };
		},
		template: `
			<div>
				<i-button
					@click="openModal">
					Open Modal
				</i-button>

				<i-modal
					:isOpen="state.isOpen"
					@close="closeModal"
					@backDropClose="closeModal"
					@escapeClose="closeModal"
					v-bind="args">
					<template v-slot:header>
						<h1 class="i-modal-title">Modal Title</h1>
					</template>
					
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					
					<template v-slot:footer>
						<div class="i-text-right">
							<i-button
								class="i-margin-xsmall-right"
								@click="closeModal">
								Cancel
							</i-button>
							<i-button
								:color="'primary'">
								Save
							</i-button>
						</div>
					</template>
				</i-modal>
			</div>`,
	}),
};

export const DisableBackDropClose: Story = {
	...DefaultModal,
	args: {
		hasBackDropClose: false,
	},
};

export const DisableCloseButton: Story = {
	...DefaultModal,
	args: {
		hasCloseButton: false,
	},
};

export const DisableEscapeClose: Story = {
	...DefaultModal,
	args: {
		hasEscapeClose: false,
	},
};

export const CenterModal: Story = {
	...DefaultModal,
	args: {
		isCenter: true,
	},
};

export const ContainerModal: Story = {
	...DefaultModal,
	args: {
		size: 'container',
	},
};

export const FullModal: Story = {
	...DefaultModal,
	args: {
		size: 'full',
	},
};
