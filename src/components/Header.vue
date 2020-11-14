<template>
   <div id="nav">
      <router-link to="/">home</router-link> |
       <router-link to="/search">Recherche</router-link> |
       <router-link to="/latest">Les nouveautés</router-link> |
       <router-link to="/upcoming">les films à venir</router-link> |
       <router-link to="/favorite">wishlists</router-link> 
    </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>