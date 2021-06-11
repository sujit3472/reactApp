import {Link} from "react-router-dom"
import axios from "axios"
import {useEffect,useState} from "react"
import Cake from './cake';
import {withRouter} from "react-router-dom"
function Cart(props) {
	var [cartData, setCartData] = useState([]);
	
	useEffect(() => {
		axios({
			url:process.env.REACT_APP_BASE_URL+'/cakecart',
			method:"post",
			data:JSON,
		}).then((response)=>{
			// console.log(response.data.data);
			if(response.data.data) {
				setCartData(response.data.data)
			}
		},(error)=>{
			console.log(error);
		});
	},[]);

	var isDataAvailable = cartData.length > 0 ? true : false;
		
	return (
		<div className="container">
			<h1>In Cart</h1>	
			<div className="row">
				{isDataAvailable && <div className="col-md-10">
					<div className="row">

						{cartData.map((each, index) =>  {
							return (<Cake data={each} key={index} />)
						})}
					
					</div>
				</div> }
				{!isDataAvailable &&  <div className="col-md-10"> <h1 className="text-center">No Data found in Cart</h1></div> }

				<div className="col-md-2">
					<Link to="/checkout" className="btn btn-sm btn-info pull-right">Checkout</Link>
				</div>		
				
			</div>	
		</div>	
		
	)
}

export default withRouter(Cart)