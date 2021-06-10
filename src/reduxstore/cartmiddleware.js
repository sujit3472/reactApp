import axios from "axios";

export function cartmiddleware (data) {
	
	return function (dispatch) {
		dispatch({
			type : "CART_ADD_STARTED"
		})
		axios({
			url : process.env.REACT_APP_BASE_URL+'/addcaketocart',
			method : 'post',
			headers:{
				authtoken : localStorage.getItem('userAccessToken')
			},
			data : {'cakeid' : data.cakeid, 'name': data.name, 'image' : data.image, 'price' : data.price, 'weight': data.weight }
			}
		).then((response) => {
			if(response.data == 'Session Expired') {
				alert(response.data)
				dispatch({
					type : "CART_ADD_FAIL"
				});
			}
			if(response.data.data) {
				alert("Cake added into the cart")
				dispatch({
					type:"ADDTOCART",
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
