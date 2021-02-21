<template>
  <section class = "about">
    <h1> How we arrange these meet ups </h1>
    <p class="bold">
      <b>
        Meet people from all aroud the world and talk about what you love. 
      </b>
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, iusto.
      Veritatis, perspiciatis blanditiis reiciendis impedit asperiores illum
      soluta quod cupiditate doloremque deserunt, distinctio numquam quas
      obcaecati hic reprehenderit quae iusto.
    </p>
    <footer>
      <img src="https://st2.depositphotos.com/5011263/11857/v/950/depositphotos_118579882-stock-illustration-happy-businessman-or-manager-it.jpg" alt="" />
      <h3 class="name">Jon Doe</h3>
      <p class="role">Manager</p>
    </footer>
  </section>
</template>

<script>
export default {
  name: "AboutText",
  components: {
  },
};
</script>

<style scoped>
.bold {
  -webkit-text-stroke: medium;
}

p {
  text-align: justify;
}

/*aligning footer in th middle*/
footer {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  width: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 25%;
}

h1,
h3,
p {
  color: black;
}

h3 {
  margin: 0;
  padding: 0;
  font-size: 1.4rem;
}

.about {
  padding: 20px;
}

.role {
  margin: 0;
  padding: 0;
  font-size: 0.8rem;
}
</style>