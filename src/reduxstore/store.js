import {createStore, combineReducers, applyMiddleware} from "redux"
import AuthReducer from "./AuthReducer"
import CartReducer from "./CartReducer"
import CakeReducer from "./CakeReducer"
import thunk from "redux-thunk";
import createSaga from "redux-saga"
import RootSaga from "./sagas"

let middle = store=>next=>action=> {
	// alert("In middle ware" + JSON.stringify(store.getState()));
	var today = new Date();   
		//console.log("action for " + action.type + " at " + today.toLocaleTimeString());
	next(action)
}  

var sagaMiddleware = createSaga();

var reducer = combineReducers({AuthReducer, CartReducer, CakeReducer})

function saveToLocalStorage(state) {
	
	try {
    	const serialisedState = JSON.stringify(state);
    	localStorage.setItem("persistantState", serialisedState);
  	} catch (e) {
    	console.warn(e);
  	}
}

let store   = createStore(reducer, applyMiddleware(middle, thunk, sagaMiddleware))


sagaMiddleware.run(RootSaga);

store.subscribe(() => saveToLocalStorage(store.getState()));

/*store.subscribe(() => {
    if (store.getState().action.indexOf('SETCARTDATA') !== -1) {
        console.log('subscribed for messanger actions', store.getState());
    }
});*/

export default store

// alert("in store" + JSON.stringify(store.getState()))