// import cakes from './data';
import Cake from './cake';
import axios from 'axios';
import {useEffect, useState} from "react"

function Cakelist() {
	var [cakes, setCakes] = useState([]);
	
	useEffect(() => {
		axios({method : "get", url : 'http://apibyashu.herokuapp.com/api/allcakes', data:JSON}).then((response) => {
			// console.log();
			setCakes(response.data.data);
			// return false;
		}, (error) => {
			console.log(error);
		})
	  		
	},[]);
	return (
			
		<div className="row">
			{cakes.map((each, index) =>  {
				return (<Cake data={each} key={index} />)
			})}
		</div>
	)
	
}

export default Cakelist;