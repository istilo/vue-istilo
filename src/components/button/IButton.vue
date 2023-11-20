<script setup lang="ts">
import { computed } from 'vue';

type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'danger';

const emit = defineEmits<{
	(e: 'click', event: MouseEvent): void;
}>();

const props = withDefaults(
	defineProps<{
		/**
		 * A color that has traffic light color base on the status
		 */
		color?: Color;

		/**
		 * A site link that will conver the button to anchor
		 */
		href?: string;

		/**
		 * Make the circle that mostly used as floating action button.
		 */
		isCircle?: boolean;

		/**
		 * A modifier that will make the background to white with a border dashed
		 */
		isDashed?: boolean;

		/**
		 * Make the button unclickable and apply idle style color.
		 */
		isDisabled?: boolean;

		/**
		 * A modifier thet will make the background to white
		 */
		isOutline?: boolean;

		/**
		 * A modifier that will make the button border sharpless
		 */
		isRounded?: boolean;

		/**
		 * Make the button padding consistent
		 */
		isSquare?: boolean;

		/**
		 * Make the button look like a plain text.
		 */
		isText?: boolean;

		/**
		 * Increase or decrease the dimension and gutter of the button.
		 */
		size?: string;

		/**
		 * Label to describe the button that will be use on wcag attributes
		 */
		label?: string;
	}>(),
	{
		color: undefined,
		href: undefined,
		isCircle: false,
		isDashed: false,
		isDisabled: false,
		isOutline: false,
		isRounded: false,
		isSquare: false,
		isText: false,
		size: undefined,
		label: undefined,
	}
);

const getTagName = computed(() => {
	return props.href ? 'a' : 'button';
});

const getClasses = computed(() => {
	return [
		'i-button',
		props.color && !props.isDashed && !props.isOutline && !props.isText
			? `i-button-${props.color}`
			: '',
		props.isText ? 'i-button-text' : '',
		props.isOutline && !props.isText ? `i-button-outline i-button-outline-${props.color}` : '',
		props.isCircle && !props.isText ? 'i-button-circle' : '',
		props.isRounded && !props.isCircle ? 'i-button-rounded' : '',
		props.isDashed ? 'i-button-dashed' : '',
		props.size ? `i-button-${props.size}` : '',
		props.isSquare ? 'i-button-square' : '',
	];
});

const handleClick = (event: MouseEvent) => {
	emit('click', event);
};
</script>

<template>
	<component
		:is="getTagName"
		:class="getClasses"
		:disabled="props.isDisabled"
		:type="!props.href ? 'button' : null"
		:href="props.href ? props.href : null"
		:aria-label="label"
		:role="props.href ? 'button' : null"
		:title="label"
		@click="handleClick">
		<slot />
	</component>
</template>
