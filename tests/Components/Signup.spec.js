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
})