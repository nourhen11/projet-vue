<template>
    <div class="breadcrumb-option">
        <div class="container">
            <div class="row">
                    <div class="col-lg-12 text-center">
                            <div class="breadcrumb__text">
                            <h1>{{title}}</h1>
                            <div class="breadcrumb__links">
                            <router-link to="/home">Accueil</router-link> |
                            <router-link to="" class="active">{{subTitle}}</router-link>
                            </div>
                    </div>
                </div>
        </div>
    </div>
    </div>
</template>
<script>

export default {
    props:{
        title:String,
        subTitle:String,
        url:String
    },
}
</script>

<style scoped>
.breadcrumb-option{
    border-bottom: 0.6rem solid #111;
    height: 142px;
    border-radius: 39px;
}
h1{
     margin-top: 27px;

}
a{
    color: #8a8484;
}


</style>