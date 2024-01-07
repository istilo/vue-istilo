<script setup lang="ts">
import { computed } from 'vue';
import IBreadcrumbItem from './IBreadcrumbItem.vue';

interface Items {
	href: string;
	isDisabled: boolean;
	label: string;
}

const props = defineProps<{
	/**
	 * An array of object to display link
	 *
	 * @example { href : string, isDisabled : boolean, label : string }
	 */
	items: Items[];
}>();

const isLastItem = computed(() => {
	return props.items.length - 1;
});
</script>

<template>
	<ul class="i-breadcrumb">
		<i-breadcrumb-item
			v-for="(item, index) in items"
			:key="index"
			:isActive="isLastItem === index"
			:href="item.href"
			:isDisabled="item.isDisabled">
			{{ item.label }}
		</i-breadcrumb-item>
	</ul>
</template>
