<template>
  <div id="app">
    <header>
      <Navigation />
    </header>
    <router-view :events="events" />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  data: () => ({
    events: {},
  }),
  components: {
    Navigation,
  },
  beforeMount() {
    let promise = new Promise((resolve) => {
      resolve(this.$store.dispatch("getAllEvents"));
    });
    promise.then(() => {
      this.events = this.$store.state.events;
    });
  },
  methods: {
    getImgURL() {
      return "src/assets/logo.png";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
header {
  background-color: white;
  background-image: url("./assets/meetupbg.jpg");
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
  height: 450px;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>