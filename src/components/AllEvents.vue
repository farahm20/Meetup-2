<template>
  <div class="events">
    <div class="aboutEvent" @click="goTo(event.id)">
      <h1 class="title">{{ event.title }}</h1>
      <h3 class="status">Status: {{ event.status }}</h3>
      <img :src="event.image" alt="image" class="image" />
      <h4 class="date">When: {{ event.date }}</h4>
      <h3 class="location">Where: {{ event.location }}</h3>
      <button class="btn"  @click="goTo(event.id)"> Explore event </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: Object,
  },
  computed: {},

  methods: {
    goTo(id) {
      this.$router.push(`/eventInfo/${id}`);
    },
  },
};
</script>

<style scoped>
.events {
  margin: 20px;
  background: #dadada;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgb(0 0 0 / 5%);
  border-style: solid;
  float: left;
  /* display: flex;
    align-items: flex-end;
    flex-direction: row;
    justify-content: space-between;
    text-align: center; */
  width: 450px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.events img {
  width: 300px;
  height: 160px;
}
button {
  font-family: "PT Serif", serif;
  font-size: 18px;
  text-decoration: none;
  height: 2rem;
  margin: 1rem 0;
  color: white;
  border-radius: 5px;
  background: black;
}
.registerEvent:hover {
  background: #3f2b20;
  color: #ffffff;
  transition: 0.5s;
  cursor: pointer;
}
.registerEvent span {
  float: left;
}
.status {
  font-size: 15px;
  color: #065175;
}

.titleandStatus {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>