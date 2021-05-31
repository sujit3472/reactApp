
function Cake(props) {
	//console.log(props);
	
	if(props.data) {
		//console.log("props.data", props.data);	

		return (
			<div className="card m-2" style={{width: "18rem" }}>
				{props.data.image  ?  <img style={{height: "15rem" }} src={props.data.image} className="card-img-top" alt="" /> : <img style={{height: "15rem" }} src="No_picture_available.png" className="card-img-top" alt="No Image" /> }
				<div className="card-body">
				<h5 className="card-title">{props.data.name }</h5>
				<p> {props.data.price}</p>
				
				</div>
			</div>
		)	
	} else {
		return null;
	}
	
}

export default Cake;