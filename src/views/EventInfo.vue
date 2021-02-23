<template>
  <main id="eventInfo">
    <section class="meetupInfo">
      <div class="titleandStatus">
        <h1>Title: {{ event.title }}</h1>
        <h1>Status: {{ event.status }}</h1>
      </div>

      <img :src="event.image" alt="image" />
      <h3>Date: {{ event.date }}</h3>
      <h2>Description: {{ event.description }}</h2>     
    </section>
    <Signup :event="event" />
    <Comments v-for="review of event.reviews" :key="review.id" :review="review" />

  </main>

</template>

<script>
import Signup from './../components/Signup'
import Comments from './../components/Comments'
export default {
  props: {
    events: Array,
  },
  components: {
     Signup, 
    Comments
  },
  methods: {},
  computed: {
    event() {
      let eventInfo = {
        title: this.selectedEvent
          ? this.selectedEvent.title
          : "No title available",
        image: this.selectedEvent
          ? this.selectedEvent.image
          : "No image available",
        description: this.selectedEvent
          ? this.selectedEvent.description
          : "No description available",
        date: this.selectedEvent
          ? this.selectedEvent.date
          : "No date available",
      };
      return eventInfo;
    },
    selectedEvent() {
      if (this.$route !== undefined) {
        return this.events.find((event) => event.id == this.$route.params.id);
      } else {
        return this.eventInfo;
      }
    },
  },
};
</script>