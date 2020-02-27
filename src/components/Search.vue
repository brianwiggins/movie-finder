<template>
  <div class="search-movies">
    <div class="row mb-5">
      <div class="col-xs-12">
        <form @submit="getMovies" style="width:100vw">
          <div class="input-group">
            <input v-model="query" type="search" class="form-control" placeholder="Search" />
            <div class="input-group-append">
              <button
                type="submit"
                style="width:36vw; border-radius:0px 10px 10px 0px"
                class="btn btn-warning btn-block"
              >Find Movies</button>
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