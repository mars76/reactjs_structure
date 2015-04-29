import React from 'react';

export default class Subscribe extends React.Component {
	render() {
		return (
			<ul className="nav navbar-nav navbar-right">
				<li>
					<a href="#subscribeModal" data-toggle="modal" className="navbar-right">Subscribe</a>
				</li>
			</ul>	
		);
	}
}

/*
var React = require('react');

var Subscribe = React.createClass({

	render: function() {
		return (
			<ul className="nav navbar-nav navbar-right">
				<li>
					<a href="#subscribeModal" data-toggle="modal" className="navbar-right">Subscribe</a>
				</li>
			</ul>	
		);
	}

});

module.exports = Subscribe;
*/