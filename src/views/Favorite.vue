<template>
<div  class="styled-div">
    <Title title="FAVORIS" />
    <button @click="clearFavorites" v-if="movies"> <font-awesome-icon :icon="['fas', 'ban']"/>  </button>
    <MovieGrid :movies="movies" v-if="movies"></MovieGrid>
    <p v-else>Vous n'avez ajouté aucun film à votre liste de favoris.</p>
</div>
</template>
<script>
import Favorite from '../mixins/Vaforite'
import MovieGrid from '../components/MovieGrid'
import Title from '../components/TitlePage'
  export default {
    name:'Favorite',
    data(){
      return{
        movies:[],
      }
    },
    methods:{
      clearFavorites(){
        localStorage.removeItem('wishlist');
        this.movies=[]
     },
      removeFavorite(id){
        this.removeItemCart(id);
        this.cardArray=this.getCart();
      }
    },
    created(){
      this.movies=this.getFavorites()
    },
    components:{MovieGrid,Title},
    mixins:[Favorite]
  }
</script>
<style scoped>
button{
  background-color: transparent;
  color: red;
  margin-left: 553px;
  margin-top: 10px;
}
p{
  text-align: center;
  color: white;
}
</style>