function CartReducer(state ={
	cart : [],
	totalPrice : 0,
	cartsucess : false,
	cartitemremovesucess : false

}, action) {

	switch(action.type) {
		case "CART_ADD_STARTED" : {
			state = {...state}
			state['isDataloading'] = true
			state['cartsucess']    = false;

			return state
		}
		case "ADDTOCART" : {
			state = {...state}	
			state.cart.push(action.payload)
			state['isDataloading'] = true
			state['cartsucess']    = true
			return state 
		}
		case "CART_ADD_FAIL" : {
			state = {...state}	
			state['isDataloading'] = false
			state['cartsucess']    = false;
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
		case "REMOVECARTTEM" : {
			state = {...state}
			state['cartitemremovesucess'] = true;
			return state
		}
		default : return state
	}
}

export default CartReducer