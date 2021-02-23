import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import Events from "@/views/Events.vue";
import App from "@/App.vue";
import index from "@/store/index.js";
import Vuex from "vuex";
import VueRouter from "vue-router";

const store = new Vuex.Store({ index });

describe('Events.vue', () => {
    let localVue;
    beforeEach(() => {
        localVue = createLocalVue();
    });

    it("It should fetch all events from store when the app is mounted.", () => {
        localVue.use(VueRouter);
        const router = new VueRouter();

        let actions = {
            fetchEvents: jest.fn(),
        };
        const store = new Vuex.Store({ actions });
        const wrapper = shallowMount(App, {
            store,
            localVue,
            router,
        });
        expect(actions.fetchEvents).toHaveBeenCalled();
    });
})