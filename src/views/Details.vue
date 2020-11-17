<template>
    <div class="row datail-section">

    <div class="col-md-6">
      <Img :url="movie.poster_path" />
    </div>

    <div class="col-md-6">
      <h3 class="my-3">{{movie.title}}</h3>
      
      <ul>
        <li><span class="date-span">{{movie.release_date}}</span></li>
        <li v-for="genre in movie.genres" :key="genre.id">* {{genre.name}}</li>
      </ul>
      <p>{{movie.overview}}</p>
      <Button  :btnFunction="addMovie" btnTitle="Ajouter au panier" classList="bnt-favorite"></Button>      

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
        movie:{},
        isFavorite:false
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
      this.checkIdMovie(this.movie.id)
      .then(res => this.isFavorite = res)

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
ul{
  list-style-type: none;
    display: flex;
}
li{
  margin-right: 10px;
}
.date-span{
  color: gray;

}

</style>