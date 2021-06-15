// import cakes from './data';
import Cake from './cake';
import axios from 'axios';
import {useEffect, useState} from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

function Cakelist(props) {
	var [cakes, setCakes] = useState([]);
	var [isloading, setLoading] = useState(true);
	
		useEffect(() => {
			if(props.cakeList.length <= 0) {
				axios({method : "get", url : process.env.REACT_APP_BASE_URL +'/allcakes', data:JSON}).then((response) => {
					// console.log();
					props.dispatch({
						type : 'HOME_PAGE_CAKE',
						payload : {
							cakeData : response.data.data
						}
					});
					// setCakes(response.data.data);
					setLoading(false);
					// return false;
				}, (error) => {
					console.log(error);
					setLoading(false);
				})
			} else {
				setLoading(false);
			}
		  		
		},[]);
	
	return (
		
		<div className="row">

			{props.cakeList.map((each, index) =>  {
				return (<Cake data={each} key={index} />)
			})}
		{isloading && <h1 className="text-center m-5">Loading.....</h1>}
		</div>
	)
	
}



Cakelist = withRouter(Cakelist)
export default connect((state, props) =>{
	let cakeList = []; 
	return {
		cakeList : state.CakeReducer.cakeList,
		
	}
})(Cakelist)