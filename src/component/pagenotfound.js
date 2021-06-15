import {Link} from "react-router-dom";
function Pagenotfound() {
	return (
		<>
			<h1 className="text-center m-5 text-info"> Page Not Found</h1>	
			<h6 className="text-center m-5 text-info"> <Link to="/login">Please login</Link></h6>	
		</>
	)
} 
export default Pagenotfound;