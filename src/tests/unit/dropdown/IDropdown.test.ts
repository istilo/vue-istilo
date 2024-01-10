import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { shallowMount, VueWrapper, enableAutoUnmount } from '@vue/test-utils';

import IDropdown from '@/components/dropdown/IDropdown.vue';

enableAutoUnmount(afterEach);

describe('TAS Dropdown', () => {
	let wrapper: VueWrapper<any>;

	beforeEach(() => {
		wrapper = shallowMount(IDropdown, {
			propsData: {
				isOpen: false,
			},
			slots: {},
		});

		expect(wrapper.exists()).toBe(true);
	});

	afterEach(() => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it('Shoulder set the default element and classes', () => {
		expect(wrapper.classes()).toContain('i-inline');
		expect(wrapper.get('.i-dropdown')).toBeDefined();
	});

	it('Shoulder set the position class modifier', async () => {
		await wrapper.setProps({
			position: 'right',
		});

		expect(wrapper.get('.i-dropdown').classes()).toContain('i-dropdown-right');
	});

	it('Shoulder set the open class modifier', async () => {
		await wrapper.setProps({
			isOpen: true,
		});

		expect(wrapper.get('.i-open')).toBeDefined();
	});

	it('Shoulder have button and menu list as child components.', async () => {
		const button = '<button>Dropdown</button>';
		const menu = '<ul><li>Option 1</li><li>Option 2</li></ul>';

		wrapper = shallowMount(IDropdown, {
			propsData: {
				isOpen: false,
			},
			slots: {
				default: button,
				menu: menu,
			},
		});

		expect(wrapper.get('button')).toBeDefined();
		expect(wrapper.get('ul')).toBeDefined();
	});
});
