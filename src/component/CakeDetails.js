import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import { useDispatch } from "react-redux"

function CakeDetails(props) {
	var params = useParams();
	var [cakeData, setCakeDetails] = useState([]);
	var [isloading, setLoading]    = useState(true);
	var dispatch = useDispatch()
	useEffect(() => {
		axios({
			url : process.env.REACT_APP_BASE_URL+'/cake/'+params.cakeid,
			method : 'get',
			data : JSON}
		).then((response) => {
			//console.log(response.data.data);
			setCakeDetails(response.data.data);
			setLoading(false);
		}, (error) => {
			setLoading(false);
		}); 
	}, []);

	let addToCart = () => {
		axios({
			url : process.env.REACT_APP_BASE_URL+'/addcaketocart',
			method : 'post',
			headers:{
				authtoken : localStorage.getItem('userAccessToken')
			},
			data : {'cakeid' : params.cakeid, 'name': cakeData.name, 'image' : cakeData.image, 'price' : cakeData.price, 'weight': cakeData.weight }
			}
		).then((response) => {
			//console.log(response.data.data);
			if(response.data.data) {
				alert("Cake added into the cart")
				dispatch({
					type:"ADDTOCART",
					payload : {
						cart : response.data.data
					}
				});
			}
			setLoading(false);
		}, (error) => {
			setLoading(false);
		});
	}
		
	var isDataAvailble = cakeData ? true : false;
	return (
		<>
		{isloading && <h1 className="text-center m-5">Loading.....</h1>}
		{isDataAvailble &&  <h1 className="text-center">Cake Details for { params.cakeid}</h1>	}
			{isDataAvailble && 
				<div className="container">
				<div className="row">
				<div className="col-md-6">	
					<p> Name : {cakeData.name} </p> 	
					<p> Price : {cakeData.price} </p>	
					<p> Weight : {cakeData.weight} </p>	
					<p> Flavour : {cakeData.flavour} </p>	
					<p> Description : {cakeData.description} </p>	
					<button className="btn btn-info" onClick={addToCart}>Add To Cart </button>	
				</div>
				<div className="col-md-6">	
					<img style={{height: "15rem" }} src={cakeData.image ? cakeData.image : "No_picture_available.png"} className="card-img-top" alt="" />
				</div>
			</div>
			</div> }
			{!isDataAvailble && <h1 className="text-center m-5">No data found for { params.cakeid}</h1>}
		</>
	)
}

export default CakeDetails;