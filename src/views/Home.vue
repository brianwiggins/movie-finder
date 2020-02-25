<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1>MovieFinder!</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <cars />
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            <create-car />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <car-details />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.home {
  height: 100vh;
  background-image: url("https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
<script>
import Movies from "@/components/Movies";
import MovieDetails from "@/components/MovieDetails";

export default {
  name: "Home",
  components: {
    Movies,
    MovieDetails
  }
};
</script>
