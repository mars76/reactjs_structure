/*var React = require('react');*/
import React from 'react';

export default class NavAction extends React.Component {
	render() {
		return (
			<ul className={"nav navbar-nav "+this.props.actionData.placement}>
               <li>
	               	<a 
	               		href={this.props.actionData.modal ? this.props.actionData.modal.modalId : "#"} 
	               		data-toggle={this.props.actionData.modal ? "modal" : ""}
	               		onClick={this.actionClick}
	               	>
	               		{this.props.actionData.name}
	               	</a>
               	</li>
            </ul>
		);
	}

	getNavClassNames(){
		var classNames ='nav navbar-nav';
	}
}


/*
var NavAction = React.createClass({

	actionClick : function(e){
		console.log('Action Item Clicked!!');
	},
	render: function() {
		return (
			<ul className={"nav navbar-nav "+this.props.actionData.placement}>
               <li>
	               	<a 
	               		href={this.props.actionData.modal ? this.props.actionData.modal.modalId : "#"} 
	               		data-toggle={this.props.actionData.modal ? "modal" : ""}
	               		onClick={this.actionClick}
	               	>
	               		{this.props.actionData.name}
	               	</a>
               	</li>
            </ul>
		);
	},
	getNavClassNames : function(){
		var classNames ='nav navbar-nav';
	}

});

module.exports = NavAction;
*/