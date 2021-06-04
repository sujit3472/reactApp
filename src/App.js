import {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './component/Navbar.js';
import Signup from './component/signup.js';
import Home from './component/Home.js';
import Pagenotfound from './component/pagenotfound.js'
import Login from './component/Login.js'
import Search from './component/Search.js'
import CakeDetails from './component/CakeDetails.js'


function App() {
	var [login, setLogin] = useState(false)
	/*var myphone = () => {
		setLogin(true);
		
	}

	var [likes, setLikes] 	    = useState(0);
	var [dislikes, setDislikes] = useState(0);
	var [maxdislike, setMaxlikes]  = useState(0);

	useEffect(() => {
		//alert("view render")
	}, [maxdislike])*/
	var details = {projectname : "React app", username : "Tester"};

	
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
		    	<Route exact path="/*" component={Pagenotfound}></Route>
			</Switch>
	    	</Router>
	    	

	    	{/*<Signup calllme={myphone}  /> */}
		</div>
  	);
}

export default App;
