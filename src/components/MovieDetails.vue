<template>
  <div class="row mb-2">
    <div class="col-6">
      <img :src="'https://image.tmdb.org/t/p/w500/'+details.poster_path" />
      <h3>{{details.title}}</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "MovieDetails",
  props: ["movieData"],
  computed: {
    details() {
      return this.$store.state.activeMovie;
    }
  }
};
</script>