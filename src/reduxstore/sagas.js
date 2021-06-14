import { call, takeEvery, put, all} from "redux-saga/effects"
import axios from "axios"


function *LoginGenrator(action, props) {

}

function *LoginSaga () {
	yield takeEvery('LOGIN', LoginGenrator)
}

export default function *RootSaga() {
	yield all([LoginSaga()])
}