<template>
 <nav class="navbar navbar-expand-lg navbar-dark">
  <Logo/>
  

  <div class="nav-div">
    <ul class="navbar-nav mr-auto">
       <li class="nav-item active">
        <router-link to="/latest" class="nav-link">Nouveautés</router-link>
      </li>
       <li class="nav-item active">
        <router-link to="/upcoming" class="nav-link">les films à venir</router-link>
      </li>
      <li class="nav-item active">
        <router-link to="/favorite" class="nav-link">wishlists | {{FavoriteCount}}</router-link>
      </li>
      
     
    </ul>

  </div>
</nav>
</template>
<script>
import Logo from '../components/Logo'
  export default {
    name: 'Header',
    components:{
      Logo
    },
    computed: {

       FavoriteCount() {
                return this.$store.getters.getTotalFavorite
            }
    }
  }
</script>
<style scoped>
nav{
  background-color: #000000e0;

}
.nav-div{
  position: absolute;
    right: 41px;
}

</style>