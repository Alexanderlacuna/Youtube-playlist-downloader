<template>
<v-container>

<v-row  class="grey black--text">
	<v-col >
		<h3>image</h3>
	</v-col>
	<v-col>
		<h3>title</h3>
	</v-col>

	<v-col>
		<h3>length in minutes</h3>
	</v-col>
	<v-col >
		<h3>views</h3>
	</v-col>
</v-row>
<div v-if="playlistExists">
<v-row  v-for="item in getItems" :key="item.img" class="pa-2 mt-3" >
	<v-col >
		<!-- {{item.img}} -->
		<img :src="item.img" width="200px" style="border-radius: 10px;" alt="">
	</v-col>
	<v-col>
		{{item.title}}
	</v-col>
	<v-col>
		{{item.length}}
	</v-col>
	<v-col>
		{{item.views}}
	</v-col>
	<v-col>
		<v-btn class="success white--text">Download</v-btn>
	</v-col>



	
</v-row>
</div>

<div v-else>
	<v-row class="pa-4 ma-4">
		No video found
		
	</v-row>

	
</div>

	
</v-container>
</template>

<script>

import {mapGetters,mapActions} from "vuex"
export default {

  name: 'showVideos',

  methods:{

  ...mapActions("getAllItems"),




  },

  async mounted(){

  // await this.$store.dispatch('getAllItems','https://www.youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ')
  
  },

  computed:{
  ...mapGetters(['getItems'])







  },

  data () {
    return {

    items:[
    {
     img:"img1",
     title:"this is the title",
     link:"this is link",
     download:"this is the download"
    },
    {
     img:"img2",
     title:"this another title",
     link:"another link",
     download:"this is the download"
    },
    {
    img:"img3",
    title:"This is the titles",
    link:"this is the link",
    download:"download"


    }
    ],
    playlistExists:true

    }
  }
}
</script>

<style lang="css" scoped>
</style>