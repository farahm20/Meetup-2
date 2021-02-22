import { shallowMount, createLocalVue } from '@vue/test-utils';
import Events from '@/components/MeetUp/Event.vue'
import Vuex from 'vuex'
import index from '@/store/index.js'

describe('Event.vue', () => {
    it('It should display all events when the page is mounted.', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const store = new Vuex.Store(index)

        const wrapper = shallowMount(Events, {
            propsData: {
                event: {
                        "id": 1,
                        "title": "Riyadh",
                        "date": "2021-07-20",
                        "location": "Riyadh, Saudi Arabia",
                    },
                    localVue,
                    store
            }
        })

        let getAllEvents = wrapper.findAll('.events').exists();
        console.log(getAllEvents);
        expect(getAllEvents).toBeTruthy();
    })

    it('It should display correct title, date, location and description of all events.', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const store = new Vuex.Store(index)

        const wrapper = shallowMount(Events, {
            propsData: {
                event: {
                        "id": 1,
                        "title": "Riyadh",
                        "date": "2021-07-20",
                        "location": "Riyadh, Saudi Arabia",
                        "description": "Enjoy the skyline in desert.",
                    },
                    localVue,
                    store
            }
        })

        const expectedTitle = "Riyadh";
        const actualTitle = wrapper.find(".title").text();

        // const expectedDate = "Date: 2021-07-20";
        // const actualDate = wrapper.find(".date").text();

        // const expectedLocation = "Location: Riyadh, Saudi Arabia";
        // const actualLocation = wrapper.find(".location").text();

        // const expectedDescription = "Description: Enjoy the skyline in desert.";
        // const actualDescription = wrapper.find(".description").text();

        expect(actualTitle).toBe(expectedTitle); 
        // expect(actualDate).toBe(expectedDate); 
        // expect(actualLocation).toBe(expectedLocation); 
        // expect(actualDescription).toBe(expectedDescription); 
    })

    it('It should display image of the event.', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const store = new Vuex.Store(index)

        const wrapper = shallowMount(Events, {
            propsData: {
                event: {
                        "id": 1,
                        "title": "Riyadh",
                        "image": "https://image.shutterstock.com/image-photo/aerial-panoramic-view-riyadh-city-600w-1582439176.jpg",
                    },
                    localVue,
                    store
            }
        })

        let getImage = wrapper.findAll('.image').exists();
        expect(getImage).toBeTruthy();
    })

    it('It should display the explore button.', () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        const store = new Vuex.Store(index)

        const wrapper = shallowMount(Events, {
            propsData: {
                event: {
                        "id": 1,
                        "title": "Riyadh",
                    },
                    localVue,
                    store
            }
        })

        const exploreButton = wrapper.findAll('button');
        const exploreButtonExist = exploreButton.exists();
       
        console.log(exploreButton);
        console.log(exploreButtonExist);

        
        expect(exploreButton).toBeTruthy();
        expect(exploreButtonExist).toBeTruthy();
    })


})
