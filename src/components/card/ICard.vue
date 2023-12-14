<script setup lang="ts">
import { computed, useSlots } from 'vue';

const slots = useSlots();

const props = withDefaults(
	defineProps<{
		/**
		 * Add a background color
		 *
		 * @values default, primary, secondary
		 */
		color?: string;

		/**
		 * Adding box-shadow when mouse over on the card
		 */
		isHover?: boolean;

		/**
		 * Change the card size by adjusting the gutters
		 *
		 * @values small, large
		 */
		size?: string;
	}>(),
	{
		color: 'default',
		hover: false,
	}
);

const getClasses = computed(() => {
	return [
		'i-card',
		props.color ? `i-card-${props.color}` : '',
		props.isHover ? 'i-card-hover' : '',
		props.size ? `i-card-${props.size}` : '',
	];
});
</script>

<template>
	<div :class="getClasses">
		<div
			v-if="slots.header"
			class="i-card-header">
			<slot name="header" />
		</div>
		<div class="i-card-body">
			<slot />
		</div>
		<div
			v-if="slots.footer"
			class="i-card-footer">
			<slot name="footer" />
		</div>
	</div>
</template>
