import axios from "axios";

export function cartremovemitemiddleware (data) {
	
	return function (dispatch) {
		dispatch({
			type : "CART_ADD_STARTED"
		})
		axios({
			url : process.env.REACT_APP_BASE_URL+'/removecakefromcart',
			method : 'post',
			data : {'cakeid' : data.cakeid}
			}
		).then((response) => {
			if(response.data === 'Session Expired') {
				alert(response.data)
				dispatch({
					type : "CART_ADD_FAIL"
				});
			}
			console.log('in cart remove middleware',response.data);
			if(response.data.message) {
				alert("Cake removed  from cart")
				dispatch({
					type:"REMOVECARTTEM",
					payload : {
						cart : response.data.data
					}
				});
			}
		}, (error) => {
			
			dispatch({
				type : "CART_ADD_FAIL"
			});
		});
	}
}
