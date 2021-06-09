function AuthReducer(state ={
	isloggedin:localStorage.getItem('userAccessToken')?true:false,
	username:undefined,
	token:localStorage.getItem('userAccessToken')
}, action) {

	switch(action.type) {
		case "LOGIN" : {
			state = {...state}
			state['token'] = action.payload?.token
			state.isloggedin = true
			state.username = action.payload?.username
			// alert(state.token);
			return state 
		}
		case "LOGOUT" : {
			state = {...state}
			localStorage.clear()
			state.isloggedin = false
			state.username = undefined
			//alert("empty token" + state.token);
			return state
		}
		default : return state
	}
}

export default AuthReducer