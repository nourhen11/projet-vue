<template>
  <paginate
    :pageCount="totalPages"
    :clickHandler="pgFunction"
    :prevText="'Précédent'"
    :nextText="'Suivant'"
    :containerClass="'pagination'"
    :page-class="'pageitem'"
    :page-link-class="'pagelink'"
    :prev-link-class="'pagelink'"
    :next-link-class="'pagelink'"
    :active-class="'activeclass'"
    >
    
  </paginate>  
</template>
<script>
export default {
    name:'Pagination',
    props:{
        pgFunction:Function,
        totalPages:Number
    }
}
</script>

<style >

.pagination{
  justify-content: center;
}

.pagelink{
  color:red;
  margin-right: 27px;
}
.pagelink:hover{
  color: white;
}
</style>