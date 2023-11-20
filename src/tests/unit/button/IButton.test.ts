import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { shallowMount, VueWrapper, enableAutoUnmount } from '@vue/test-utils';

import IButton from '@/components/button/IButton.vue';

enableAutoUnmount(afterEach);

describe('Istilo Button', () => {
	let wrapper: VueWrapper<any>;

	beforeEach(() => {
		wrapper = shallowMount(IButton, {
			propsData: {
				label: 'Button',
			},
			slots: {
				default: 'Button',
			},
		});

		expect(wrapper.exists()).toBe(true);
	});
	afterEach(() => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it('Should set default attributes, element and class', () => {
		expect(wrapper.element.tagName).toBe('BUTTON');
		expect(wrapper.classes()).toContain('i-button');
		expect(wrapper.text()).toBe('Button');
	});

	it('Should have WCAG attributes', () => {
		expect(wrapper.attributes('type')).toBe('button');
		expect(wrapper.attributes('aria-label')).toBe('Button');
		expect(wrapper.attributes('title')).toBe('Button');
	});

	it('Should set a color modifier class name', async () => {
		await wrapper.setProps({
			color: 'primary',
		});

		expect(wrapper.classes()).toContain('i-button-primary');
	});

	it('Should be convert into anchor instead of button but has a style of button', async () => {
		await wrapper.setProps({
			href: 'https://google.com',
		});

		expect(wrapper.element.tagName).toBe('A');
		expect(wrapper.classes()).toContain('i-button');
		expect(wrapper.attributes('href')).toBe('https://google.com');
		expect(wrapper.attributes('role')).toBe('button');
		expect(wrapper.attributes('type')).toBeUndefined();
	});

	it('Should set a circle modifier class name', async () => {
		await wrapper.setProps({
			isCircle: true,
		});

		expect(wrapper.classes()).toContain('i-button-circle');
	});

	it('Should set a dashed modifier class name', async () => {
		await wrapper.setProps({
			isDashed: true,
		});

		expect(wrapper.classes()).toContain('i-button-dashed');
	});

	it('Should set a disabled modifier attributes', async () => {
		await wrapper.setProps({
			isDisabled: true,
		});

		expect(wrapper.attributes('disabled')).toBeDefined();
	});

	it('Should set a outline modifier class name', async () => {
		await wrapper.setProps({
			isOutline: true,
		});

		expect(wrapper.classes()).toContain('i-button-outline');
	});

	it('Should set a rounded modifier class name', async () => {
		await wrapper.setProps({
			isRounded: true,
		});

		expect(wrapper.classes()).toContain('i-button-rounded');
	});

	it('Should set a square modifier class name', async () => {
		await wrapper.setProps({
			isSquare: true,
		});

		expect(wrapper.classes()).toContain('i-button-square');
	});

	it('Should set a text modifier class name', async () => {
		await wrapper.setProps({
			isText: true,
		});

		expect(wrapper.classes()).toContain('i-button-text');
	});

	it('Should set a size modifier class name', async () => {
		await wrapper.setProps({
			size: 'large',
		});

		expect(wrapper.classes()).toContain('i-button-large');
	});
});
