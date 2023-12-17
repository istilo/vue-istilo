<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	/**
	 * A size modifier that increase or decrease the font-size
	 * @values 'xsmall', 'small', 'medium', large', 'xlarge', 'xxlarge'
	 */
	size?: string;

	/**
	 * Specify the type of the icon based on fontello of tawkto icon set
	 */
	type: string;
}>();

const getClasses = computed(() => {
	return [
		'i-icon',
		props.type ? `i-icon-${props.type}` : '',
		props.size ? `i-icon-${props.size}` : '',
	];
});
</script>

<template>
	<i :class="getClasses" />
</template>
