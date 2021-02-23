<template>
  <div class="card" @click="display()">
      <h2>{{ event.title}}</h2>
        <h3>{{ event.status }}</h3>

  </div>
</template>

<script>
export default {
  props: {
    event: Object,
  },
  computed: {
      display(){
        console.log("the event: ",this.event)
        return this.event
      }
  },

  methods: {
   
   
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