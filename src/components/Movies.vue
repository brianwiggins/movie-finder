<template>
  <div class="movies row">
    <!-- NOTE Props are data passed from parent to child component -->
    <div class="col-4">
      <movie
        v-for="(movieObj, index) in movies"
        :key="movieObj._id"
        :movieData="movieObj"
        :movieIndex="index"
      />
    </div>
  </div>
</template>
<script>
import Movie from "./Movie";
export default {
  name: "Movies",
  mounted() {
    // this.$store.dispatch("getMovies");
  },
  data() {
    return {};
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    }
  },
  components: {
    Movie
  }
};
</script>
