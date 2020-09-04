<template>
<v-container>
	<div class="text-center" v-if="getLoading">
		<v-progress-circular
		:size="70"
		:width="7"
		color="red"
		indeterminate
		>
			
		</v-progress-circular>

		<v-row>
			
			<v-col cols="12">

				<h4 class="mt-3">Your videos are loading this may take sometime</h4>
				
			</v-col>
		</v-row>
		
	</div>
</v-container>
</template>

<script>

import {mapGetters} from "vuex"
export default {

  name: 'loading',
  computed:{

  ...mapGetters(["getLoading"])

  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>