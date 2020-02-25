<template>
  <div class="row">
    <div class="car col-12">
      <div class="card">
        <img :src="movieData.imgUrl" class="card-img-top" @click="setActive" />
        <div class="card-body">
          <h5 class="card-title">{{movieData.title}} - {{movieData.year}}</h5>
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
      this.$store.dispatch("setActiveMovie", this.carData);
    }
  }
};
</script>
<style scoped>
.car {
  cursor: zoom-in;
}
</style>