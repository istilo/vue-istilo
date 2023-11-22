import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { shallowMount, VueWrapper, enableAutoUnmount } from '@vue/test-utils';

import IBadge from '@/components/badge/IBadge.vue';

enableAutoUnmount(afterEach);

describe('Istilo Badge', () => {
	let wrapper: VueWrapper<any>;

	beforeEach(() => {
		wrapper = shallowMount(IBadge, {
			propsData: {
				count: 0,
			},
		});

		expect(wrapper.exists()).toBe(true);
	});
	afterEach(() => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it('Should render correctly', async () => {
		expect(wrapper.element.tagName).toBe('SPAN');
		expect(wrapper.classes()).toContain('i-badge');
		expect(wrapper.text()).toBe('0');
	});

	it('Should props.count equals to 99', async () => {
		await wrapper.setProps({ count: 99 });

		expect(wrapper.text()).toBe('99');
	});
});
