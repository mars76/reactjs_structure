'use strict';

import React from 'react';
import LoginStore from '../../stores/LoginStore'
import { Route, RouteHandler, Link } from 'react-router';
import AuthService from '../../services/AuthService'

export default class AuthenticatedApp extends React.Component {
  constructor() {
    this.state = this._getLoginState();
  }

  _getLoginState() {
    return {
      userLoggedIn: LoginStore.isLoggedIn()
    };
  }

  componentDidMount() {
    this.changeListener = this._onChange.bind(this);
    LoginStore.addChangeListener(this.changeListener);
  }

  _onChange() {
    this.setState(this._getLoginState());
  }

  componentWillUnmount() {
    LoginStore.removeChangeListener(this.changeListener);
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <i className="icon-sun"></i>
          </div>
          {this.headerItems}
        </nav>
        <RouteHandler/>
      </div>
    );
  }

  logout(e) {
    e.preventDefault();
    AuthService.logout();
  }

  get headerItems() {
    if (!this.state.userLoggedIn) {
      return (
        <div></div>
      )
    } else {
      return (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
        <li>
          <a href="" onClick={this.logout}>Logout</a>
        </li>
      </ul>)
    }
  }
}
