import {Component} from "react";
import {useState} from "react";
import axios from 'axios';
import { connect } from "react-redux"
class Login extends Component {

	constructor (props) {
		// console.log(props);
		super(props);
		this.state = {
			email: '',
			password: '',
			error_msg: '',
			error_password_msg : ''
		}
			console.log();
	}
	
	validation = () => {
		//console.log(this.state.email);
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var checkEmail =  this.state.email;
		var password = this.state.password;
		if(password === '' || password === 'undefined') {
			this.setState({
		  		error_password_msg : "Please Enter the Password"
		  	});
		} else {
			this.setState({
		  		error_name_msg : ""
		  	});
		}
		//validation for email
		if(checkEmail === '' || checkEmail === 'undefined')
		{
			this.setState({
		  		error_msg : "Please Enter the email Id"
		  	});
		} else {
			if(!regex.test(checkEmail)) {
			  	this.setState({
			  		error_msg : "Invalid Email Id"
			  	});
			} else{
			  
				this.setState({
					error_msg : ""
				});
			}
		}	
		
		//return false;
		if(password !== '' && checkEmail !== '') {
			axios({
				url : process.env.REACT_APP_BASE_URL+'/login', 
				method : "post", 
				data:{'password':password, 'email': checkEmail}}
			).then((response) => {
				// console.log(response.data.token);
				localStorage.setItem('userAccessToken', response.data.token);
				// localStorage.userAccessToken = response.data.token;
				if(response.data.message)
					alert(response.data.message);
				else {
					alert("Login successfully");
					this.props.dispatch({
						type: "LOGIN",
						payload : {
							token : response.data.token,
							username : response.data.name
						}
					})
					this.props.history.push('/');
				}
			}, (error) => {
				console.log(error);

			});
		} 
	}
	verifyEmail = (event) => {
		event.preventDefault();
		this.setState({
			email : event.target.value
		});
	}
	verifyPassword = (event) => {
		event.preventDefault();
		this.setState({
			password : event.target.value
		});
	}

	render () {
		return (
			<div className="container">
				<div className="row m-5">
					<div className="col-md-6">
						<div className="form-group">
							<input className="form-control mr-sm-2" type="text" placeholder="Email" onChange ={this.verifyEmail}/>
							<label>{this.state.error_msg}</label>
							
						</div>	
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<input className="form-control mr-sm-2" type="password" placeholder="Password" onChange ={this.verifyPassword}/>
							<label>{this.state.error_password_msg}</label>
							
						</div>	
					</div>
					<div className="col-xs-12 col-sm-12 col-md-12 text-center">
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.validation}>Submit</button>
					</div>
				</div>
			</div>
		)
	}
}


export default connect()(Login)