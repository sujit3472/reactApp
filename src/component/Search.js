import querystring from "query-string"
import {withRouter} from 'react-router-dom'
import { useState, useEffect} from "react"
import Cake from './cake';

function Search (props) {
	
	var [cakes, setCakes] = useState([]);
	var query = querystring.parse(props.location.search)
	
	useEffect(() => {
		setCakes(props.location.state.data);
	}, [props.location.state.data.length])
	
	var isDataAvailble = cakes.length > 0 ? true : false;
	
    return (
		<>
			
			{isDataAvailble &&  <h1>Search string is : {query.q} </h1>}
			{isDataAvailble && 
				<div className="row">

				{cakes.map((each, index) =>  {
					return (<Cake data={each} key={index} />)
				})}
			
			</div> }

			{!isDataAvailble &&	<h1 className="text-center m-5">No data found for { query.q}</h1>	 }
		</>
	)
}
export default withRouter(Search);