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

    it('It should display confirmation msg when user has registered for an event.', async () => {
        window.alert = jest.fn();
        const sendUser = jest.spyOn(Signup.methods, 'sendUser')
        const localVue = createLocalVue()
        localVue.use(Vuex)

        const store = new Vuex.Store(Vuex)

        const wrapper = shallowMount(Signup, {
            propsData: {
                event: {
                    status: "tostart"
                }
            },
            localVue,
            store
        })

        let sendUserButton = wrapper.find('.sendUser')
        await sendUserButton.trigger('click')

        expect(sendUser).toHaveBeenCalled();

        const confirmation = wrapper.find('.confirmation')
        expect(confirmation).toBeTruthy()
    })

    it('It should display the sendUser button only for "ongoing" events or events that have the "tostart" status', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const store = new Vuex.Store(Vuex)

        const wrapper = shallowMount(Signup, {
            propsData: {
                event: {
                    status: "tostart"
                }
            },
            localVue,
            store
        })

        const expectedButtonText = "Signup"
        let sendUserButton = wrapper.find('.sendUser').text()
        
        expect(sendUserButton).toBeTruthy()
        expect(sendUserButton).toBe(expectedButtonText)
    })
})