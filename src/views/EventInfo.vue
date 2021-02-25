<template>
  <main id="eventInfo">
    <section class="meetupInfo">
      <h4 class="status">
        Status: {{ event.status || "No status avaialble" }}
      </h4>
      <h1 class="title">{{ event.title || "No title avaialble" }}</h1>
      <img :src="event.image || 'No image avaialble'" alt="image" />
      <h3 class="date">When: {{ event.date || "No date avaialble" }}</h3>
      <h4 class="location">
        Where: {{ event.location || "No location avaialble" }}
      </h4>
      <p class="description">
        {{ event.description || "No description avaialble" }}
      </p>
    </section>
    <Signup :event="event" />

    <div class="comments">
      <Comments
        v-for="review of event.reviews"
        :key="review.name"
        :review="review"
      />
    </div>
  </main>
</template>

<script>
import Signup from "./../components/Signup";
import Comments from "./../components/Comments";
export default {
  props: {
    events: Array,
  },
  components: {
    Signup,
    Comments,
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
        date: this.selectedEvent
          ? this.selectedEvent.date
          : "No date available",
        location: this.selectedEvent
          ? this.selectedEvent.location
          : "No location available",
        status: this.selectedEvent
          ? this.selectedEvent.status
          : "No status available",
        reviews: this.selectedEvent
          ? this.selectedEvent.reviews
          : "No reviews available",
        description: this.selectedEvent
          ? this.selectedEvent.description
          : "No description available",
      };
      console.log(eventInfo);
      return eventInfo;
    },
    selectedEvent() {
      if (this.$route !== undefined) {
        let data = this.events.find(
          (event) => event.id == this.$route.params.id
        );
        return data;
      } else {
        return {}
        // return this.eventInfo;
      }
    },
  },
};
</script>
<style>
.eventInfo {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.meetupInfo {
  margin-top: 15px;
  padding: 0;
  border-style: solid;
  background-color: #c9c9c750;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.description {
  padding: 30px 80px;
  text-align: justify;
}
</style>