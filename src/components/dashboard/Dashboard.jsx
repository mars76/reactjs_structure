import React 	from 'react';
import NavBar 	from '../navigation/NavBar';
import AuthenticatedComponent from '../auth/AuthenticatedComponent'

export default AuthenticatedComponent(class Dashboard extends React.Component {
	render() {
		return (
			<div className='container'>
				<NavBar/>
			</div>
		);
	}
});
