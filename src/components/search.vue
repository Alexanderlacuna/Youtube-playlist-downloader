<template>

<v-container>
	<v-row class="justify-center mt-3 pa-3" >
		<v-col cols="12" sm="6">
			<v-text-field

			v-model="searchUrl"
			label="Download youtube playlist"
			outlined
			append-icon="mdi-download"

			>
				
			</v-text-field>
		</v-col>
		<v-col v-if="playlistExists" sm="3">
			<v-btn class="success white--text mt-2" @click="handleClick">download playlist</v-btn>
		</v-col>
	</v-row>
</v-container>
</template>

<script>

import { mapActions } from 'vuex'
export default {

  name: 'search',

  methods:{



  ...mapActions(["testAction"]),


  
  async handleClick(){
  // console.log(mapActions.testAction)

  if(this.searchUrl){
  await this.$store.dispatch('getAllItems',this.searchUrl)


  }

  else{
  return
  }
  
  // testAction()


  // getAllItems("https://github.com")
  // console.log("hello")
  }

  },

  data () {
    return {

    searchUrl:"",
    playlistExists:true

    }
  }
}
</script>

<style lang="css" scoped>
</style>