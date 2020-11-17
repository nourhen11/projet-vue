<template>
  <div class="styled-div">
    <Title title="Recherche" subTitle="Movies"/>
    <input class="form-control mr-sm-2" type="text"  v-model='query'  @keyup='getResults' placeholder="Search" aria-label="Search">
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
    name:'Search',
    data(){
      return{
        query:'',
        movies:[],
        totalPages:0

      }
    },
    methods:{
      getResults(){
        this.getSearchMovies(this.query)
        .then(res =>{
             this.movies = res.data.results
             this.totalPages = res.data.total_pages
        })
      }
    },
    components:{
      MovieGrid,
      Pagination,
      Title
    },
    mixins:[ApiMovies]
  
  }
</script>