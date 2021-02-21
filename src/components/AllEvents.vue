<template>
  <div class="card">
    <div class="aboutEvent" @click="goTo(event.id)">
      <h3>{{ event.title }}</h3>

      <img :src="event.image" alt="image" />
      <h4>When: {{ event.date }}</h4>
      <h3>Where: {{ event.location }}</h3>
    </div>
    <div>
      <button class="registerEvent" @click="addToProfile(event.id)">
        Sign up
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: Object,
  },

  computed: {
    user() {
      return this.$store.state.userService.user;
    },
  },

  methods: {
    goTo(id) {
      this.$router.push(`/eventInfo/${id}`);
    },
    addToProfile(eventId) {
      if (Object.keys(this.user).length == 0) {
        this.$confirm({
          auth: false,
          message:
            "You must Log in to Sign up for the event.Do you want to Sign in?",
          button: {
            no: "Cancel",
            yes: "Yes",
          },
          callback: (confirm) => {
            if (confirm == true) {
              this.$store.state.userService.selectedEventId = eventId;
              this.$router.push(`/profile`);
            }
          },
        });
      } else {
        this.$store.state.userService.selectedEventId = eventId;
        let filteredEvents = this.user.events.filter((events) => {
          return eventId == events;
        });
        if (filteredEvents.length == 0) {
          this.$store.dispatch("addEventToUser", eventId);
          this.$router.push(`/profile`);
        } else {
          this.$confirm({
            auth: false,
            message: "Event is already signed up for the user",
            button: {
              no: "Ok",
            },
          });
        }
      }
    },
  },
};
</script>

<style scoped>
.card {
  margin: 20px auto;
  background: #cacac4;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgb(0 0 0 / 5%);
  border-left: 15px solid black;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
}
.card img {
  width: 200px;
  height: 160px;
}
.registerEvent {
  font-family: "PT Serif", serif;
  font-size: 20px;
  text-decoration: none;
  height: 2rem;
  margin: 1rem 0;
  color: white;
  border-radius: 5px;
  background: black;
}
.registerEvent:hover {
  background: #3d2f27;
  color: #ffffff;
  transition: 0.7s;
  cursor: pointer;
}
.registerEvent span {
  float: left;
}
</style>