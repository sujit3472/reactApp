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
			//console.log(action.payload.cart);
			state.totalPrice = 0
		   	{state.cart && state.cart.map((item) => { 
		   		//console.log(item.price);
		   		if(item.cakeid == action.payload.cart.cakeid)
		   		{
		   			state.totalPrice +=  ((item.price / item.quantity) * (item.quantity + 1))
		   			item.quantity = (item.quantity + 1)
		   		} else {
		    		state.totalPrice += item.price;
				}
		    });
			}
			//state.totalPrice = state.totalPrice + (action.payload.cart.price * action.payload.cart.quantity);
			// state.cart.push(action.payload.cart)
			
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
			state.cart = [];
			state.totalPrice = 0;
			return state
		}
		case "REMOVECART" : {
			state = {...state}

			{state.cart && state.cart.map((item) => { 
				//console.log(item.price);
				if(item.cakeid == action.payload.cakeid)
				{
					state.totalPrice -=  ((item.price / item.quantity) * (item.quantity - 1))
					item.quantity = (item.quantity - 1)
				} 
		 	});
			}
			return state
		}
		case "REMOVECARTTEM" : {
			state = {...state}
			
			state.totalPrice = 0
		   	{state.cart && state.cart.map((item) => { 
		   		//console.log(item.price);
		   		if(item.cakeid == action.payload.cakeid)
		   		{
		   			state.totalPrice -=  ((item.price / item.quantity) * (item.quantity - 1))
		   			item.quantity = (item.quantity - 1)
		   		} else {
		    		state.totalPrice += item.price;
				}
		    	});
		   	}
			state.cart = state.cart.filter((item) => item.cakeid !== action.payload.cakeid);
			state['cartitemremovesucess'] = true;
			return state
		}
		case "SETCARTDATA" : {
			state = {...state}
			state.totalPrice = 0
			//console.log(action.payload);
			state.cart = []
		   	{action.payload.cart && action.payload.cart.map((item) => { 
		   		//console.log(item.price);
		    	state.totalPrice += item.price;
		    });
			}
			state.cart = action.payload.cart
			return state
		}
		default : return state
	}
}

export default CartReducer