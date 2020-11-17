<template>
<div>
<!--Navbar-->
<nav class="navbar navbar-expand-lg navbar-dark indigo mb-4">

  <!-- Navbar brand -->
  <a class="navbar-brand" href="#">Navbar</a>

  <!-- Collapsible content -->
  <div class="collapse navbar-collapse" id="navbarSupportedContent">

    <form class="form-inline ml-auto">
      <div class="md-form my-0">
        <input class="form-control" type="text" placeholder="Search" aria-label="Search" v-model='query'  @keyup='getResult(query)'>
      </div>
      <button href="#!" class="btn btn-outline-white btn-md my-0 ml-sm-2" type="submit">Search</button>
    </form>

  </div>
  <!-- Collapsible content -->

</nav>
  <div >

 <div class="d-flex justify-content-center">  <input class="form-control mr-sm-2" type="text"  v-model='query'  @keyup='getResult(query)' placeholder="Search" aria-label="Search">
  </div>
 
     <div class="movie-container">
     
      <div class="movie" v-for='result in results' :key='result.id'>
      <img v-bind:src="'http://image.tmdb.org/t/p/w500/' +    result.poster_path" class="img">
       <div class="movie-info">
       <h3>{{result.title}}</h3>
        <span>{{result.vote_average}} </span>
       </div>
       <div class="movie-over">
       <h2>Overwiew:</h2>
           <p>{{result.overview}}</p>
         </div>
  
      </div>
     </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
 name: 'search',
 data () {
  return {
   query: '',
   results: ''
  }
 },
 methods: {
  getResult(query) {
   axios.get('https://api.themoviedb.org/3/search/movie?api_key=1ac015c7464cb72bb59f1f1cc068a7c2&query=' + query).then(response => { this.results = response.data.results })
     console.log(this.results)
   }
 }
}
</script>
<style lang="scss" scoped>
.movie-container{
  display: flex;
flex-wrap: wrap;
}
.movie{

border-radius: 3px;
box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
overflow: hidden;
position: relative;
color: white; 
margin: 1rem;
width: 300px;
}
.movie-info h3{
  margin: 0;
}
.movie-info{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}
.movie-over {
    background-color: #fff;
    border-top-left-radius:3px;
    border-top-right-radius:3px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    color: #22254b;
    padding: 1rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    max-height: 100%;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }
  .movie:hover .movie-over{
    transform: translateX(0%);
  }
  .search{
    background-color: transparent;
border: 2px solid #22254b;
border-radius: 50px;
color: white;
font-family: inherit;
font-size:1.2rem;
padding: 0.5rem 1.5rem;
  }
.input{
  background-color: #373b69;
display: flex;
padding:1rem;
justify-content:flex-end;
}

.img{
  max-width : 100%;
}
.logo{
  float: left;
  display: inline-block;
 width: 13%;
  margin-right: 25px ;
}
.rightMenu{
  float:right;
  display: inline-block;
  color:black;
}
</style>