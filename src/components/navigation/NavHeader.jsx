import React from 'react';

export default class NavHeader extends React.Component {
    render() {
        return (
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" 
                    data-toggle="collapse" 
                    data-target={this.props.headerData.toggleHeaderId}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">
                    {this.props.headerData.brandName} &nbsp;<i className="fa fa-chevron-circle-right"></i>
                </a>

            </div>
        );
    }
}

/*
var React = require('react');

var NavHeader = React.createClass({

	render: function() {
		return (
			<div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" 
                	data-toggle="collapse" 
                	data-target={this.props.headerData.toggleHeaderId}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">
                	{this.props.headerData.brandName}
                </a>
             </div>
		);
	}

});

module.exports = NavHeader;
*/