import axios from 'axios';
export function loginmiddleware (data) {

	// alert(JSON.stringify(data));
	// alert(process.env.REACT_APP_BASE_URL);
	return function (dispatch) {
		dispatch({
			type : "LOGIN_STARTED"
		})
		axios({
			url : process.env.REACT_APP_BASE_URL+'/login', 
			method : "post", 
			data:data
		}
		).then((response) => {
			
			localStorage.setItem('userAccessToken', response.data.token);
			// localStorage.userAccessToken = response.data.token;
			if(response.data.message) {
				alert(response.data.message);
				dispatch({
					type : "LOGIN_FAILURE"
				});
			} else {
				alert("Login successfully");
				dispatch({
					type: "LOGIN_SUCCESS",
					payload : {
						token : response.data.token,
						username : response.data.name
					}
				})
			}
		}, (error) => {
			// console.log(error);
			dispatch({
				type : "LOGIN_FAILURE"
			});
		});
	}
}