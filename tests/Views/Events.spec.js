import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import VueRouter from "vue-router";

import Events from "@/views/Events.vue";
import App from "@/App.vue";
import index from "@/store/index.js";
import AllEvents from "@/components/AllEvents.vue";



const store = new Vuex.Store({ index });

describe('Events.vue', () => {
    let localVue;
    beforeEach(() => {
        localVue = createLocalVue();
    });

    it("It should fetch all events from store, with action from Vuex, when the app is mounted.", () => {
        localVue.use(VueRouter);
        const router = new VueRouter();

        let actions = {
            getAllEvents: jest.fn(),
        };
        const store = new Vuex.Store({ actions });
        const wrapper = shallowMount(App, {
            store,
            localVue,
            router,
        });
        expect(actions.getAllEvents).toHaveBeenCalled();
    });

    it('calls filter when input is changed', () => {
        const filter = jest.spyOn(Events.methods, 'filter');
        const allEvents = [
            {
                "id": 1,
                "title": "Story behind the skyline in dersert.",
                "image": "https://image.shutterstock.com/image-photo/aerial-panoramic-view-riyadh-city-600w-1582439176.jpg",
                "date": "2021-07-20",
                "location": "Riyadh, Saudi Arabia",
                "status": "ongoing",
                "reviews": [],
                "users": [
                    {
                        "name": "farah",
                        "email": "farah@gmail.com",
                        "comment": ""
                    }
                ],
                "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
            }
        ];

        const wrapper = shallowMount(Events, {
            propsData: {
                events: allEvents
            }
        });
        const searchBox = wrapper.find('.search');

        searchBox.trigger('input');
        expect(filter).toHaveBeenCalled;
        expect(wrapper.vm.$data.filteredList.length).toBe(1);
    })

    it("It should display filtered events when user types in search box.", () => {
        const filter = jest.spyOn(Events.methods, 'filter')
        const wrapper = shallowMount(Events, {
            propsData: {
                events: [
                    {
                        "id": 1,
                        "title": "Story behind the skyline in dersert.",
                        "image": "https://image.shutterstock.com/image-photo/aerial-panoramic-view-riyadh-city-600w-1582439176.jpg",
                        "date": "2021-07-20",
                        "location": "Riyadh, Saudi Arabia",
                        "status": "ongoing",
                    },
                ]
            },
            localVue,
            store
        })

        const inputBox = wrapper.find('input[type="text"]');
        inputBox.setValue('Story');

        expect(filter).toHaveBeenCalled();
        expect(inputBox.element.value).toBe('Story');
    })

    // it("It should have the component AllEvents", () => {
    //     const wrapper = mount(Events, {
    //         store,
    //         localVue,
    //     });

    //     const allEventsComponent = wrapper.findComponent(AllEvents);
    //     console.log(allEventsComponent);
    //     expect(allEventsComponent.exists()).toBe(true);
    // })
})