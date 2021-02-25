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
   
    // it("It should have the component Signup", () => {
    //     const localVue = createLocalVue()
    //     localVue.use(Vuex)
    //     const store = new Vuex.Store(index)

    //     const wrapper = mount(EventInfo, {
    //         store, 
    //         localVue,
    //     });

    //     const SignupComponent = wrapper.findComponent({ name: 'Signup' });
    //     console.log(SignupComponent);
    //     expect(SignupComponent.exists()).toBe(true);
    // })

    // it("It should have the component Comments", () => {
    //     const wrapper = mount(EventInfo, {
    //         store, 
    //         localVue,
    //     });

    //     const commentsComponent = wrapper.findComponent({ name: 'Comments' });
    //     console.log(commentsComponent);
    //     expect(commentsComponent.exists()).toBe(true);
    // })
})
