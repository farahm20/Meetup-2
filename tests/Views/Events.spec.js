import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import Events from "@/views/Events.vue";
import App from "@/App.vue";
import index from "@/store/index.js";
import Navigation from "@/components/Navigation.vue";

import Vuex from "vuex";
import VueRouter from "vue-router";

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

    // it("It should have the component Navigation", () => {
    //     const wrapper = mount(Events, {
    //         store, 
    //         localVue,
    //     });

    //     const navigationComponent = wrapper.findComponent({ name: 'Navigation' });
    //     console.log(navigationComponent);
    //     expect(navigationComponent.exists()).toBe(true);
    // })
})