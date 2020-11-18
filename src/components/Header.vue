<template>
 <section class="header-section">
       <div class="head">
       <Logo />
         <div class="nav-div">
                 <router-link to="/search" class="nav-link">Recherche</router-link>
                <router-link to="/latest" class="nav-link">Nouveautés</router-link>
                <router-link to="/upcoming" class="nav-link">les films à venir</router-link>
                <router-link to="/favorite" class="nav-link">wishlists</router-link>
         </div>
       </div>
</section>
  
</template>
<script>
import Logo from '../components/Logo'
    export default {
    name: 'Header',
    components:{
      Logo,
    },
    methods:{
      logout(){
        localStorage.removeItem('accessToken')
        this.$router.push({ name: 'Login'})
      }
    },
    computed: {
    }
  }
</script>
<style scoped>

.header-section{
  background-color:black;
  border-bottom: 0.6rem solid #111;
  
  
}


 .header-section .head{
      display: flex;
      align-items: center;
      width: 100%;
  }
.login-link{
    color: #fff;
    text-decoration: none;
    background-color: #e50914;
    padding: 8px 18px;
    border-radius: 5px;
    margin-right: 10px;
}
.nav-div{
   width: 53%;
    display: flex;
}
.nav-div a{
text-decoration: none;
color: white;

}
</style>