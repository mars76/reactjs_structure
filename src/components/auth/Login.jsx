import React from 'react';
import ReactAddOns from 'react/addons';
import ReactMixin from 'react-mixin';
import AuthService from '../../services/AuthService';
export default class Login extends React.Component {
	
	constructor() {
    	this.state = {
      		user: '',
      		password: ''
    	};
  	}

    login(e) {
    	e.preventDefault();
    	AuthService.prototype.login(this.state.user, this.state.password)
      	.catch(function(err) {
        	alert("There's an error logging in");
        	console.log("Error logging in", err);
      	});
  	}

	render() {
		return (
			<div className="login jumbotron center-block">
		        <h1>Login</h1>
		        <form role="form">
			        <div className="form-group">
			          <label htmlFor="username">Username</label>
			          <input type="text" valueLink={this.linkState('user')} className="form-control" id="username" placeholder="Username" />
			        </div>
			        <div className="form-group">
			          <label htmlFor="password">Password</label>
			          <input type="password" valueLink={this.linkState('password')} className="form-control" id="password" ref="password" placeholder="Password" />
			        </div>
			        <div className="form-group">
			        	<button type="submit" className="btn btn-default" onClick={this.login.bind(this)}>Submit</button>
			        	&nbsp;&nbsp;
			        	<button type="button" className="btn btn-warning" data-dismiss="modal">Sign in with Facebook</button>
			        	&nbsp;&nbsp;
						<button type="button" className="btn btn-primary">Sign in with Google</button>
					</div>	
				</form>
		    </div>
		);
	}
}

reactMixin(Login.prototype, ReactAddOns.addons.LinkedStateMixin);
