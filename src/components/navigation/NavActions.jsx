import React            from 'react';
import NavAction        from './NavAction.jsx';
import Login            from './Login.jsx';
import LoginModal       from './LoginModal.jsx';
import Subscribe        from './Subscribe.jsx';
import SubscribeModal   from './SubscribeModal.jsx';

export default class NavActions extends React.Component {
    render() {
        var actions = this.props.actionsData.map(function(action){
            return (
                <NavAction actionData={action}/>
            );
        });
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