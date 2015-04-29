import React 		from 'react';

import NavHeader 	from './NavHeader.jsx';
import NavActions 	from './NavActions.jsx';
import Login 		from './Login.jsx';


export default class NavBar extends React.Component {
	constructor(){
		this.state = {
				actions1: [
						{
							name :'Home',
	            			placement :'',
	            			active :'true',
						},
						{
							name :'Contact Us',
	            			placement :'navbar-left',
	            			active :'false'
						}
				],
				actions2 :[
						{
							name :'Login',
	            			placement :'navbar-right',
	            			active :'false',
	            			modal : {
	            				modalId :''
	            			}
						},
						{
							name :'Subscribe',
	            			placement :'navbar-right',
	            			active :'false',
	            			modal : {
	            				modalId :''
	            			}
						}
				]		
			};

	}
	

	render() {
		var navProps ={};
		navProps.brandName  	= "Personas";
		navProps.toggleHeaderId = "navToggleHeader";

		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
					<NavHeader headerData={navProps}/>
					<NavActions actionsData={this.state.actions1}/>
				</div>
			</nav>
		);
	}
}


/*
var React 		= require('react');
var NavHeader 	= require('./NavHeader.jsx');
var NavActions 	= require('./NavActions.jsx');
var Login 		= require('./Login.jsx');
var NavBar = React.createClass({
	getInitialState : function(){
		return {
			actions1: [
					{
						name :'Home',
            			placement :'',
            			active :'true',
					},
					{
						name :'Contact Us',
            			placement :'navbar-left',
            			active :'false'
					}
			],
			actions2 :[
					{
						name :'Login',
            			placement :'navbar-right',
            			active :'false',
            			modal : {
            				modalId :''
            			}
					},
					{
						name :'Subscribe',
            			placement :'navbar-right',
            			active :'false',
            			modal : {
            				modalId :''
            			}
					}
			]		
		};
	},
	render: function() {
		var navProps ={};
		navProps.brandName  	= "Personas";
		navProps.toggleHeaderId = "navToggleHeader";
		return (
			<nav className="navbar navbar-default navbar-fixed-top">
				<div className="container-fluid">
					<NavHeader headerData={navProps}/>
					<NavActions actionsData={this.state.actions1}/>
				</div>
			</nav>
		);
	}

});

module.exports = NavBar;
*/