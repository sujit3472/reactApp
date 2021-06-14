import axios from "axios";

export function cartremovemitemiddleware (data) {
	
	return function (dispatch) {
		//alert( JSON.stringify(data.index));
		dispatch({
			type : "CART_ADD_STARTED"
		})
		axios({
			url : process.env.REACT_APP_BASE_URL+'/removeonecakefromcart',
			method : 'post',
			data : {'cakeid' : data.data.cakeid}
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
						cakeindex : data.index,
						cakeid : data.data.cakeid
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
