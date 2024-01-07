import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { shallowMount, VueWrapper, enableAutoUnmount } from '@vue/test-utils';

import ILabel from '@/components/label/ILabel.vue';

enableAutoUnmount(afterEach);

describe('Istilo Label', () => {
	let wrapper: VueWrapper<any>;

	beforeEach(() => {
		wrapper = shallowMount(ILabel, {
			propsData: {
				color: '',
			},
			slots: {
				default: 'Label',
			},
		});

		expect(wrapper.exists()).toBe(true);
	});
	afterEach(() => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it('Should render correctly', async () => {
		expect(wrapper.element.tagName).toBe('DIV');
		expect(wrapper.classes()).toContain('i-label');

		expect(wrapper.text()).toBe('Label');
	});

	it('Should a color modifier class name', async () => {
		await wrapper.setProps({ color: 'primary' });

		expect(wrapper.classes()).toContain('i-label-primary');
	});
});
