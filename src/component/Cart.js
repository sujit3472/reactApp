import {Link} from "react-router-dom"
import axios from "axios"
import {useEffect,useState} from "react"
import Cake from './cake';
import {withRouter} from "react-router-dom"
import { useDispatch } from "react-redux"
import { connect } from "react-redux"
function Cart(props) {
	//var [cartData, setCartData] = useState([]);
	var dispatch = useDispatch();
	
	useEffect(() => {
		axios({
			url:process.env.REACT_APP_BASE_URL+'/cakecart',
			method:"post",
			data:JSON,
		}).then((response)=>{
			// console.log(response.data.data);
			if(response.data.data) {
				dispatch({
					type:"SETCARTDATA",
					payload : {
						cart : response.data.data
					}
				});
				//setCartData(response.data.data)
			}
		},(error)=>{
			console.log(error);
		});
	},[]);

	var isDataAvailable = props.cart && props.cart.length > 0 ? true : false;

	//var isDataAvailable =  false;
		//console.log('props.cart', props.cart);
	return (
		<div className="container">
			<h1>In Cart</h1>	
			<div className="row">
				{isDataAvailable && <div className="col-md-10">
					<div className="row">


						{props.cart.map((each, index) =>  {
							return (<Cake data={each} key={index} index={index} />)
						})}
					
					</div>
				</div> }
				{!isDataAvailable &&  <div className="col-md-10"> <h1 className="text-center">No Data found in Cart</h1></div> }

				<div className="col-md-2">
					<Link to="/checkout" className="btn btn-sm btn-info pull-right">{props.totalPrice }Checkout</Link>
				</div>		
				
			</div>	
		</div>	
		
	)
}


Cart = withRouter(Cart)

Cart = connect(function (state, props) {
	//console.log("state.CartReducer", state.CartReducer.cart.cart)
	
	
   	
	return{
		cart : state.CartReducer.cart,
		totalPrice : state.CartReducer.totalPrice,

	}
})(Cart)

export default Cart