import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { shallowMount, VueWrapper, enableAutoUnmount } from '@vue/test-utils';

import IAvatar from '@/components/avatar/IAvatar.vue';

enableAutoUnmount(afterEach);

describe('Istilo Avatar', () => {
	let wrapper: VueWrapper<any>;

	beforeEach(() => {
		wrapper = shallowMount(IAvatar, {
			propsData: {
				label: 'AV',
			},
		});

		expect(wrapper.exists()).toBe(true);
	});
	afterEach(() => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it('Should set a default class and label', () => {
		expect(wrapper.classes()).toContain('i-avatar');
		expect(wrapper.find('span').text()).toBe('AV');
	});

	it('Should set a color modifier class name', async () => {
		await wrapper.setProps({
			color: 'primary',
		});

		expect(wrapper.classes()).toContain('i-avatar-primary');
	});

	it('Should render a count', async () => {
		await wrapper.setProps({
			count: 3,
		});

		expect(wrapper.find('span').text()).toBe('+3');
	});

	it('Should limit the count more than 9', async () => {
		await wrapper.setProps({
			count: 12,
		});

		expect(wrapper.find('span').text()).toBe('+9');
	});

	it('Should set a size modifier class name', async () => {
		await wrapper.setProps({
			size: 'xlarge',
		});

		expect(wrapper.classes()).toContain('i-avatar-xlarge');
	});

	it('Should render the image source that has been set', async () => {
		const imageSrc = 'https://statinfer.com/wp-content/uploads/dummy-user.png';
		await wrapper.setProps({
			src: imageSrc,
		});

		expect(wrapper.find('img')).toBeDefined();
		expect(wrapper.find('img').attributes('src')).toBe(imageSrc);
		expect(wrapper.find('img').attributes('alt')).toBe('AV image');
	});
});
