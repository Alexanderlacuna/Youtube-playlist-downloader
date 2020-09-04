<template>
  <v-app >

    <div class="app">

    <v-btn @click="handleClick">
      text
    </v-btn>
  
   <Search/>
   <div>
   <loading/>


     
   </div>
   <showVideos/>


 </div>


   
  
  </v-app>
</template>

<script>
import Search from "@/components/search.vue"
import showVideos from "@/components/showVideos.vue"
export default {
  name: 'App',

  components: {
    Search,
    showVideos
    

    
   
  },
  methods:{
  handleClick(){
    console.log("ew")
  }

  },

  data: () => ({
    //
  }),
};
</script>

<style lang="css" >

.app{
  background: #fff;
  height:100vh;
}

</style>
