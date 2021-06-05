import {Link} from "react-router-dom"
function Cart(props) {
	
	return (
		<div className="container">
			<h1>In Cart</h1>	
			<div className="row">
				<Link to="/checkout">Checkout</Link>
				
			</div>	
		</div>	
	)
}

export default Cart