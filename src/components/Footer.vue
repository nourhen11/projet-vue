<template>
 <section class="footer">
  <div>
    <img src="../assets/logo.png">
  </div>
  <div class="one">
      <ul class="items">

            <li><a href="">FAQ</a></li>
            <li><p>Des questions ? Appelez le 0805-220-512</p></li>
            <li><a href="">Relations Investisseurs</a></li>
            <li><a href="">Mentions légales</a></li>
      </ul>

  </div>
  <div class="one">
      <ul class="items">
          <li><a href="">Centre d'aide</a></li>
          <li><p>Des questions ? Appelez le 0805-220-512</p></li>
          <li><a href="">Conditions d'utilisation</a></li>
          <li><a href="">Nous contacter</a></li>
      </ul>

  </div>

</section>
</template>
<script>
  export default {

  }
</script>
<style scoped>
.footer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    background-color: black; 
    border-top: 0.6rem solid #111;

}
.footer .one{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    width:25%;
}
img{
      width: 357px;

}
.footer .one li{
    padding: 7px 0;
}
.footer .one li a{
    color: #ccc;
    text-decoration: none;

}
.footer .one li p{
    color: #ccc;
    text-decoration: none;

}
.footer .one li pa:hover{
    border-bottom:1px solid #ccc ;
    
    }
.footer .one li a:hover{
border-bottom:1px solid #ccc ;

}
</style>