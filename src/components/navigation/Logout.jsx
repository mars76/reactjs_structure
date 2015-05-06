import React from 'react';
import LoginActions from '../../actions/LoginActions';

export default class Logout extends React.Component {
	logout(){
		LoginActions.logoutUser();
	}
	render() {
		return (
			<ul className="nav navbar-nav navbar-right">
				<li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
			</ul>
		);
	}
}
