import { shallowMount, createLocalVue } from '@vue/test-utils';
import Comments from '@/components/Comments.vue'
import Vuex from 'vuex'

describe('Comments.vue', () => {
    it('It should display the review and reviewer. ', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const store = new Vuex.Store(Vuex)

        const wrapper = shallowMount(Comments, {
            propsData: {
                review: {
                    name: "Farah",
                    email: 'farah@gmail.com',
                    comment: "Amazing event"
                }
            },
            localVue,
            store
        })

        const expectedName = 'Farah'
        const expectedComment = 'Says: Amazing event'

        const actualName = wrapper.find('h3').text()
        const actualComment = wrapper.find('h4').text()

        expect(actualName).toBe(expectedName)
        expect(actualComment).toBe(expectedComment)
    })
})

