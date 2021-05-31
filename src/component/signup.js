import {Component} from "react";
class Login extends Component {

	constructor (props) {
		super(props);
		this.state = {
			likes: 0,
			name : '',
			email: '',
			error_msg: '',
			error_name_msg: '',
		}
	}
	like = () => {
		this.setState({
			likes : this.state.likes + 1 
		});
	}
	validation = () => {
		//console.log(this.state.email);
		var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		var checkEmail =  this.state.email;
		var userName = this.state.name;
		//validation for user name
		if(userName == '' || userName == 'undefined') {
			this.setState({
		  		error_name_msg : "Please Enter the Name"
		  	});
		} else {
			this.setState({
		  		error_name_msg : ""
		  	});
		}

		//validation for email
		if(checkEmail == '' || checkEmail == 'undefined')
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
		
	}
	verifyEmail = (event) => {
		event.preventDefault();
		this.setState({
			email : event.target.value
		});
	}
	verifyName = (event) => {
		event.preventDefault();
		this.setState({
			name : event.target.value
		});
	}
	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="form-group"> 
							<p>This is my POST </p>

							<label>{this.state.likes}</label>
							<button onClick={this.like} className="btn btn-sm btn-info">Like</button>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-6">
						<div className="form-group">
							<input className="form-control mr-sm-2" type="text" placeholder="Name" onChange ={this.verifyName}/>
							<label>{this.state.error_name_msg}</label>
						</div>	
					</div>
					<div className="col-md-6">
						<div className="form-group">
							<input className="form-control mr-sm-2" type="text" placeholder="Email" onChange ={this.verifyEmail}/>
							<label>{this.state.error_msg}</label>
							
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

export default Login;