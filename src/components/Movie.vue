<template>
  <div class="row mb-2">
    <div class="col-4">
      <div class="card movie" @click="setActive" style="width:20rem">
        <div class="card-body">
          <h5 class="card-title">{{movieData.title}}</h5>
          <p class="card-text">(Released on: {{movieData.release_date}})</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: ["movieData", "movieIndex"],
  methods: {
    setActive() {
      this.$store.dispatch("setActiveMovie", this.movieData);
    }
  }
};
</script>
<style scoped>
.movie {
  cursor: zoom-in;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
}
</style>