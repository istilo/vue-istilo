import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { mount, VueWrapper, enableAutoUnmount } from '@vue/test-utils';

import IModal from '@/components/modal/IModal.vue';

enableAutoUnmount(afterEach);

describe('Istilo Modal', () => {
	let wrapper: VueWrapper<any>;

	beforeEach(() => {
		wrapper = mount(IModal, {
			propsData: {
				isOpen: false,
			},
			slots: {
				default: '<p id="modalbody">Modal</p>',
			},
		});

		expect(wrapper.exists()).toBe(true);
	});

	afterEach(() => {
		expect(wrapper.html()).toMatchSnapshot();
	});

	it('Should set default element and class', () => {
		expect(wrapper.classes()).contain('i-modal');
		expect(wrapper.get('.i-modal-body')).toBeDefined();
		expect(wrapper.get('#modalbody')).toBeDefined();
	});

	it('Should set open class', async () => {
		await wrapper.setProps({
			isOpen: true,
		});

		expect(wrapper.classes('i-display-block')).toBe(true);
	});

	it('Should not render the close button', async () => {
		await wrapper.setProps({
			hasCloseButton: false,
		});

		expect(wrapper.find('.i-modal-close').exists()).toBe(false);
	});

	it('Should have center class modifier', async () => {
		await wrapper.setProps({
			isOpen: true,
			isCenter: true,
		});

		expect(wrapper.find('.i-margin-auto-vertical').exists()).toBe(true);
		expect(wrapper.find('.i-flex-top').exists()).toBe(true);
		expect(wrapper.find('.i-flex-top').exists()).toBe(true);
	});

	it('Should have size class modifier', async () => {
		await wrapper.setProps({
			size: 'full',
		});

		expect(wrapper.classes('i-modal-full')).toBe(true);
	});

	it('Should render header and footer slots', () => {
		wrapper = mount(IModal, {
			propsData: {
				isOpen: false,
			},
			slots: {
				default: '<p id="modalbody">Modal</p>',
				header: '<p>header</p>',
				footer: '<p>footer</p>',
			},
		});

		expect(wrapper.find('.i-modal-header').exists()).toBe(true);
		expect(wrapper.find('.i-modal-footer').exists()).toBe(true);
	});
});
