//var React = require('react');

import React from 'react';

export default class LoginLink extends React.Component {
	render() {
		return (
			<ul className="nav navbar-nav navbar-right">
					<li><a href="#loginModal" data-toggle="modal">Login</a></li>
			</ul>
		);
	}
}


/*
var Login = React.createClass({

	render: function() {
		return (
			<ul className="nav navbar-nav navbar-right">
					<li><a href="#loginModal" data-toggle="modal">Login</a></li>
			</ul>
		);
	}

});
module.exports = Login;
*/
