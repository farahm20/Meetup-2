<template>
  <main id="eventInfo">
    <section class="meetupInfo">
      <h1>{{ event.title }}</h1>
      <img :src="event.image" alt="image" />
      <h2>{{ event.description }}</h2>
      <h3>{{ event.date }}</h3>
    </section>
  </main>
</template>

<script>
export default {
  components: {},
  props: {
    events: Array,
  },
  methods: {},
  computed: {
    event() {
      let eventInfo = {
        title: this.selectedEvent ? this.selectedEvent.title : "No title available",
        image: this.selectedEvent
          ? this.selectedEvent.image
          : "No image available",
        description: this.selectedEvent
          ? this.selectedEvent.description
          : "No description available",
        date: this.selectedEvent ? this.selectedEvent.date : "No date available",
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