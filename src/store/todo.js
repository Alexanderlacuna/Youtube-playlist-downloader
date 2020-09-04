
import axios from "axios"
const state={
	items:[],
	isLoading:false

}



const actions={


	testAction(){
		console.log("gello")
	},

	async getAllItems({commit},payload){


		let url="http://localhost:5000/playlist"
		console.log(url)


		commit("SETLOADING")



		let response=await axios.post(url,{
			url:payload
		})

		commit("SETLOADING")
		// console.log(response)

		let {videos}=response.data
		console.log(videos)

		commit("ADDITEMS",videos)

		// axios.get(url)


		try {

			

			// console.log(response)

			
		} catch(e) {
			// statements
			console.log(e);
		}
		


		
		

	}

}

const mutations={

	ADDITEMS:(state,payload)=>state.items=payload,
	SETLOADING:state=>state.isLoading=!state.isLoading

}

const getters={

	getItems:(state)=>state.items,
	getLoading:(state)=>state.isLoading

}
export default{
	state,
	actions,
	mutations,
	getters
}