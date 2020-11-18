<template>

 <img class="card-img-top" :src="`${apiImg}${url}`" alt="Card image cap">

</template>

<script>
export default {
    data(){
        return{
            apiImg:process.env.VUE_APP_API_IMG
        }
    },
    props:{
        url:String
    },
}
</script>
<style scoped>

</style>