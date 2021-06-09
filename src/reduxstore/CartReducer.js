function CartReducer(state ={
	cart : [],
	totalPrice : 0

}, action) {

	switch(action.type) {
		case "ADDTOCART" : {
			state = {...state}	
				
			state.cart.push(action.payload)
			//console.log("in cart red state", state);	
			return state 
		}
		case "EMPTYCART" : {
			state = {...state}
			return state
		}
		case "REMOVECART" : {
			state = {...state}
			return state
		}
		default : return state
	}
}

export default CartReducer