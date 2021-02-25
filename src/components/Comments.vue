<template>
  <section class="comments">
    <h3>{{ comments.name }}</h3>
    <h4>Says: {{ comments.comment }}</h4>

  </section>
</template>

<script>
export default {
  props: {
    review: Object,
  },
  computed: {
    comments() {
      let comment = {
        name: this.review.name,
        email: this.review.email,
        comment: this.review.comment,
      };
      return comment;
    },
  },
};
</script>

<style>
.comments {
  background: #dadada;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgb(0 0 0 / 5%);
  border: 1px solid black;
  color: black;
  display: flex;
  flex-direction: column;
  text-align: justify;
}
</style>