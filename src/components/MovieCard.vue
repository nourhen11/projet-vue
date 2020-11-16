<template>
<router-link :to="`/movie/${id}`" v-if="url"> 
  <img class="card-img-top" :src="`https://image.tmdb.org/t/p/w500/${url}`" alt="Card image cap">
</router-link>
</template>

<script>
export default {
    props:{
        url:String,
        id:Number
    }
    
}
</script>

<style scoped>

</style>