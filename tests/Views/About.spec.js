import { shallowMount } from '@vue/test-utils';
import About from '../../src/views/About.vue'

describe('About.vue', () => {
    it('should display the discription when the page mounted', () => {
        const wrapper = shallowMount(About);
        const expectedDescription = 'How we arrange these meet ups'

        const descriptionExist = wrapper.find('h1').exists();
        const actualDescription = wrapper.find('h1').text();

        expect(descriptionExist).toBeTruthy();
        expect(actualDescription).toBe(expectedDescription);
    })

    it('should display all paragraphs on mount', () => {
        const wrapper = shallowMount(About);
        const paragraphs = wrapper.findAll('p');

        const expectedNumber = 2;
        const actualNumber = paragraphs.length
        expect(actualNumber).toBe(expectedNumber)
    })

    it('should display 1 image on mount', () => {
        const wrapper = shallowMount(About);
        const image = wrapper.findAll('img');

        const expectedNumber = 1;
        const actualNumber = image.length;
        expect(actualNumber).toBe(expectedNumber);
    })
})