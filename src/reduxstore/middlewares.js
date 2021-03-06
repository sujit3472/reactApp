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
			localStorage.setItem('userEmailId', response.data.email);
			localStorage.setItem('userName', response.data.name);
			// localStorage.userAccessToken = response.data.token;
			if(response.data.message) {
				alert(response.data.message);
				dispatch({
					type : "LOGIN_FAILURE"
				});
			} else {
				dispatch({
					type: "LOGIN",
					payload : {
						token : response.data.token,
						username : response.data.name
					}
				})
				alert("Login successfully");
				dispatch({
					type: "LOGIN_SUCCESS",
					payload : {
						token : response.data.token,
						username : response.data.name
					}
				})

				axios({
					url:process.env.REACT_APP_BASE_URL+'/cakecart',
					method:"post",
					data:JSON,
				}).then((response)=>{
					
					if(response.data.data) {
						dispatch({
							type:"SETCARTDATA",
							payload : {
								cart : response.data.data
							}
						});
					}
				},(error)=>{
					console.log(error);
				});

			}
		}, (error) => {
			// console.log(error);
			dispatch({
				type : "LOGIN_FAILURE"
			});
		});
	}
}