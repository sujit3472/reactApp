// import cakes from './data';
import Cake from './cake';
import axios from 'axios';
import {useEffect, useState} from "react"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

function Cakelist(props) {
	var [cakes, setCakes] 		= useState([]);
	var [cakeList, setCakeList] = useState([]);
	var [isloading, setLoading] = useState(true);
	
	useEffect(() => {
		if(props.cakeList.length <= 0) {
			axios({method : "get", url : process.env.REACT_APP_BASE_URL +'/allcakes', data:JSON}).then((response) => {
				
				props.dispatch({
					type : 'HOME_PAGE_CAKE',
					payload : {
						cakeData : response.data.data
					}
				});
				
				setLoading(false);
			}, (error) => {
				setLoading(false);
			})
		} else {
			setLoading(false);
		}
	  		
	},[]);

	let sortCakeData = (event) => {
		event.preventDefault();
		setLoading(true);
		
		if(event.target.value == 'a-z') {
			setCakeList([]);
			props.cakeList.sort( compare );
		} else {
			setCakeList([]);
			props.cakeList.sort( compareRev );
		}
	}

	function compare( a, b ) {
	  	if ( a.name < b.name ){
	    	return -1;
	  	}
	  	if ( a.name > b.name ){
	    	return 1;
	  	}
	  	setLoading(false);
	  	return 0;
	}

	function compareRev( a, b ) {
	  	if ( a.name > b.name ){
	    	return -1;
	  	}
	  	if ( a.name < b.name ){
	    	return 1;
	  	}
	  	setLoading(false);
	  	return 0;
	}
	
	return (
		<>
			<div className="row">
				<div className="col-md-6">
				</div>
				<div className="col-md-6">
					<select className="form-control col-3 pull-right" onChange={sortCakeData}>
				        <option value="">Sort By</option>
				        <option value="a-z">A to Z</option>
				        <option value="z-a">Z to A</option>
				    </select>
				</div>
				
			</div>
			<div className="row">
				{isloading && <h1 className="text-center m-5">Loading.....</h1>}

				{props.cakeList.map((each, index) =>  {
					return (<Cake data={each} key={index} />)
				})}
			</div>
		</>
	)
	
}



Cakelist = withRouter(Cakelist)
export default connect((state, props) =>{
	
	return {
		cakeList : state.CakeReducer.cakeList,
		
	}
})(Cakelist)