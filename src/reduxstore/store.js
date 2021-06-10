import {createStore, combineReducers, applyMiddleware} from "redux"
import AuthReducer from "./AuthReducer"
import CartReducer from "./CartReducer"
import thunk from "redux-thunk";

let middle = store=>next=>action=> {
	// alert("In middle ware" + JSON.stringify(store.getState()));
	var today = new Date();   
		console.log("action for " + action.type + " at " + today.toLocaleTimeString());
	next(action)
}  

var reducer = combineReducers({AuthReducer, CartReducer})
let store   = createStore(reducer, applyMiddleware(middle, thunk))

export default store

// alert("in store" + JSON.stringify(store.getState()))