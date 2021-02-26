import { shallowMount,mount, createLocalVue } from '@vue/test-utils';
import Navigation from '@/components/Navigation.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import index from '@/store/index.js'



describe('Navigation.vue', () => {
    it('It should go to the main page when logo is clicked', async () => {

        const goToRoute = jest.spyOn(Navigation.methods, 'goTo');

        const localVue = createLocalVue()
        localVue.use(Vuex)
        localVue.use(VueRouter)
        const router = new VueRouter()

        console.log(goToRoute)

        const mutations = { toggleMenu: jest.fn() }
        const store = new Vuex.Store({ mutations })

        const wrapper = mount(Navigation)

        const button = wrapper.find('logo').text();
        console.log(button);
            button.trigger('click')
            expect(window.location.href).toBe('/')
    
            // // expect(wrapper.vm.$route.path).toBe('/events')
        // expect(goToRoute).toHaveBeenCalled()
    })
})