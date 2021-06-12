import { connect } from "react-redux"
import {withRouter, Link} from "react-router-dom"
function Summary(props) {
	console.log(props.totalPrice);
	return (
		<>
			<h1>In Summary Page</h1>
			<div className="row">
				<div className="order-summary__sections">
				   <div className="order-summary__section order-summary__section--product-list order-summary__section--has-scroll">
				      	<div className="order-summary__section__content">
				        	<table className="product-table table">
					            
					            <thead className="product-table__header thead-light">
					               <tr>
					                  <th scope="col"><span className="visually-hidden">Product image</span></th>
					                  <th scope="col"><span className="visually-hidden">Description</span></th>
					                  <th scope="col"><span className="visually-hidden">Quantity</span></th>
					                  <th scope="col"><span className="visually-hidden">Price</span></th>
					               </tr>
					            </thead>
					            <tbody data-order-summary-section="line-items">
					            	{props.cart &&  props.cart.map((each, index) =>  {
					            		return (
	            			               	<tr key={index}>
	            								<td>
	            									<Link to={"/cake/"+each.cakeid}><img style={{height: "5rem", width: "5rem" }} src={each.image ? each.image : "No_picture_available.png"} className="card-img-top" alt="" /> </Link>
	            								</td>
	            								<td> 
	            									{ each.name}
	            								</td>
	            								<td>
	            									{ each.quantity}	
	            								</td>
	            								<td>
	            									{ each.price}	
	            								</td>
	            			               	</tr>
					            		)
					            	})}
					            </tbody>
					            <tfoot>
									<tr>
									  	<th >
									    	Total Price
									  	</th>
									  	<td >
									    	{ props.totalPrice &&  props.totalPrice}
									    </td>
									</tr>
								</tfoot>
				         	</table>
				      	</div>
				   </div>
				</div>
			</div>
		</>
	)
}


Summary = withRouter(Summary)

Summary = connect(function (state, props) {
	return{
		cart : state.CartReducer.cart,
		totalPrice : state.CartReducer.totalPrice
	}
})(Summary)

export default Summary