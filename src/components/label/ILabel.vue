<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	/**
	 * A color modifier for label
	 */
	color: string;
}>();

const getClasses = computed(() => {
	return ['i-label', props.color ? `i-label-${props.color}` : ''];
});
</script>

<template>
	<div :class="getClasses">
		<slot />
	</div>
</template>
