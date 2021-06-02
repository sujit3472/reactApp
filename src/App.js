import Navbar from './component/Navbar.js';
import Carousel from './component/Carousel.js';
import Signup from './component/signup.js';
import Cake from './component/cake.js';
import Cakelist from './component/cakelist.js';
import {useState, useEffect} from "react"




function App() {
	var [login, setLogin] = useState(false)
	var myphone = () => {
		setLogin(true);
		
	}

	var [likes, setLikes] 	    = useState(0);
	var [dislikes, setDislikes] = useState(0);
	var [maxdislike, setMaxlikes]  = useState(0);

	useEffect(() => {
		alert("view render")
	}, [maxdislike])
	var details = {projectname : "React app", username : "Tester"};

	var Product = {
		name : "IPHONe12", price: 10, image: 'data:image/png;base64,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'
	};
	var Product1 = {
		name : "IPHONe11", price: 10, image: '', discount : "10%"
	}
  	return (
    	<div className="App">
	    	<Navbar details={details} name="Sujit" phone="8308254902" isloggedin={login}><label>Neo Devs</label></Navbar>
	    	{likes}<button className="btn btn-info" onClick={()=>{setLikes(likes+1)}}>Like</button>
	    	<button className="btn btn-warning" onClick={()=>{setDislikes(dislikes+1); if(dislikes <= 5) { setMaxlikes(maxdislike+1);}}}>Dis Like</button>{ dislikes}
	    	
	    	<Carousel></Carousel>

	    	<Signup calllme={myphone}  />

	    	<div className="row">
		    	<Cake data={Product}  key="123"/>
		    	<Cake data={Product1} key="125" />
	    	</div>
	    	<Cakelist />
	    </div>
  	);
}

export default App;
