import {useState, useEffect} from "react"
import {Link} from "react-router-dom"

let Navbar = (prop) => {

	var [isloggedin, setUser] = useState()
	useEffect(() => {
	  		setUser(prop.isloggedin)
		},
		[prop.isloggedin],
	);
	


	//let [loginbtn, setLogin] = useState("Login");
	// console.log(prop);
	let searchstring = 'Test';
	let search = (event) => {
		event.preventDefault();
		/*console.log("search here");
		console.log(searchstring);*/
		console.log(searchstring);
		// this.setState({searchstring: searchstring})

	}
	let searchTest = (event) => {
		event.preventDefault();
		searchstring = event.target.value;
		console.log(searchstring);
	}

	let logout = () => {
		// console.log("in logout");
		setUser(false);
		localStorage.clear();
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
			<Link to="/"><button className="navbar-brand" >{prop.details.projectname }</button></Link>
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
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={search}>Search</button>
					{ !isloggedin && <Link to="/signup"><button className="btn btn-outline-success" >Signup</button></Link> } 
					<Link to="/login"><button className="btn btn-outline-success">Login</button></Link>
					{ isloggedin &&  <button className="btn btn-outline-success" onClick={logout}>Logout</button> }
				</form>
			</div>
		</nav>
	);
}

export default Navbar;