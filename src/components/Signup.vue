<template>
  <div class="card">
    <div v-show="event.status === 'finished'" class="reviewBox">
      <h2>Review for "{{ event.title }}"</h2>
      <span></span>
      <input type="text" placeholder="name" v-model="inputText.name" />
      <input type="text" placeholder="email" v-model="inputText.email" />
      <textarea
        id=""
        name=""
        rows="40"
        cols="100"
        v-model="inputText.comment"
      ></textarea>
      <button class="sendReview" @click="sendReview()">Add review</button>
      <p>
        Take a look at what others thought about this event below...
      </p>
    </div>

    <div v-show="event.status !== 'finished'">
      <h2>Find it interesting. Join the Meetup!</h2>
      <input type="text" placeholder="name" v-model="inputText.name" />
      <input type="text" placeholder="email" v-model="inputText.email" />
      <button class="sendUser" @click="sendUser()">Signup</button>
      <h2 v-if="showConfirmation" class="confirmation">
       Great. You are now registered for this event.
      </h2>
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
      showConfirmation:false,
    };
  },
  methods: {
    sendReview() {
      if (this.inputText.name >= 0) {
        alert("Name field cannot be left empty");
      } else if (this.inputText.email >= 0) {
        alert("Email field cen not be left empty");
      } else if (this.inputText.comment >= 0) {
        alert("Your opinion matters, please leave a comment.");
      } else {
        let newReview = this.event.reviews;
        newReview.push(this.inputText);
        this.$store.dispatch("addReviewForEvent", this.event);
         this.clearInput();
      }
    },
    sendUser() {
        console.log("inside send user form")
      if (this.inputText.name >= 0) {
        alert("Name field cannot be left empty");
      } else if (this.inputText.email >= 0) {
        alert("Email field cen not be left empty");
      } else {
        console.log("Login user form.");
        let newUser = this.event.users;
      console.log("User.", newUser);
     newUser.push(this.inputText);
        this.$store.dispatch("addUserForEvent", this.event);
        this.showConfirmation = true; 
        this.clearInput();
      }
    },
    clearInput() {
        let newInputText = {
            name: "",
            email: "",
            comment: "",
        };
        this.inputText = newInputText;
        return this.inputText;
    }
  },
  computed: {},
};
</script>

<style scoped>
.card {
  margin: 20px auto;
  background: #dadada;
 padding: 10px 3px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgb(0 0 0 / 5%);
  display: flex;
 
  text-align: left;
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
label {
    color: black;
}
p {
    font-size: 20px;
    color: black;
}

h2 {
    font-size: 20px;
}
</style>