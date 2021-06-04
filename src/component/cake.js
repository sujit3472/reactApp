import {Link} from "react-router-dom"

function Cake(props) {
	//console.log(props);
	
	if(props.data) {
		//console.log("props.data", props.data);	
		return (
			<div className="card m-2" style={{width: "18rem" }}>
				<Link to={"/cake/"+props.data.cakeid}><img style={{height: "15rem" }} src={props.data.image ? props.data.image : "No_picture_available.png"} className="card-img-top" alt="" /> </Link>
				<div className="card-body">
				<h5 className="card-title">{props.data.name }</h5>
				<p> Price : {props.data.price}</p>
				
				</div>
			</div>
		)	
	} else {
		return null;
	}
	
}

export default Cake;