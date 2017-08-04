import { Link } from 'react-router-dom';
import $ from 'jquery';
import React from 'react';
import Modal from 'react-modal';
import * as FontAwesome from 'react-icons/lib/fa/';
import LoginModal from '../shared/login_modal';

class TopNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			loginText: ''
		};

		this.renderLogoutButton = this.renderLogoutButton.bind(this)
	}

	componentWillMount() {
    Modal.setAppElement('body');
 }

 componentWillReceiveProps(nextProps) {

	 if (nextProps.currentUser.uid) {
		 this.setState({loginText: 'Logout'});
	 } else {
		 this.setState({loginText: 'Login'});
	 }

 }

 renderLogoutButton() {
	 if(this.props.currentUser.uid) {
		 return (
		 	<Link to='/'>
			 	<div className='login-logout-button'
						 onClick={this.props.currentUser.uid ? this.facebookLogout.bind(this) : () => this.setState({open: true})}>
					{this.state.loginText}
				</div>
			</Link>
		);
	 } else {
		 return (
		 <div className='login-logout-button'
					onClick={this.props.currentUser.uid ? this.facebookLogout.bind(this) : () => this.setState({open: true})}>
			 {this.state.loginText}
		 </div>
		 );
	 }

 }

 handleClose() {
	 this.setState({
		 open: false
	 });
 }

	facebookLogin() {
		this.props.loginFB();
		this.setState({
			open: false
		});
	}

	facebookLogout() {
		FB.logout();
		this.props.logoutCurrentUser();
		this.setState({
			loginText: 'Login'
		})
	}

	render() {

		const style = {
	    content : {
	      top                   : '50%',
	      left                  : '50%',
	      right                 : 'auto',
	      bottom                : 'auto',
	      marginRight           : '-50%',
	      transform             : 'translate(-50%, -50%)',
				height								: '300px',
				width									: '300px'
	    }
	  };


		return (
			<nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse bc-nav">

				<div className="nav-buttons">

					<Link to="/help">
						<FontAwesome.FaQuestion
							size={30}
							color='aliceblue'
							className='bc-icon'
							/>
					</Link>

					<div className="login-logout-container">
						{this.renderLogoutButton()}
					</div>

					<LoginModal
						isOpen={this.state.open}
						onRequestClose={this.handleClose.bind(this)}
						style={style}
						fbLoginCallback={this.facebookLogin.bind(this)}
					/>

				</div>

			</nav>
		);
	}

}

export default TopNav;
