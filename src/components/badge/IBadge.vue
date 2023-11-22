<script setup lang="ts">
const props = defineProps<{
	/**
	 * A number that will show in the badge
	 */
	count: number;
}>();
</script>

<template>
	<span class="i-badge">
		{{ props.count }}
	</span>
</template>
