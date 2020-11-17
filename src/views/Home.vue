<template>
 <div class="home-page">
    
     <section class="banner">
      <img src="../assets/back.jpg" class="fit">
       <div class="box">
        <div class="heading">
          <h2>Films, séries TV et bien plus en illimité.</h2>
          <h5>Où que vous soyez. Annulez à tout moment.</h5>
          <p>Prêt à regarder Netflix ? Saisissez votre adresse e-mail 
          pour vous abonner ou réactiver votre abonnement.</p>
        </div>
        <div class="search">
        <input type="text" name="" placeholder="Enter Email">
        <a> Rejoignez la communauté</a>
        </div>
       </div>
</section>
<section class="part1">
<div class="talk">
<h1>Regardez Netflix sur votre TV.</h1>
<p>Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, 
Apple TV, lecteurs Blu-ray et bien plus.</p>
</div>
<div class="img">
<img src="../assets/part1.png">
</div>
</section>
<section class="list">
<h1>Foire aux questions</h1>
<div class="accordion-menu">
  <div class="item" id="item1">
  <a href="#item1" class="title">
  <span>Netflix, qu'est-ce que c'est ?</span>
  <i class="icon"></i>
  </a>
  <p class="text">
  Netflix est un service de streaming qui propose une vaste sélection de séries TV,
   films, animes, documentaires et autres programmes primés sur des milliers d'appareils connectés à Internet.
  </p>
  </div>
   <div class="item" id="item2">
  <a href="#item2" class="title">
  <span>Combien coûte Netflix ??</span>
  <i class="icon"></i>
  </a>
  <p class="text">
  Regardez Netflix sur votre smartphone, tablette, Smart TV, 
  
  ordinateur ou appareil de streaming, le tout pour un tarif mensuel fixe. Les forfaits vont de 7,99 € à 
  15,99 € par mois. Pas de contrat ni de frais supplémentaires.
  </p>
  </div>
    <div class="item" id="item3">
  <a href="#item3" class="title">
  <span>Où puis-je regarder Netflix ?</span>
  <i class="icon"></i>
  </a>
  <p class="text">
Regardez où et quand vous voulez, sur un nombre illimité d'appareils. 
Connectez-vous à votre compte pour regarder Netflix en ligne sur netflix.com depuis votre ordinateur ou tout appareil connecté à Internet avec l'application Netflix, comme les Smart TV, smartphones, tablettes, lecteurs de streaming et consoles de jeu.  </p>
  </div>
    <div class="item" id="item4">
  <a href="#item4" class="title">
  <span>Comment puis-je annuler mon forfait ?</span>
  <i class="icon"></i>
  </a>
  <p class="text">
Netflix offre une grande souplesse. Pas de contrat compliqué. Sans engagement. Deux clics suffisent pour annuler votre compte en ligne. Pas de frais d'annulation : ouvrez ou fermez votre compte à tout moment.  </p>
  </div>
</div>
</section>
<section class="banner2">
<div class="box">
        <div class="heading">
         
          <p>Prêt à regarder Netflix ? Saisissez votre adresse e-mail 
          pour vous abonner ou réactiver votre abonnement.</p>
        </div>
        <div class="search">
        <input type="text" name="" placeholder="Adresse Email">
        <a> Rejoignez la communauté</a>
        </div>
       </div>
</section>

  </div>
</template>
<script>
  export default {

  }
</script>

<style scoped>
.home-page{
background-color: black;
}
*{
    box-sizing: border-box;
  }
