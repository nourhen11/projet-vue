<template>
<div  class="styled-div">
    <Title title="FAVORIS" />
    <Button  :btnFunction="clearFavorites" btnTitle="Vider Favoris" classList="bnt-favorite"></Button>      
    <MovieGrid :movies="movies"></MovieGrid>
     
</div>
</template>
<script>
import Favorite from '../mixins/Vaforite'
import MovieGrid from '../components/MovieGrid'
import Title from '../components/TitlePage'
import Button from '../components/Button'
  export default {
    data(){
      return{
        movies:[]
      }
    },
    methods:{
      clearFavorites(){
        this.clearFavorites()
        this.movies=this.getFavorites()

      },
      removeFavorite(id){
        this.removeItemCart(id);
        this.cardArray=this.getCart();
      }
    },
    created(){
      this.movies=this.getFavorites()
    },
    components:{MovieGrid,Title,Button},
    mixins:[Favorite]
  }
</script>