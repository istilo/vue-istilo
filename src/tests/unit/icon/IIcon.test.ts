import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { shallowMount, VueWrapper, enableAutoUnmount } from '@vue/test-utils';

import IIcon from '@/components/icon/IIcon.vue';

enableAutoUnmount(afterEach);

describe('Istilo Icon', () => {
	let wrapper: VueWrapper<any>;

	beforeEach(() => {
		wrapper = shallowMount(IIcon, {
			propsData: {
				type: 'dashboard',
			},
		});

		expect(wrapper.exists()).toBe(true);
	});

	afterEach(() => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it('Should render the default element and class', () => {
		expect(wrapper.element.tagName).toBe('I');
		expect(wrapper.classes()).toContain('i-icon');
		expect(wrapper.classes()).toContain('i-icon-dashboard');
	});

	it('Should render the size modifer class', async () => {
		await wrapper.setProps({
			size: 'xxlarge',
		});

		expect(wrapper.classes()).toContain('i-icon-xxlarge');
	});
});
