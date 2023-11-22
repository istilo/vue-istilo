import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { shallowMount, VueWrapper, enableAutoUnmount } from '@vue/test-utils';

import IInput from '@/components/input/IInput.vue';

enableAutoUnmount(afterEach);

describe('Istilo Input', () => {
	let wrapper: VueWrapper<any>;

	beforeEach(() => {
		wrapper = shallowMount(IInput, {
			propsData: {
				label: 'Input',
			},
		});

		expect(wrapper.exists()).toBe(true);
	});

	afterEach(() => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it('Should render the default childs, elements and class', () => {
		expect(wrapper.classes()).toContain('i-form-wrapper');

		expect(wrapper.find('.i-form-label')).toBeDefined();
		expect(wrapper.find('.i-form-label').text()).toBe('Input');

		expect(wrapper.find('.i-input').attributes('role')).toBe('input');
		expect(wrapper.find('.i-input').attributes('aria-label')).toBe('Input');
	});

	it('Should add error modifier class and element', async () => {
		await wrapper.setProps({
			error: 'Error message',
		});

		expect(wrapper.find('.i-form-label').classes()).toContain('i-text-danger');
		expect(wrapper.find('.i-input').classes()).toContain('i-form-danger');
		expect(wrapper.find('.i-input').attributes('aria-invalid')).toBe('true');

		expect(wrapper.find('small')).toBeDefined();
		expect(wrapper.find('small').text()).toBe('Error message');
	});

	it('Should add required element and attributes', async () => {
		await wrapper.setProps({
			required: true,
		});

		expect(wrapper.find('span').text()).toBe('*');
		expect(wrapper.find('.i-input').attributes('required')).toBe('');
		expect(wrapper.find('.i-input').attributes('aria-required')).toBe('true');
	});

	it('Should add fixed width modifier class', async () => {
		await wrapper.setProps({
			fixedWidth: 'large',
		});

		expect(wrapper.find('.i-input').classes()).toContain('i-form-width-large');
	});

	it('Should add size modifier class', async () => {
		await wrapper.setProps({
			size: 'large',
		});

		expect(wrapper.find('.i-input').classes()).toContain('i-form-large');
	});

	it('Should add success modifier class', async () => {
		await wrapper.setProps({
			isSuccess: true,
		});

		expect(wrapper.find('.i-form-label').classes()).toContain('i-text-success');
		expect(wrapper.find('.i-input').classes()).toContain('i-form-success');
	});
});
