<template>
<div class="styled-div">
  <Title title="Les Films A venir" />
   <MovieGrid :movies="movies"></MovieGrid>
   <Pagination :pgFunction="clickCallback" :totalPages="totalPages"></Pagination>
</div>
</template>
<script>
import ApiMovies from "@/mixins/ApiMovies";
import MovieGrid from "../components/MovieGrid"
import Pagination from "../components/Pagination"
import Title from "../components/TitlePage"

    export default {
    data(){
      return{
        movies:[],
        totalPages:0
     }
    },
     methods:{
      clickCallback(pageNum) {
        this.getUpcomingMovies(pageNum)
           .then(res => {
             this.movies = res.data.results
      })
    }
    },
    created() {
           this.getUpcomingMovies(1)
            .then(res => {
              this.movies = res.data.results
              this.totalPages = res.data.total_pages
              })
            .catch(err => console.log(err));
        },
    components:{
      MovieGrid,
      Pagination,
      Title
    },
    mixins:[ApiMovies]
  }
</script>