<template>
<div class="breadcrumb-option">
<div class="container">
<div class="row">
<div class="col-lg-12 text-center">
<div class="breadcrumb__text">
<h1>{{title}}</h1>
<div class="breadcrumb__links">
<a >Home</a>
<span>About Us</span>
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
        title:String
    },
}
</script>

<style scoped>
section{
    text-align: center;
    height: 116px;
    color: white;
   
	background-color: rgb(68,68,68);
  border: 3px solid red;
}
h1{
    
    padding-top: 30px;

}

</style>