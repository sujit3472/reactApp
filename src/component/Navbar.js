import {useState, useEffect} from "react"
import {Link, withRouter} from "react-router-dom"
import axios from 'axios';
import { connect } from "react-redux"

let Navbar = (prop) => {
	
	// alert("In nav");
	var [isloggedin, setUser] = useState()
	useEffect(() => {
	  		setUser(prop.isloggedin)
		},
		[prop.isloggedin],
	);
	


	//let [loginbtn, setLogin] = useState("Login");
	// console.log(prop);
	let searchstring = '';
	let search = (event) => {
		event.preventDefault();
		//console.log(searchstring);
		// var redirectUrl = ; 
		if(searchstring !== '') {
			axios({
				url : process.env.REACT_APP_BASE_URL+'/searchcakes?q='+searchstring, 
				method : "get", 
				data:JSON}
			).then((response) => {
				
				prop.history.push({
		           pathname: '/search',
		           search: '?q=' + searchstring,
		           state: response.data
		       });
			}, (error) => {
				console.log(error);

			});
			// prop.history.push('/search?q=' + searchstring);
		}

	}
	let searchTest = (event) => {
		event.preventDefault();
		searchstring = event.target.value;
		console.log(searchstring);
	}

	let logout = () => {
		// console.log("in logout");
		setUser(false);
		prop.dispatch({
			type : "LOGOUT",
			payload : {
				token : ''
			}
		})
		// localStorage.clear();
		//prop.isloggedin = false;
		console.log(" In logout",  isloggedin);
	}

	/*let changeButton = (event) => {
		event.preventDefault();
		if(event.target.innerText === "Login")
			setLogin('Logout');
		else 	
			setLogin('Login');
	}*/
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link to="/"><button className="navbar-brand" >{prop.details.projectname } {prop.username }</button></Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
					<Link to="/"><button className="nav-link">Home <span className="sr-only">(current)</span></button></Link>
					</li>
					<li className="nav-item">
					<a className="nav-link" href="#">Welcome {prop.name}</a>
					</li>
					<li className="nav-item">
					<a className="nav-link" href="#">{prop.children}</a>
					</li>
				</ul>
				{/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={changeButton} >{loginbtn}</button>*/}

				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={searchTest}/>
					{searchstring}
					<button className="btn btn-outline-success my-2 my-sm-0 m-2" type="submit" onClick={search}>Search</button>
					{ prop.isloggedin && <Link to="/cart"><button className="btn btn-outline-success m-2"><i className="fa fa-shopping-cart" aria-hidden="true"></i></button></Link>}
					{ prop.isloggedin && <Link to="/orders"><button className="btn btn-outline-success m-2">Orders</button></Link>}
					{ !prop.isloggedin && <Link to="/signup"><button className="btn btn-outline-success m-2" >Signup</button></Link> } 
					{ !prop.isloggedin && <Link to="/login"><button className="btn btn-outline-success m-2">Login</button></Link>}
					{ prop.isloggedin &&  <button className="btn btn-outline-success m-2" onClick={logout}>Logout</button> }
				</form>
			</div>
		</nav>
	);
}

// export default withRouter(Navbar);
function mapStatetoProps(state, prop) {
	return {
		...prop,
		isloggedin : state['isloggedin']

	}
}
Navbar = withRouter(Navbar)
export default connect((state) =>{
	return {

		isloggedin: state.AuthReducer.isloggedin,
		username: state.AuthReducer.username
	}
})(Navbar)