import { shallowMount, createLocalVue } from '@vue/test-utils';
import Signup from '@/components/Signup.vue'
import Vuex from 'vuex'
import index from '@/store/index.js'

describe('Signup.vue', () => {
    it('It should display send user button', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const store = new Vuex.Store(index)

        const wrapper = shallowMount(Signup, {
            propsData: {
                event: {
                    "id": 1,
                    "title": "Story behind the skyline in dersert.",
                },
                localVue,
                store
            }
        })

        const sendReviewButton = wrapper.findAll('button');
        const sendReviewButtonExist = sendReviewButton.exists();


        expect(sendReviewButton).toBeTruthy();
        expect(sendReviewButtonExist).toBeTruthy();
    })
})