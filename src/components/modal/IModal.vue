<script setup lang="ts">
import { reactive, computed, onMounted, useSlots, ref, watch } from 'vue';
import IButton from '@/components/button/IButton.vue';
import IIcon from '@/components/icon/IIcon.vue';

const modal = ref();

const emit = defineEmits(['close', 'backDropClose', 'escapeClose']);
const slots = useSlots();

const state = reactive({
	openClass: '',
	displayClass: '',
	positionClass: '',
});

const props = withDefaults(
	defineProps<{
		/**
		 * Enable the background event close when user clicks
		 */
		hasBackDropClose?: boolean;

		/**
		 * Enable and displayt the close button
		 */
		hasCloseButton?: boolean;

		/**
		 * Enable or disable the close event when the `esc` key pressed
		 */
		hasEscapeClose?: boolean;

		/**
		 * Toggles the modal
		 */
		isOpen: boolean;

		/**
		 * Vertical align the modal
		 */
		isCenter?: boolean;

		/**
		 * Specify the size of the modal
		 * @values container, full, small
		 */
		size?: string;
	}>(),
	{
		hasBackDropClose: true,
		hasCloseButton: true,
		hasEscapeClose: true,
		isOpen: false,
		isCenter: false,
		size: undefined,
	}
);

watch(
	() => props.isOpen,
	(newValue, oldValue) => {
		if (newValue === oldValue) {
			return;
		}

		if (newValue) {
			openModal();
		} else {
			closeModal();
		}

		toggleScrollbar(newValue);
		toggleModal(newValue);
	}
);

onMounted(() => {
	if (props.isOpen) {
		openModal();

		toggleScrollbar(true);
		toggleModal(true);
	}
});

const getModalClasses = computed(() => {
	return [
		'i-modal',
		props.size ? `i-modal-${props.size}` : '',
		state.positionClass,
		state.openClass,
		state.displayClass,
	];
});

const getModalDialogClasses = computed(() => {
	return ['i-modal-dialog', props.isCenter ? 'i-margin-auto-vertical' : ''];
});

const close = () => {
	emit('close');
};

const backDropEvent = (event: { target: any }) => {
	if (modal.value === event.target && props.size !== 'full') {
		emit('backDropClose');
	}
};

const escapeEvent = (event: { keyCode: number }) => {
	if (event.keyCode === 27) {
		emit('escapeClose');
	}
};

const toggleModal = (bool: boolean) => {
	if (bool) {
		state.displayClass = props.isCenter ? 'i-flex' : 'i-display-block';
		state.positionClass = props.isCenter ? 'i-flex-top' : '';

		setTimeout(() => {
			state.openClass = 'i-open';
		}, 100);

		return;
	}

	state.openClass = '';

	setTimeout(() => {
		state.displayClass = '';
	}, 300);
};

const toggleScrollbar = (bool: boolean) => {
	const el = document.body;

	if (bool) {
		el.classList.add('i-modal-page');
		return;
	}

	el.classList.remove('i-modal-page');
};

const openModal = () => {
	if (props.hasEscapeClose) {
		window.addEventListener('keyup', escapeEvent);
	}

	if (props.hasBackDropClose) {
		modal.value.addEventListener('click', backDropEvent);
	}
};

const closeModal = () => {
	if (props.hasEscapeClose) {
		window.removeEventListener('keyup', escapeEvent);
	}

	if (props.hasBackDropClose) {
		modal.value.removeEventListener('click', backDropEvent);
	}
};
</script>

<template>
	<div
		:class="getModalClasses"
		ref="modal">
		<div :class="getModalDialogClasses">
			<div
				v-if="hasCloseButton"
				class="i-close i-modal-close"
				@click="close">
				<i-button
					:isText="true"
					:label="'Close modal'"
					class="i-modal-close-button">
					<i-icon :type="'close'" />
				</i-button>

				<p class="i-modal-close-esc">ESC</p>
			</div>

			<div
				v-if="slots.header"
				class="i-modal-header">
				<slot name="header" />
			</div>

			<div class="i-modal-body">
				<slot />
			</div>

			<div
				v-if="slots.footer"
				class="i-modal-footer">
				<slot name="footer" />
			</div>
		</div>
	</div>
</template>
