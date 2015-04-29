/*
var React  =require('react');
var NavBar =require('./components/navigation/NavBar.jsx');
*/

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

/*
var App = React.createClass({
	render: function() {
		return (
			<div className='container'>
				<NavBar/>
			</div>
		);
	}
});*/

React.render(
	<App/>,document.getElementById('content')
);
