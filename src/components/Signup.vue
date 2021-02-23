<template>
  <div class="card" >
    <div v-show="event.status === 'finished'" class="reviewBox">
      <input type="text" placeholder="name" v-model="inputText.name" />
      <input type="text" placeholder="email" v-model="inputText.email" />
      <label for="review">Review for {{ event.title }}:</label>
      <textarea
        id="reviewbox"
        name="reviewbox"
        rows="40"
        cols="100"
        v-model="inputText.comment"
      ></textarea>
      <button class="sendReview" @click="sendReview()"> Add review </button>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: Object,
  },
  data() {
      return {
          inputText: {
              name: "",
              email: "",
              comment: "",
          },
      }
  },
  methods: {
      sendReview() {
          this.$store.dispatch("addReviewForEvent", this.inputText);
          console.log("Review info :", this.inputText);
      }
  },
  computed: {
    
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