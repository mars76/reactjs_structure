import React from 'react';

export default class SubscribeModal extends React.Component {
	render() {
		return (
			<div className="modal fade" id="subscribeModal" tabIndex="-1" role="dialog" 
					aria-labelledby="subscribeModalLabel" aria-hidden="true">
				  
				<div className="modal-dialog">
				 
				    <div className="modal-content">
				 
				 	    <div className="modal-header">
				        	<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				        	<h4 className="modal-title" id="subscribeModalLabel">Subscribe</h4>
				      	</div> 

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
				  					<span id="password">Reenter Password</span>
				  					<input type="password" className="form-control" id="passwordReenter" placeholder="*******" aria-describedby="basic-addon1">
				  					</input>
								</div>
								<div className="form-group">
				  					<span id="email">Email</span>
				  					<input type="email" className="form-control" id="email" placeholder="user@mail.com" aria-describedby="basic-addon1">
				  					</input>
								</div>
			    			</form>	
				      	</div>


				      	<div className="modal-footer">
				        	<button type="button" className="btn btn-warning" data-dismiss="modal">Subscribe</button>
				      	</div>

				   	</div>

				</div>

			</div>
		);
	}
}

/*
var React = require('react');

var SubscribeModal = React.createClass({

	render: function() {
		return (
			<div className="modal fade" id="subscribeModal" tabIndex="-1" role="dialog" 
					aria-labelledby="subscribeModalLabel" aria-hidden="true">
				  
				<div className="modal-dialog">
				 
				    <div className="modal-content">
				 
				 	    <div className="modal-header">
				        	<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				        	<h4 className="modal-title" id="subscribeModalLabel">Subscribe</h4>
				      	</div> 

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
				  					<span id="password">Reenter Password</span>
				  					<input type="password" className="form-control" id="passwordReenter" placeholder="*******" aria-describedby="basic-addon1">
				  					</input>
								</div>
								<div className="form-group">
				  					<span id="email">Email</span>
				  					<input type="email" className="form-control" id="email" placeholder="user@mail.com" aria-describedby="basic-addon1">
				  					</input>
								</div>
			    			</form>	
				      	</div>


				      	<div className="modal-footer">
				        	<button type="button" className="btn btn-warning" data-dismiss="modal">Subscribe</button>
				      	</div>

				   	</div>

				</div>

			</div>
		);
	}

});

module.exports = SubscribeModal;
*/