import { shallowMount, createLocalVue } from '@vue/test-utils';
import AllEvents from '@/components/AllEvents.vue'
import Vuex from 'vuex'
import index from '@/store/index.js'

describe('Event.vue', () => {
    it('It should display all events when the page is mounted.', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const store = new Vuex.Store(index)

        const wrapper = shallowMount(AllEvents, {
            propsData: {
                event: {
                    "id": 1,
                    "title": "Story behind the skyline in dersert.",
                    "image": "https://image.shutterstock.com/image-photo/aerial-panoramic-view-riyadh-city-600w-1582439176.jpg",
                    "date": "2021-07-20",
                    "location": "Riyadh, Saudi Arabia",
                    "status": "ongoing",
                    "reviews": "",
                    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."

                },
                localVue,
                store
            }
        })

        let getAllEvents = wrapper.findAll('.card').exists();
        console.log(getAllEvents);
        expect(getAllEvents).toBeTruthy();
    })

    it('It should display correct title, date, location, status and description of all events.', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const store = new Vuex.Store(index)

        const wrapper = shallowMount(AllEvents, {
            propsData: {
                event: {
                    "id": 1,
                    "title": "Story behind the skyline in dersert.",
                    "image": "https://image.shutterstock.com/image-photo/aerial-panoramic-view-riyadh-city-600w-1582439176.jpg",
                    "date": "2021-07-20",
                    "location": "Riyadh, Saudi Arabia",
                    "status": "ongoing",
                    "reviews": "",
                    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio."
                },
                localVue,
                store
            }
        })

        const expectedTitle = "Story behind the skyline in dersert.";
        const actualTitle = wrapper.find(".title").text();

        const expectedDate = "When: 2021-07-20";
        const actualDate = wrapper.find(".date").text();

        const expectedLocation = "Where: Riyadh, Saudi Arabia";
        const actualLocation = wrapper.find(".location").text();

        const actualstatus = "ongoing";
        const expectedStatus = wrapper.find(".status").text();

        expect(actualTitle).toBe(expectedTitle);
        expect(actualDate).toBe(expectedDate);
        expect(actualLocation).toBe(expectedLocation);
        expect(actualstatus).toBe(expectedStatus);
    })

    it('It should display image of the event.', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const store = new Vuex.Store(index)

        const wrapper = shallowMount(AllEvents, {
            propsData: {
                event: {
                    "id": 1,
                    "title": "Story behind the skyline in dersert.",
                    "image": "https://image.shutterstock.com/image-photo/aerial-panoramic-view-riyadh-city-600w-1582439176.jpg",
                   
                },
                localVue,
                store
            }
        })

        let getImage = wrapper.findAll('.image').exists();
        expect(getImage).toBeTruthy();
    })

    // it('It should display the explore button.', () => {
    //     const localVue = createLocalVue()
    //     localVue.use(Vuex)
    //     const store = new Vuex.Store(index)

    //     const wrapper = shallowMount(AllEvents, {
    //         propsData: {
    //             event: {
    //                 "id": 1,
    //                 "title": "Story behind the skyline in dersert.",
                  
    //             },
    //             localVue,
    //             store
    //         }
    //     })

    //     const exploreButton = wrapper.findAll('button');
    //     const exploreButtonExist = exploreButton.exists();

    //     console.log(exploreButton);
    //     console.log(exploreButtonExist);


    //     expect(exploreButton).toBeTruthy();
    //     expect(exploreButtonExist).toBeTruthy();
    // })


})