.movie-info{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  .movie-info h3 {
    margin: 0;
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
  body{
      background: #000;
  }
 
.banner{
    width: 100%;
    height:100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.banner:before{
    content:'';
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 400px;
    z-index: 1;
    background: linear-gradient(to bottom, #000, transparent);
}
.banner:after{
    content:'';
    position: absolute;
    bottom:0;
    left: 0;
    width: 100%;
    height: 400px;
    z-index: 1;
    background: linear-gradient(to top, #000, transparent);
}
.banner .fit{
    width: 100%;
    height:100%;
    position: absolute;
    top: 0;
    left:0;
    object-fit: cover;
}
.banner .box{
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index:1000;
}
.banner .box .heading{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.banner .box .heading h2{
    font-size: 3.125rem;
    color: #fff;
    letter-spacing: 2px;
    width: 80%;
}
.banner .box .heading h5{
    font-size: 1.625rem;
    color: #fff;
   padding: 1rem 0;
    font-weight: 400;
}
.banner .box .heading p{
    font-size: 1.2rem;
    color: #fff;
    padding: 15px 0;
    padding-bottom: 20px  ;
    font-weight: 500;
}
.banner .box .search{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.banner .box .search input{
    font-size: 16px;
    border: 1px solid #8c8c8c;
    outline: none;
    color: #000;
    border-radius: 2px;
    box-shadow: none;
    padding: 10px 10px 0 0;
    min-width: 450px;
    height: 50px;
    align-items: center;

}
.banner .box .search a{
    text-decoration: none;
    text-decoration: uppercase;
    color: #fff;
    font-weight: 400;
    letter-spacing: 0.1px;
    border-radius: 2px;
    background: #e50914;
    box-shadow: 0 1px 0 rgba(0,0,0,0.45);
    font-size: 1.625rem;
    line-height: 30px;
    min-width: 310px;
    padding: 0 30px;
}
.part1{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2rem 4rem;
    border-bottom: 0.6rem solid #111;
}
.part1 .talk{
    width: 40%
}
.part1 .talk h1{
    font-size: 3.3rem;
    letter-spacing: 3px;
    padding-bottom: 10px;
    color: #fff;
}
.part1 .talk p{
    font-size: 1.7rem;
 
    color: #fff;
}
.part1 .img{
    width: 45%;
}
.part1 .img img{
    width: 100%;
}
.list{
    width: 60%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    margin:auto;

}
.list h1{
    color: #fff;
    font-size: 3rem;
    padding: 3rem 0 4rem 0;
}
.title{
    background: #303030;
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    font-size: 1.7rem;
    font-weight: 400;
    text-decoration: none;
    
}
.icon{
    width: 20px;
    position: relative;

}
.icon::before, .icon::after{
    content:"";
    position: absolute;
    width: 20px;
    height: 3px;
    background-color: #fff;
    top:-1.5px;
}
.icon::after{
    transform: rotate(90deg);
    transition: 0.5s linear;
}
.text {
    background: #303030;
    line-height: 35px;
    margin:3px 0;
    color: #fff;
    font-size: 1.7rem;
    font-weight: 400;
    height: 0;
    opacity: 0;
    font-size: 1.7rem;
    font-weight: 400;
}
.item:target .text{
    opacity: 1;
    height: auto;
    padding: 20px 35px;
    margin: 0;
    border-top: 2px solid #000;
    margin-bottom: 6px;
}
.item:target .icon::after{
    transform: rotateY(90deg);
}
.banner2{
    border-bottom: 0.6rem solid #111;
}
.banner2 .box{
   margin: 4rem 0;
}
.banner2 .box .heading{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.banner2 .box .heading p{
    font-size: 1.2rem;
    color: #fff;
    padding: 15px 0;
    padding-bottom: 20px  ;
    font-weight: 500;
}
.banner2 .box .search{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.banner2 .box .search input{
    font-size: 16px;
    border: 1px solid #8c8c8c;
    outline: none;
    color: #000;
    border-radius: 2px;
    box-shadow: none;
    padding: 10px 10px 0 0;
    min-width: 450px;
    height: 50px;
    align-items: center;

}
.banner2 .box .search a{
    text-decoration: none;
    text-decoration: uppercase;
    color: #fff;
    font-weight: 400;
    letter-spacing: 0.1px;
    border-radius: 2px;
    background: #e50914;
    box-shadow: 0 1px 0 rgba(0,0,0,0.45);
    font-size: 1.625rem;
    line-height: 60px;
    min-width: 310px;
    padding: 0 30px;
}

</style>