/*
var React = require('react');
*/
import React from 'react';

var LoginModal = React.createClass({

	render: function() {
		return (
			<div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" 
					aria-labelledby="loginModalLabel" aria-hidden="true">
				  
				<div className="modal-dialog">

				    <div className="modal-content">
				      
				      <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				        <h4 className="modal-title" id="loginModalLabel">Login</h4>
				      </div> 
				      {/*End of modal-header*/}
				      
				      <div className="modal-body">
				      	<form>
					        <div className="form-group">
			  					<span id="username">User Name</span>
			  					<input type="text" className="form-control" id="username" placeholder="Username" aria-describedby="basic-addon1">
			  					</input>
							</div>
							<div className="form-group">
			  					<span id="password">Password</span>
			  					<input type="password" className="form-control" id="password" placeholder="*******" aria-describedby="basic-addon1">
			  					</input>
							</div>
							<div className="form-group">
			      				<span className="input-group-btn">
			        				<button className="btn btn-default form-control" type="button">Login</button>
			      				</span>
			    			</div>
			    		</form>	
			    		{/*End of Form*/}
				      </div>
				      {/*End of modal-body*/}
				      <div className="modal-footer">
				        <button type="button" className="btn btn-warning" data-dismiss="modal">Sign in with Facebook</button>
				        <button type="button" className="btn btn-primary">Sign in with Google</button>
				      </div>
				      {/*End of modal-footer*/}
				   </div>
				   {/*End of modal-content*/}
				</div>
				{/*End of modal-dialog*/}
			</div>
		);
	}

});

module.exports = LoginModal;