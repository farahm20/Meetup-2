<template>
  <div>
    <nav>
      <ul class="menu">
        <div class="left">
          <li class="logo"><a href="#" @click="goTo('/')"> Let's Meet! </a></li>
        </div>
        <div class="right">
          <div
            v-for="item in menuItems"
            :key="item.title"
            @click="goTo(`${item.link}`)"
            class="items">
            {{ item.title }}
          </div>
        </div>
      </ul>
    </nav>
    <div class="mainImage"></div>
    <!-- <div class="navbuttons">
      <button @click="goTo('/signup')" class="explore">Sign Up</button>
      <button @click="goTo('/signin')" class="organize">Sign In</button>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { title: "MeetUps", link: "/events" },
        { title: "About", link: "/" },
        { title: "Profile", link: "/profile" },
        { title: "SignUp", link: "/signup" },
        { title: "SignIn", link: "/signin" },
      ],
    };
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: PT Serif;
  font-style: normal;
  font-size: 20px;
}

nav {
  margin: 0;
  padding: 0;
  top: 0;
  overflow: hidden;
  background-color: black;
  position: fixed;
  width: 100%;
}

.mainImage {
  background-color: white;
  background-image: url("../assets/meetupbg.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  height: 450px;
}

.logoImg {
  overflow: hidden;
}

a {
  color: white;
  text-decoration: none;
  padding: 14px 16px;
}
.menu {
  display: flex;
  justify-content: space-around;
}
.left {
  text-align: left;
  list-style: none;
}

.right {
  display: flex;
  text-align: right;
  list-style: none;
}
.logo {
  cursor: pointer;
  font-size: 25px;
  font-weight: 600;
  padding: 7.5px 10px 7.5px 0;
}
.items {
  padding: 10px;
  color: white;
  cursor: pointer;
}

.menu:hover{
  cursor: pointer;
  color: #ccc;
}

.navbuttons {
    display: flex;
    justify-content: center;
}
.explore {
  margin-right: 5px;
}

.explore, .organize {
  font-size: 20px;
} 
</style>