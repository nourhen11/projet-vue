<template>
    <div class="row datail-section">

    <div class="col-md-6">
      <Img :url="movie.poster_path" />
    </div>

    <div class="col-md-6">
      <h3 class="my-3">{{movie.title}}</h3>
      <span>{{movie.release_date}}</span>
      <div v-for="genre in movie.genres" :key="genre.id">
        <span>{{genre.name}}</span>
      </div>
      <p>{{movie.overview}}</p>
      <Button  :btnFunction="addMovie()" btnTitle="Ajouter au panier"></Button>      
      <i class="far fa-heart"></i>

    </div>

  </div>
  <!-- /.row -->

</template>
<script>
import ApiMovies from "@/mixins/ApiMovies";
import Favorite from "../mixins/Vaforite"
import Img from '../components/Img';
import Button from '../components/Button'
  export default {
    data(){
      return{
        movie:{}
      }
    }
    ,
    methods:{
      addMovie(){
        this.addToFavorite({id:this.movie.id,url:this.movie.poster_path})
      }
    },
    created(){
      this.getDetailsMovie(this.$route.params.id)
      .then(res=>{this.movie=res})

    },
    mixins:[ApiMovies,Favorite],
    components:{
      Img,
      Button
    }

  }
</script>
<style scoped>
.datail-section{
  background-color: black;
  color: white;
  padding: 60px;
}
img{
      height: 447px;
}
</style>