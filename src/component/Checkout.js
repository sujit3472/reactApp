import {Link, Route, Redirect} from "react-router-dom"
import {useRouteMatch, withRouter} from "react-router-dom"
import Summary from './Summary.js'
import Address from './Address.js'
import Confirm from './Confirm.js'


function Checkout(props) {
	var {path} = useRouteMatch();
	// alert(JSON.stringify(path));
	return(
		<>
		<div className="container">
			<h1>In Checkout</h1>	
			<div className="row">

				<div className="col-md-6">
					<Link to={`${path}/summary`}><h2>Summary</h2></Link>
					<Link to={`${path}/address`}><h2>Place Order</h2></Link>
					<Link to={`${path}/confirm`}><h2>Confirm Details</h2></Link>
				</div>	

				<div className="col-md-6">
					<Route exact path={path}><Redirect to={`${path}/summary`}></Redirect></Route>
					<Route exact path={`${path}/summary`}  component={Summary}></Route>
					<Route exact path={`${path}/address`} component={Address}></Route>
					<Route exact path={`${path}/confirm`} component={Confirm}></Route>
				</div>	
			</div>	
		</div>
		</>
	)
}
Checkout = withRouter(Checkout)
export default Checkout