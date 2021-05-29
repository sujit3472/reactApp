import Navbar from './component/Navbar.js';
import Carousel from './component/Carousel.js';
import Signup from './component/signup.js';
var details = {projectname : "React app", username : "Tester"};
function App() {
  	return (
    	<div className="App">
	    	<Navbar details={details} name="Sujit" phone="8308254902"><label>Neo Devs</label></Navbar>
	    	<Carousel></Carousel>
	    	<Signup/>
      	</div>
  	);
}

export default App;
