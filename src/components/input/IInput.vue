<script setup lang="ts">
import { computed, useAttrs, ref } from 'vue';

const input = ref();

const attrs = useAttrs();
const emit = defineEmits(['input', 'focus', 'update:modelValue']);

const props = defineProps<{
	/**
	 * Display a message and turn the form into danger color
	 */
	error?: string;

	/**
	 * Specify the fix width size
	 *
	 * @values xsmall, small, medium, large
	 */
	fixedWidth?: string;

	/**
	 * Make the border color into success color
	 */
	isSuccess?: boolean;

	/**
	 * Add a label before the input
	 */
	label?: string;

	/**
	 * The value of the component
	 */
	modelValue?: string;

	/**
	 * Add prefix custom text or icon
	 */
	prefix?: string;

	/**
	 * Increase/decrease the dimension and gutter of the component
	 */
	size?: string;

	/**
	 * Specify the width based on width component
	 *
	 * @values 1-*, 2-*, 3-^, 4-^, 5-^
	 */
	width?: string;
}>();

const labelClasses = computed(() => {
	return [
		'i-form-label',
		props.error ? 'i-text-danger' : '',
		props.isSuccess ? 'i-text-success' : '',
	];
});

const inputClasses = computed(() => {
	return [
		'i-input',
		props.isSuccess ? 'i-form-success' : '',
		props.size ? `i-form-${props.size}` : '',
		props.fixedWidth
			? `i-form-width-${props.fixedWidth}`
			: props.width
			  ? `i-width-${props.width}`
			  : '',
		props.error ? 'i-form-danger' : '',
	];
});

const handleInput = (event: any) => {
	emit('update:modelValue', event.target.value);
};
</script>

<template>
	<div class="i-form-wrapper">
		<label
			v-if="props.label"
			:class="labelClasses">
			{{ props.label
			}}<span
				v-if="attrs.required"
				:for="attrs.id"
				class="i-text-danger"
				>*
			</span>
		</label>

		<div v-if="props.prefix">
			<div class="i-flex">
				<div class="i-form-input-prefix">
					{{ props.prefix }}
				</div>

				<input
					:ref="input"
					:class="inputClasses"
					@input="handleInput"
					:type="attrs.type ? attrs.type : 'text'"
					:value="modelValue"
					:required="attrs.required"
					:id="attrs.id"
					:aria-required="attrs.required"
					:aria-placeholder="attrs.placeholder"
					:aria-label="props.label"
					:aria-labellby="props.label !== null && props.label?.length ? attrs.id : false"
					:aria-invalid="props.error ? true : null"
					role="input"
					v-bind="attrs" />
			</div>
		</div>

		<input
			v-else
			:ref="input"
			:class="inputClasses"
			@input="handleInput"
			:type="attrs.type ? attrs.type : 'text'"
			:value="modelValue"
			:required="attrs.required"
			:id="attrs.id"
			:aria-required="attrs.required"
			:aria-placeholder="attrs.placeholder"
			:aria-label="props.label"
			:aria-labellby="props.label !== null && props.label?.length ? attrs.id : false"
			:aria-invalid="props.error ? true : null"
			role="input"
			v-bind="attrs" />

		<small
			v-if="props.error"
			class="i-display-block i-margin-xsmall i-text-danger">
			{{ props.error }}
		</small>
	</div>
</template>
