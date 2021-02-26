import { shallowMount,mount, createLocalVue } from '@vue/test-utils';
import Navigation from '@/components/Navigation.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'




describe('Navigation.vue', () => {
    it('It should go to LogoInfo when LetsMeet logo is clicked', async () => {
        const changeRoute = jest.spyOn(Navigation.methods, 'goTo')
        const localVue = createLocalVue()
        localVue.use(Vuex)
        localVue.use(VueRouter)
        const router = new VueRouter()

        
        const wrapper = shallowMount(Navigation, { localVue, router })
        await wrapper.find('a').trigger('click')

        expect(wrapper.vm.$route.path).toBe('/LogoInfo')
        expect(changeRoute).toHaveBeenCalled()
    })

    it('It should go to About page when about is clicked', async () => {
        const changeRoute = jest.spyOn(Navigation.methods, 'goTo')
        const localVue = createLocalVue()
        localVue.use(Vuex)
        localVue.use(VueRouter)
        const router = new VueRouter()

        
        const wrapper = shallowMount(Navigation, { localVue, router })
        await wrapper.find('.about').trigger('click')

        expect(wrapper.vm.$route.path).toBe('/')
        expect(changeRoute).toHaveBeenCalled()
    })

    it('It should go to Meetups page when meetup is clicked', async () => {
        const changeRoute = jest.spyOn(Navigation.methods, 'goTo')
        const localVue = createLocalVue()
        localVue.use(Vuex)
        localVue.use(VueRouter)
        const router = new VueRouter()

        
        const wrapper = shallowMount(Navigation, { localVue, router })
        await wrapper.find('.meetups').trigger('click')

        expect(wrapper.vm.$route.path).toBe('/events')
        expect(changeRoute).toHaveBeenCalled()
    })

    it('It should go to Login page when login is clicked', async () => {
        const changeRoute = jest.spyOn(Navigation.methods, 'goTo')
        const localVue = createLocalVue()
        localVue.use(Vuex)
        localVue.use(VueRouter)
        const router = new VueRouter()

        
        const wrapper = shallowMount(Navigation, { localVue, router })
        await wrapper.find('.login').trigger('click')

        expect(wrapper.vm.$route.path).toBe('/login')
        expect(changeRoute).toHaveBeenCalled()
    })
})