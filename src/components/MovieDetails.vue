<template>
  <div class="movie-details">
    <div v-if="details._id">{{ details }}</div>
  </div>
</template>
<script>
export default {
  name: "MovieDetails",
  computed: {
    details() {
      return this.$store.state.activeMovie;
    }
  }
};
</script>