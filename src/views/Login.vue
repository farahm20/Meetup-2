<template>
  <div class="login">
    <h1>Log in</h1>
    <label class="email">Email address:</label>
    <input type="text" />
    <label class="password">Password:</label>
    <input type="text" />
    <button class="login" @click="sendLogIn()">Log in</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.login {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>