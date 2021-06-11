// import cakes from './data';
import Cake from './cake';
import axios from 'axios';
import {useEffect, useState} from "react"

function Cakelist() {
	var [cakes, setCakes] = useState([]);
	var [isloading, setLoading] = useState(true);
	
	useEffect(() => {
		axios({method : "get", url : process.env.REACT_APP_BASE_URL +'/allcakes', data:JSON}).then((response) => {
			// console.log();
			setCakes(response.data.data);
			setLoading(false);
			// return false;
		}, (error) => {
			console.log(error);
			setLoading(false);
		})
	  		
	},[]);
	return (
		
		<div className="row">

			{cakes.map((each, index) =>  {
				return (<Cake data={each} key={index} />)
			})}
		{isloading && <h1 className="text-center m-5">Loading.....</h1>}
		</div>
	)
	
}

export default Cakelist;