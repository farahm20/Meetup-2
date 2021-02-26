import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex'
import Login from '@/views/Login.vue'

describe('Login.vue', () => {
    it('It should have input fields for email and password.', async () => {
        const wrapper = shallowMount(Login);
        const email = wrapper.find(".email");
        const password = wrapper.find(".password");
        // console.log(email," " ,password);
        expect(email.exists()).toBe(true);
        expect(password.exists()).toBe(true);
    })

    it('It should have login button.', async () => {
        const wrapper = shallowMount(Login);
        const loginButton = wrapper.findAll('button');
        const loginButtonExist = loginButton.exists();
        expect(loginButton).toBeTruthy();
        expect(loginButtonExist).toBeTruthy();
    })
})