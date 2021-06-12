import {Component} from "react";
import { connect } from "react-redux"
import {withRouter, Link} from "react-router-dom"
import  axios from "axios";
class Address extends Component { 

	constructor (props) {
		console.log('props.totalPrice', props.totalPrice);
		super(props);
		this.state = {
			name : '',
			address: '',
			phone : '',
			pincode: '',
			city : '',
			total_price: props.totalPrice,
		}
	}

	verifyName = (event) => {
		event.preventDefault();
		this.setState({
			name : event.target.value
		});
	}

	verifyAddress = (event) => {
		event.preventDefault();
		this.setState({
			address : event.target.value
		});
	}

	verifyPhone = (event) => {
		event.preventDefault();
		this.setState({
			phone : event.target.value
		});
	}

	verifyPincode = (event) => {
		event.preventDefault();
		this.setState({
			pincode : event.target.value
		});
	}

	verifyCity = (event) => {
		event.preventDefault();
		this.setState({
			city : event.target.value
		});
	}
	verifyTotalPrice = (event) => {
		event.preventDefault();
		this.setState({
			total_price : event.target.value
		});
	}

	placeOrder = (event) => {
		event.preventDefault();
		if(this.state.name === '' || this.state.name === 'undefined' || this.state.address === '' || this.state.address === 'undefined' || this.state.city  === '' || this.state.city === 'undefined' || this.state.pincode === '' || this.state.pincode === 'undefined' || this.state.phone === '' || this.state.phone === 'undefined') {
			alert("Please enter all form details")
		}
		//alert(this.state.total_price);
		if(this.state.name !== '' || this.state.name !== 'undefined' || this.state.address !== '' || this.state.address !== 'undefined' || this.state.city  !== '' || this.state.city !== 'undefined' || this.state.pincode !== '' || this.state.pincode !== 'undefined' || this.state.phone !== '' || this.state.phone !== 'undefined') {
			
			axios({
				url : process.env.REACT_APP_BASE_URL+'/addCakeOrder', 
				method : "post", 
				data:{'name': this.state.name, price: this.state.total_price, address: this.state.address, 
				city : this.state.city, pincode : this.state.pincode, phone : this.state.phone, cakes: this.props.cart}
			}).then((response) => {
				if(response.data.messageg === 'order placed')
				{
					alert("Order Placed suucessfully")
					this.props.history.push('/orders');
				}
				//alert(response.data.message);
			}, (error) => {
				console.log(error);

			});
		}
	}
	render() {
		return (
			<>
			<h1>In Address page</h1>
			<div className="row">
				<div className="col-md-6">
					<div className="form-group">
						<input className="form-control mr-sm-2" type="text" placeholder="Name"  onChange={this.verifyName}/>
						
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<input className="form-control mr-sm-2" type="text" placeholder="Address"  onChange={this.verifyAddress} />
						
					</div>
				</div>

				<div className="col-md-6">
					<div className="form-group">
						<input className="form-control mr-sm-2" type="text" placeholder="Phone"  onChange={this.verifyPhone}/>
						
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<input className="form-control mr-sm-2" type="text" placeholder="City"  onChange={this.verifyCity} />
						
					</div>
				</div>

				<div className="col-md-6">
					<div className="form-group">
						<input className="form-control mr-sm-2" type="text" placeholder="Pincode"  onChange={this.verifyPincode} />
						
					</div>
				</div>
				<div className="col-md-6">
					<div className="form-group">
						<input className="form-control mr-sm-2" type="text" placeholder="Total Price"  onChange={this.verifyTotalPrice} value={this.props.totalPrice} disabled />
					</div>
				</div>
				<div className="col-md-6">
					<button className="btn btn-info" onClick={this.placeOrder}>Place Order </button>
				</div>
			</div>
			</>
		)
	}
}

Address = withRouter(Address)

Address = connect(function (state, props) {
	return{
		cart : state.CartReducer.cart,
		totalPrice : state.CartReducer.totalPrice
	}
})(Address)


export default Address;