import React, {Suspense, useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './component/Navbar.js';
import Signup from './component/signup.js';
import Home from './component/Home.js';
import Pagenotfound from './component/pagenotfound.js'
import Login from './component/Login.js'
import Search from './component/Search.js'
import CakeDetails from './component/CakeDetails.js'
// import Cart from './component/Cart.js'
import Checkout from './component/Checkout.js'
import Orders from './component/Orders.js'
import axios from 'axios';


function App() {
	axios.interceptors.request.use((request)=>{
		request.headers['authtoken'] = localStorage.userAccessToken
		return request
	})
	var [login, setLogin] = useState(false)
	var Cart = React.lazy(() => import('./component/Cart.js'));
	Cart = <Suspense fallback={ <div> Loading..... </div>}><Cart></Cart></Suspense>
	
	{/*var myphone = () => {
		setLogin(true);
		
	}

	var [likes, setLikes] 	    = useState(0);
	var [dislikes, setDislikes] = useState(0);
	var [maxdislike, setMaxlikes]  = useState(0);

	useEffect(() => {
		//alert("view render")
	}, [maxdislike])*/}
	var details = {projectname : "React app", username : "Tester"};
	// console.log(localStorage.getItem('userAccessToken'));
		
	useEffect(() => {
		if(localStorage.getItem('userAccessToken')) {
			axios({
				method : 'get',
				url : process.env.REACT_APP_BASE_URL + '/getuserdetails',
				headers:{
					authtoken : localStorage.getItem('userAccessToken')
				}
			}).then((response) =>  {
				if(response.data.data.token) {
					console.log("token valid");
					setLogin(true);
				} 
				else {
					setLogin(false);	
				} 
			}, (error) => {

			}) 
		} 

	}, []);
	
  	return (
    	<div className="App">

    		<Router>
    		<Navbar details={details} name="Sujit" phone="8308254902" isloggedin={login}><label>Neo Devs</label></Navbar>
	    	
	    	<Switch>
		    	<Route exact path="/"><Home/></Route> 
		    	<Route exact path="/signup" component={Signup}></Route>
		    	<Route exact path="/login" component={Login}></Route>
		    	<Route exact path="/search" component={Search}></Route>
		    	<Route exact path="/cake/:cakeid" component={CakeDetails}></Route> 
		    	<Route exact path="/cart/" >{Cart}</Route> 
		    	<Route path="/checkout"><Checkout/></Route> 
		    	<Route exact path="/orders" component={Orders}></Route> 
		    	<Route exact path="/*" component={Pagenotfound}></Route>
			</Switch>
	    	</Router>
	    	

	    	{/*<Signup calllme={myphone}  /> */}
		</div>
  	);
}

export default App;
