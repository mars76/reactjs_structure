import React            from 'react';
import NavAction        from './NavAction';
import LoginLink        from './LoginLink';
import Logout           from './Logout';
import LoginModal       from './LoginModal';
import Subscribe        from './Subscribe';
import SubscribeModal   from './SubscribeModal';
import LoginStore       from '../../stores/LoginStore';

export default class NavActions extends React.Component {
    
    getLoginLinks(){
        if(!LoginStore.isLoggedIn()){
            return(
                <LoginLink/>
            );
        }
        else{
            return(
                <Logout/>
            );
        }
    }
    render() {
        var actions = this.props.actionsData.map(function(action){
            return (
                <NavAction actionData={action}/>
            );
        });

        return (
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                {actions}
                {this.getLoginLinks()}
                <Subscribe/>
            </div>
        );
    }
}

/*
var React 		= require('react');
var NavAction 	= require('./NavAction.jsx');
var Login 		= require('./Login.jsx');
var LoginModal	= require('./LoginModal.jsx');
var Subscribe 	= require('./Subscribe.jsx');
var SubscribeModal 	= require('./SubscribeModal.jsx');
var NavActions 	= React.createClass({

	getInitialState: function() {
        return {
            	subscribe: {
            		name :'Subscribe',
            		placement :'navbar-right',
            		active :false,
            		display:'button',
            		modal :{
            			modalId :'subscribeModal'
            		}
            	},
            	inStockOnly: false
        };
    },

	render: function() {
		var actions = this.props.actionsData.map(function(action){
        	return (
            	<NavAction actionData={action}/>
        	);
      	})
		return (
			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				{actions}
				<Login/>
				<Subscribe/>
				<LoginModal/>
				<SubscribeModal/>
            </div>
		);
	}

});

module.exports = NavActions;
*/