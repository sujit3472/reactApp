import {cartmiddleware} from "../reduxstore/cartmiddleware"
import {cartremovemiddleware} from "../reduxstore/cartremovemiddleware"
import {cartremovemitemiddleware} from "../reduxstore/cartremovemitemiddleware"
import {Link} from "react-router-dom"
import { useDispatch } from "react-redux"
import {useState} from "react"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"


function Cake(props) {
	
	var [cakeQty, setCakeQty] = useState(props.data.quantity);
	var dispatch = useDispatch();

	let increaseQty = (event) => {
		event.preventDefault();
		dispatch(cartmiddleware(props.data));
		setCakeQty(cakeQty + 1)			
		
	}

	let decreaseQty = (event) => {
		event.preventDefault();
		if(cakeQty === 1 )
			alert("You can not decrease the qty either you can remove the cake from cart")
		else {
			dispatch(cartremovemiddleware(props.data))
			setCakeQty(cakeQty - 1)
		}
	}
	let removeItem = (event) => {
		event.preventDefault();
		dispatch(cartremovemitemiddleware(props.data))
		setCakeQty(0)
	}

	if(props.data) {
		
		return (
			<>
			<div className="card m-2" style={{width: "18rem" }}>
				<Link to={"/cake/"+props.data.cakeid}><img style={{height: "15rem" }} src={props.data.image ? props.data.image : "No_picture_available.png"} className="card-img-top" alt="" /> </Link>
				<div className="card-body">
					<h5 className="card-title">{props.data.name } 
						
					</h5>
					
						<p> Price : {props.data.price}</p>
						{props.data.quantity ? <p> quantity :  {cakeQty }</p> : '' }
					
					{props.data.quantity && <div className="row"> 	
						<button className="btn btn-info btn-sm m-1" onClick={increaseQty}>+</button> 
						<input className="form-control form-control-sm col-2 m-2" type="text" value={cakeQty} disabled  />
						<button className="btn btn-warning btn-sm m-1" onClick={decreaseQty }>-</button> 

						<button className="btn btn-sm btn-danger fa-fa-trash" onClick={removeItem }>
							Remove
						</button> 
					</div>}
				</div>
			</div>
			</>
		)	
	} else {
		return null;
	}
	
}

Cake = withRouter(Cake)

Cake = connect(function (state, props) {
	// alert(JSON.stringify(props))
		//console.log("in connect props", props);
		//console.log("in connect state", state.CartReducer.cartitemremovesucess);
	if(state.CartReducer?.cartitemremovesucess) {
		state.CartReducer.cartitemremovesucess = false;
		state.CartReducer.isDataloading = false;
			console.log("props.history", props.history);	
		// props.history.push('/cart')
	
	} else {
		return {
			isDataloading: state.CartReducer?.isDataloading
		}
	}
})(Cake)

export default Cake