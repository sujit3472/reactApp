import {Link} from "react-router-dom"
import {axios} from "axios"
import {useEffect,useState} from "react"
function Cart(props) {
	var [cart,setCart] = useState([]);
	/*useEffect(() => {
		axios({
			url:process.env.REACT_APP_BASE_URL+'/cakecart',
			method:"post",
			data:JSON,
			header:{}
		}).then((response)=>{
			console.log(response);
		},(error)=>{
			console.log(error);
		});
	},[]);*/

		
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