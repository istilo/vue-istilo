import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { shallowMount, VueWrapper, enableAutoUnmount } from '@vue/test-utils';

import IBreadcrumb from '@/components/breadcrumb/IBreadcrumb.vue';
import IBreadcrumbItem from '@/components/breadcrumb/IBreadcrumbItem.vue';

enableAutoUnmount(afterEach);

describe('Istilo Breadcrumb', () => {
	let wrapper: VueWrapper<any>;

	beforeEach(() => {
		wrapper = shallowMount(IBreadcrumb, {
			propsData: {
				items: [
					{
						href: '/home',
						isDisabled: false,
						label: 'Home',
					},
					{
						href: '/profile',
						isDisabled: false,
						label: 'Profile',
					},
					{
						href: '/profile/john-doe',
						isDisabled: false,
						label: 'John Doe',
					},
				],
			},
		});

		expect(wrapper.exists()).toBe(true);
	});
	afterEach(() => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it('Should render the default class and tagname', () => {
		expect(wrapper.element.tagName).toBe('UL');
		expect(wrapper.classes()).toContain('i-breadcrumb');
	});

	it('Should render the children', () => {
		expect(wrapper.findAllComponents(IBreadcrumbItem)).toHaveLength(3);
	});
});
