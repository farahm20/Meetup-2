<template>
  <div class="card">
    <div class="aboutEvent" @click="goTo(event.id)">
      <div class="titleandStatus">
        <h1 class="title">{{ event.title }}</h1>
        <h3 class="status">{{ event.status }}</h3>
      </div>

      <img :src="event.image" alt="image" class="image"/>
      <h4 class = "date" >When: {{ event.date }}</h4>
      <h3 class="location" >Where: {{ event.location }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: Object,
  },
  computed: {
  },

  methods: {
    goTo(id) {
      this.$router.push(`/eventInfo/${id}`);
    },
   
  },
};
</script>

<style scoped>
.card {
  margin: 20px auto;
  background: #dadada;
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
button {
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
  background: #3f2b20;
  color: #ffffff;
  transition: 0.5s;
  cursor: pointer;
}
.registerEvent span {
  float: left;
}

.titleandStatus {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>