import { call, takeEvery, put, all} from "redux-saga/effects"
import axios from "axios"


function *AddCakeGenrator(action){
	var result = yield axios({
		method: 'post',
		url : process.env.REACT_APP_BASE_URL + '/addcake',
		data:action?.payload || {}
	})  


	if(result.data) {
		yield put({type: 'ADD_CAKE_SUCCESS', payload :  result.data})
	} else {
		yield put({type: 'ADD_CAKE_FAILURE'})
	}
}

function *LoginGenrator(action, props) {
	//var result = yield (call(AddCake, action )) 
	
}

function *AddCakeSaga(action, props) {
	yield takeEvery('ADD_CAKE' , AddCakeGenrator)
}

function *LoginSaga () {
	yield takeEvery('LOGIN', LoginGenrator)
}

export default function *RootSaga() {
	yield all([LoginSaga(), AddCakeSaga()])
}