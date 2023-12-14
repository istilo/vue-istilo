import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { shallowMount, VueWrapper, enableAutoUnmount } from '@vue/test-utils';

import ICard from '@/components/card/ICard.vue';

enableAutoUnmount(afterEach);

describe('Istilo Card', () => {
	let wrapper: VueWrapper<any>;

	beforeEach(() => {
		wrapper = shallowMount(ICard, {
			propsData: {
				label: 'AV',
			},
			slots: {
				default: '<p>Card</p>',
			},
		});

		expect(wrapper.exists()).toBe(true);
	});

	afterEach(() => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it('Should set a default class and children', () => {
		expect(wrapper.classes()).toContain('i-card');
		expect(wrapper.get('.i-card-body')).toBeDefined();
	});

	it('Should set a color modifier class name', async () => {
		await wrapper.setProps({
			color: 'primary',
		});

		expect(wrapper.classes()).toContain('i-card-primary');
	});

	it('Should set a hover modifier class name', async () => {
		await wrapper.setProps({
			isHover: true,
		});

		expect(wrapper.classes()).toContain('i-card-hover');
	});

	it('Should set a size modifier class name', async () => {
		await wrapper.setProps({
			size: 'large',
		});

		expect(wrapper.classes()).toContain('i-card-large');
	});

	it('Should set a size modifier class name', async () => {
		wrapper = shallowMount(ICard, {
			propsData: {
				label: 'AV',
			},
			slots: {
				default: '<p>Card</p>',
				header: `
					<template v-slot:header>
						<p>Header</p>
					</template>`,
				footer: `
					<template v-slot:footer>
						<p>Footer</p>
					</template>`,
			},
		});

		expect(wrapper.get('.i-card-body')).toBeDefined();
		expect(wrapper.get('.i-card-header')).toBeDefined();
		expect(wrapper.get('.i-card-footer')).toBeDefined();
	});
});
