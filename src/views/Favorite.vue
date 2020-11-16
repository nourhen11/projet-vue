<template>
<div>
      <Title title="FAVORIS" />
     <MovieGrid :movies="movies"></MovieGrid>
</div>
</template>
<script>
import Favorite from '../mixins/Vaforite'
import MovieGrid from '../components/MovieGrid'
import Title from '../components/TitlePage'
  export default {
    data(){
      return{
        movies:[]
      }
    },
    created(){
      this.movies=this.getFavorites()
    },
    components:{MovieGrid,Title},
    mixins:[Favorite]
  }
</script>