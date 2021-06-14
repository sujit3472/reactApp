import axios from "axios";

export default function cartimageemiddleware (data) {
	
	return function (dispatch) {
		dispatch({
			type : "IMAGE_UPLOAD_STARTED"
		})
		axios({
			url : process.env.REACT_APP_BASE_URL+'/upload',
			headers : {
				"Content-Type" : "multipart/form-data",
				"Accept": "application/json",
				"type": "formData",
			},
			method : 'post',
			data : data

			}
		).then((response) => {
			
			if(response.data.imageUrl)
			{
				dispatch({
					type : "IMAGE_UPLOAD_SUCCESS",
					payload : {
						imageUrl : response.data.imageUrl
					}
				});
				alert("Image uploaded successfully")
			}

			console.log('In Image upload',response.data.imageUrl);
			
		}, (error) => {
			console.log('error', error);
			dispatch({
				type : "IMAGE_UPLOAD_FAILURE"
			});
		});
	}
}

