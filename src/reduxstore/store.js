import {createStore, combineReducers, applyMiddleware} from "redux"
import AuthReducer from "./AuthReducer"
import CartReducer from "./CartReducer"
import thunk from "redux-thunk";
import createSaga from "redux-saga"
import RootSaga from "./sagas"

let middle = store=>next=>action=> {
	// alert("In middle ware" + JSON.stringify(store.getState()));
	var today = new Date();   
		//console.log("action for " + action.type + " at " + today.toLocaleTimeString());
	next(action)
}  

var reducer = combineReducers({AuthReducer, CartReducer})
let store   = createStore(reducer, applyMiddleware(middle, thunk))



/*store.subscribe(() => {
    if (store.getState().action.indexOf('SETCARTDATA') !== -1) {
        console.log('subscribed for messanger actions', store.getState());
    }
});*/

export default store

// alert("in store" + JSON.stringify(store.getState()))