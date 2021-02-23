import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
Vue.use(Vuex);
// const config = require('../assets/config.json');

export default new Vuex.Store({

    state: {
        // apiUrl: "https://api.jsonbin.io/b/602e519e0665b21b00b96d0d/4",
        // apiUrl: "https://api.jsonbin.io/b/603577dbf1be644b0a63e406",
        apiUrl: "https://api.jsonbin.io/v3/b/603577dbf1be644b0a63e406",
        apiKey: "$2b$10$jLA6wytLYVhKQGfD3ITFvuL/QNpWWaNMUAgAAwic4GMEK9KMqFzOu", 
    
        events: {
            type: Array,
            default: []
        },
        reviews: Array,

    },
    mutations: {
        showEvents(state, eventList) {
            state.events = eventList
        }
    },
    actions: {
        async getAllEvents(ctx) {
            let options = {
                headers: {
                  "Content-Type": "application/json",
                  "X-Master-Key": ctx.state.apiKey,
                  "X-Bin-Versioning": "false"
                }
              }
              let data = await axios.get(`${ctx.state.apiUrl}`, options)
              ctx.commit('showEvents', data.data.record.events)

            // try {
            //     //let event = await axios.get(config.apiUrl)
            //     let event = await axios.get(`${ctx.state.apiUrl}`)
            //     ctx.commit('showEvents', event.data.events)
            //     console.log(event)
            // } catch (error) {
            //     console.log("Error in fetch", error)
            // }
        },
        async addReviewForEvent(ctx, value) {
            console.log("in review function store")
            let options = {
                headers: {
                    "Content-Type": "application/json",
                    "X-Master-Key": ctx.state.apiKey,
                    "X-Bin-Versioning": "false"
                }
            }
            console.log("after headers", options);
            try {
                let data = await axios.put(`${ctx.state.apiUrl}`, {
                    events: ctx.state.events,
                    reviews: value 
                }, options)
                ctx.commit('showEvents', data.data.record.events)
                console.log('They data afte try', data)
            } catch (error) {
                console.log("Unable to submit", error)
            }
        }
    },
    modules: {
        // eventService,

    }
})
