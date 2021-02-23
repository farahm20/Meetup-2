<template>
  <section>
    <h3>{{comments.name}}</h3>
    <h4>{{comments.comment}}</h4>
  </section>
</template>

<script>
export default {
  props: {
    review: Object
  },
  computed: {
    comments() {
      let comment = {
        name: this.review.name,
        email: this.review.email,
        comment: this.review.comment
      }
      return comment
    }
  }
}
</script>

<style>

</style>