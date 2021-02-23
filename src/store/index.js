import Vue from 'vue';
import Vuex from 'vuex';
// import eventService from "./EventService";
import axios from "axios";
Vue.use(Vuex);
 const config = require('../assets/config.json');

export default new Vuex.Store({

    state: {
        // apiUrl: "https://api.jsonbin.io/b/602e519e0665b21b00b96d0d/4",
        // apiKey: "$2b$10$jLA6wytLYVhKQGfD3ITFvuL/QNpWWaNMUAgAAwic4GMEK9KMqFzOu",
        // events: {},
        show: {
            Welcome: false
        }
    },
    mutations: {
        showEvents(state, eventList) {
            state.events = eventList
        }
    },
    actions: {
        async getAllEvents(ctx) {
            try {
                let event = await axios.get(config.apiUrl)
                // let event = await axios.get(`${ctx.state.apiUrl}`)
                ctx.commit('showEvents', event.data.events)
                console.log(event)
            } catch (error) {
                console.log("Error in fetch", error)
            }
        },
        async addReviewForEvent(ctx, value) {
            console.log("in review function store")
            let options = {
                headers: {
                    "Content-Type": "application/json",
                    "secret-key": config.apiKey
                }
            }
            try {
                let data = await axios.post(config.apiUrl, {
                    events: ctx.state.events,
                    reviews: value
                }, options)
                console.log('data', data)
            } catch (error) {
                console.log(error)
            }
        }
    },
    modules: {
        // eventService,

    }
})
