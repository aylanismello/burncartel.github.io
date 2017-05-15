import { Link } from 'react-router-dom';
import $ from 'jquery';
import React from 'react';
import Modal from 'react-modal';

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
					{/* <a className="navbar-brand" href="#">
						<div className="logo-container">
							<img src="../../assets/bc_small_1.png" alt="Burn Cartel"/>
						</div>
					</a> */}

					<div className="login-logout-container">

						{this.renderLogoutButton()}

					</div>

					<Modal
			      isOpen={this.state.open}
			      onRequestClose={this.handleClose.bind(this)}
						onAfterOpen={() => {}}
			      contentLabel="Modal"
			      style={style}
						contentLabel="Example Modal">
							<div className='modal-container'>
								<div className='ff-welcome-text-container'>
									<h4> Welcome to Fire Feed! </h4>

									<p className='ff-welcome-text'> Fire Feed is only as smart as you let it be! Login
											to start liking 🔥 tracks to optimize your feed 😃 </p>


								</div>
								<div className="fb-login-container">


	              	<img className="login-out-img"
	                     onClick={this.facebookLogin.bind(this)}
	                     src='../../assets/fb_login.png' />

	              </div>
							</div>
			    </Modal>

				</div>

			</nav>
		);
	}

}

export default TopNav;
