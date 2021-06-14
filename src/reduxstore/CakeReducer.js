function CakeReducer(state ={
	imagePath : '',
	cakeadded : false
}, action) {

	switch(action.type) {
		case "IMAGE_UPLOAD_STARTED" : {
			state = { ...state}
			state['isloading'] = true
			return state
		}  

		case "IMAGE_UPLOAD_SUCCESS" : {
			state = {...state}
			console.log('action.payload', action.payload);
			state.imagePath = action.payload.imageUrl
			state['isloading'] = false
			return state 
		}
		case "IMAGE_UPLOAD_FAILURE" : {
			state = { ...state}
			state['isloading'] = false
			return state
		}

		case "ADD_CAKE" : {
			state = { ...state}
			state['isloading'] = true
			return state
		}

		case "ADD_CAKE_SUCCESS" : {
			state = { ...state}
			state['isloading'] = false
			state['cakeadded'] = true
			return state
		} 
		case "ADD_CAKE_FAILURE" : {
			state = { ...state}
			state['isloading'] = false
			state['cakeadded'] = false
			return state
		}
		
		default : return state
	}
}

export default CakeReducer