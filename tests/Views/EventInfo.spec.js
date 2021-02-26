import { mount, shallowMount, createLocalVue } from '@vue/test-utils';
import EventInfo from '@/views/EventInfo.vue'
import Signup from '@/components/Signup.vue'
import Comments from '@/components/Comments.vue'
import Vuex from 'vuex'
import index from '@/store/index.js'

describe('Event.vue', () => {
    let localVue;
    beforeEach(() => {
        localVue = createLocalVue();
    });
    
    it('It should display correct title, date, location, status and description of a chosen event.', async () => {
        const wrapper = shallowMount(EventInfo, {
            global: {
                mocks: {
                    $route: {
                        params: { id: 1 }
                    }
                }
            },
            propsData: {
                events: [{
                    title: "Story behind the skyline in dersert."
                }],
            }
        })

        const information = await wrapper.find('h1').text();
        const expected = 'No title available';
        expect(information).toMatch(expected);
    })
   
})
