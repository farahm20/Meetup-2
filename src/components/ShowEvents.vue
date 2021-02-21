<template>
<!-- HOME -->
  <section class="events container"> 
    <AllEvents
      class="auto-slider "
      v-for="event in displayEvents"
      :key="event.id"
      :event="event"
    />
  </section>
</template>

<script>
import AllEvents from "../components/AllEvents";
export default {
  name: "ShowEvents",
  props: {
    events: Array
  },
  components: {
    AllEvents,
  },
  computed: {
    displayEvents() {
      return this.$store.state.events;
    },
  },
  methods: {
  }
};
</script>

<style>

</style>