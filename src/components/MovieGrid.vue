<template>
<section class="row">
     <div class="card" v-for="movie in movies" :key="movie.id">
      <MovieCard :url="movie.poster_path" :id="movie.id"></MovieCard>
    </div>
</section>
</template>

<script>
import MovieCard from "../components/MovieCard"
export default {
    props:{
        movies:Array
    },
    components:{
        MovieCard
    }
    
}
</script>

<style scoped>
section{
  justify-content: center;
 background-color: black;
}

.card{
  margin: 20px;
  width: 15rem;
  height: 22rem;
  border:none;
}
</style>