import { createLocalVue, mount, shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import App from "@/App.vue";
import index from "@/store/index.js";
import Vuex from "vuex";
import VueRouter from "vue-router";

const store = new Vuex.Store({ index });

describe('Home.vue', () => {
    let localVue;
    beforeEach(() => {
        localVue = createLocalVue();
    });

    it("should, when the App component is mounted, dispach an action to Vuex", () => {
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