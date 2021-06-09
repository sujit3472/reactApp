import {createStore, combineReducers} from "redux"
import AuthReducer from "./AuthReducer"
import CartReducer from "./CartReducer"

var reducer = combineReducers({AuthReducer, CartReducer})
let store   = createStore(reducer)

export default store

// alert("in store" + JSON.stringify(store.getState()))