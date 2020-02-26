<template>
  <div class="home container-fluid">
    <div class="row welcome">
      <div class="col-12 text-center">
        <h1>MovieFinder!</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <search />
      </div>
      <div class="col">
        <div class="row">
          <div class="col-4">
            <movies />
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <movie-details />
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
.welcome {
  background-color: black;
  color: white;
}
</style>
<script>
import Movies from "@/components/Movies";
import MovieDetails from "@/components/MovieDetails";
import Search from "@/components/Search";

export default {
  name: "Home",
  components: {
    Search,
    Movies,
    MovieDetails
  }
};
</script>
