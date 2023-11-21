<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	/**
	 * The color for the avatar background
	 * @values primary, secondary
	 */
	color?: string;

	/**
	 * A count for group of users that exceeds on the limit
	 */
	count?: number;

	/**
	 * Text for the avatar, atleast 1 or 2 characters mostly used
	 * for user Initials
	 */
	label?: string;

	/**
	 * Specific size or dimension
	 * @values xsmall, small, medium, large, xlarge
	 */
	size?: string;

	/**
	 * Image source of path
	 */
	src?: string;
}>();

const getClasses = computed(() => {
	return [
		'i-avatar',
		props.color ? `i-avatar-${props.color}` : '',
		props.size ? `i-avatar-${props.size}` : '',
		props.src ? 'i-avatar-image' : '',
	];
});

const getContent = computed(() => {
	return props.count ? (props.count > 9 ? '+9' : `+${props.count}`) : props.label;
});
</script>

<template>
	<div :class="getClasses">
		<img
			v-if="props.src"
			:src="props.src"
			:alt="`${props.label} image`" />

		<span v-else>
			{{ getContent }}
		</span>
	</div>
</template>
