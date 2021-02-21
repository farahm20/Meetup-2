import Vue from 'vue';
import Vuex from 'vuex';
// import eventService from "./EventService";
import axios from "axios";
Vue.use(Vuex);
const config = require('../assets/config.json');

export default new Vuex.Store({

    state: {
        // apiUrl: "https://api.jsonbin.io/b/602e519e0665b21b00b96d0d/1",
        // apiKey: "$2b$10$jLA6wytLYVhKQGfD3ITFvuL/QNpWWaNMUAgAAwic4GMEK9KMqFzOu",
        events: {},
    },
    mutations: {
        showEvents(state, eventList) {
            state.events = eventList
        },

    },
    actions: {
        async getAllEvents(ctx) {
            try {
                let event = await axios.get(config.apiUrl)
                ctx.commit('showEvents', event.data.events)
              } catch (error) {
                console.log("Error in fetch",error)
              }
        }
    },
    modules: {
        // eventService,

    }
})
