<template>
  <div>
    <nav>
      <ul class="menu">
        <div class="left">
          <li class="logo"><a href="#" @click="goTo('/LogoInfo')"> Let's Meet! </a></li>
        </div>
        <div class="right">
          <a href="#" class="meetups" @click="goTo('/events')"> Meetups</a>
          <a href="#" class="about" @click="goTo('/')"> About</a>
          <a href="#" class="login" @click="goTo('/login')"> Login</a>
         
        </div>
      </ul>
    </nav>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
     
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

/* .mainImage {
  background-color: white;
  background-image: url("../assets/meetupbg.jpg");
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover;
  height: 450px;
} */

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