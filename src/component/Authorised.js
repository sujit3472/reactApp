import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React, {Suspense, useState, useEffect} from "react";
import { withRouter} from "react-router-dom"
import { connect } from "react-redux"
import Checkout from './Checkout.js';
import Orders from './Orders.js';
import AddCake from './AddCake.js';
import Pagenotfound from './pagenotfound.js';

function Authorised(props) {
	
	var Cart = React.lazy(() => import('./Cart.js'));
	Cart = <Suspense fallback={ <div> Loading..... </div>}><Cart></Cart></Suspense>
	return (
		<>
		{ props.isUserEmail && <Route exact path="/cart/" >{Cart}</Route> } 
		{ props.isUserEmail && <Route path="/checkout"><Checkout/></Route> } 
		{ props.isUserEmail && <Route exact path="/orders" component={Orders}></Route> } 
		{ props.isUserEmail && <Route exact path="/admin/addcake" component={AddCake}></Route> } 

		{ !props.isUserEmail && <Route exact path="/*" component={Pagenotfound}></Route> }
		</> 
	)
}

Authorised = withRouter(Authorised)
export default connect((state) =>{
	let isUserEmail = false;
	if(localStorage.getItem('userEmailId') == 'sujit3472shinde@gmail.com' || localStorage.getItem('userEmailId') == 'ashu.lekhi0540@gmail.com') {
		isUserEmail = true
	}
	return {
		isUserEmail : isUserEmail
	}
})(Authorised)