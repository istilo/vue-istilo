<script setup lang="ts">
import { computed, onBeforeMount, onUnmounted, ref } from 'vue';

const emit = defineEmits(['close']);
const dropdown = ref();

const props = withDefaults(
	defineProps<{
		/**
		 * Toggles the dropdown menu
		 */
		isOpen: boolean;

		/**
		 * Specify which side the dropdown will show
		 */
		position?: string;
	}>(),
	{
		isOpen: false,
	}
);

onBeforeMount(() => {
	window.addEventListener('click', close);
});

onUnmounted(() => {
	window.removeEventListener('click', close);
});

const getMenuClasses = computed(() => {
	return [
		'i-dropdown',
		props.isOpen ? 'i-open' : '',
		props.position ? `i-dropdown-${props.position}` : '',
	];
});

const close = (event: { target: any }) => {
	if (props.isOpen && !dropdown.value.contains(event.target)) {
		emit('close');
	}
};
</script>

<template>
	<div
		class="i-inline"
		ref="dropdown">
		<slot />

		<div :class="getMenuClasses">
			<slot name="menu" />
		</div>
	</div>
</template>
