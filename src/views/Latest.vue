<template>
<div class="styled-div">
    <Title title="NOUVEAUTES" />
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
        this.getLatestMovies(pageNum)
           .then(res => {
             this.movies = res.data.results
      })
    }
    },
    created() {
           this.getLatestMovies(1)
           .then(res => {
             console.log(res.data)
             this.movies = res.data.results
             this.totalPages = res.data.total_pages
           })
            
        },
    components:{
      MovieGrid,
      Pagination,
      Title
    },
    mixins:[ApiMovies]
  }
</script>
<style>

.styled-div{
  background-color: black;
  margin-bottom: -16px;
  padding-bottom: 16px;
}

</style>