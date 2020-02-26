<template>
  <div class="search-movies">
    <div class="row">
      <div class="col-xs-12 mr-auto">
        <form @submit="getMovies()" style="width:100vw">
          <div class="input-group">
            <input v-model="query" type="search" class="form-control" placeholder="Search" />
            <div class="input-group-append">
              <button type="submit" class="btn btn-warning btn-block">Find Movies</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Search",
  props: [],
  data() {
    return { query: "" };
  },
  methods: {
    getMovies() {
      this.$store.dispatch("getMovies", this.query);
    }
  }
};
</script>