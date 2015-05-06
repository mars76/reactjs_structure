/*
var React  =require('react');
var NavBar =require('./components/navigation/NavBar.jsx');
*/
/*
import React from 'react';
import Router from 'react-router';
import NavBar from './components/navigation/NavBar.jsx';

export default class App extends React.Component {
	render() {
		return (
			<div className='container'>
				<NavBar/>
			</div>
		);
	}
}
*/

import React 			from 'react';
import Router 			from 'react-router';

import AuthenticatedApp from './components/auth/AuthenticatedApp'
import Login 			from './components/auth/Login';
import Logout 			from './components/navigation/Logout';
/*import Signup 		from './components/auth/Signup';*/
import Dashboard 		from './components/dashboard/Dashboard';
import RouterContainer 	from './services/RouterContainer'
import LoginActions 	from './actions/LoginActions'

var {Route} = Router;

var routes = (
  <Route handler={AuthenticatedApp}>
    <Route name="/" handler={Login}/>
    <Route name="login" handler={Login}/>
    <Route name="logout" handler={Logout}/>
    <Route name="dashboard" path="/dashboard" handler={Dashboard}/>
  </Route>
);

var router = Router.create({routes});
RouterContainer.set(router);

let jwt = localStorage.getItem('jwt');
if (jwt) {
  LoginActions.loginUser(jwt);
}

router.run(function (Handler) {
  React.render(<Handler />, document.getElementById('content'));
});

/*
var App = React.createClass({
	render: function() {
		return (
			<div className='container'>
				<NavBar/>
			</div>
		);
	}
});

React.render(
	<App/>,document.getElementById('content')
);


*/

