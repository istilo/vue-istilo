<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	/**
	 * Identifier for current page
	 */
	isActive?: boolean;

	/**
	 * Disabled the click event
	 */
	isDisabled?: boolean;

	/**
	 * Location where to redirect
	 */
	href: string;
}>();

const getClasses = computed(() => {
	return [props.isDisabled ? 'i-disabled' : ''];
});

const getTagName = computed(() => {
	return props.isActive ? 'span' : 'router-link';
});
</script>

<template>
	<li :class="getClasses">
		<component
			:is="getTagName"
			:to="!props.isActive && props.href ? 'props.href' : ''">
			<slot />
		</component>
	</li>
</template>
