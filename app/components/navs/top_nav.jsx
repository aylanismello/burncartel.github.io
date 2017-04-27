import $ from 'jquery';
import React from 'react';
import Modal from 'react-modal';

class TopNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	componentWillMount() {
    Modal.setAppElement('body');
 }

	handleClose() {
		const status = this.state.open;
		this.setState({
			open: !status
		});
	}

	render() {
		const { currentUser, logoutCurrentUser,
						receiveCurrentUser, loginFB, fbDidInit } = this.props;

		let fbButton = null;
		let buttonImgSrc;
		let facebookLoginOut;

		if(currentUser.uid) {
			buttonImgSrc = '../../assets/logout_button.png';
			facebookLoginOut = () => {
				FB.logout();
				logoutCurrentUser();
			};
		} else {
			buttonImgSrc = '../../assets/fb_login.png';
			facebookLoginOut = () => loginFB();
		}

		// we CANNOT enable FB login facebook has initialized on the page
		if(!fbDidInit) {
			buttonImgSrc = '../../assets/fb_login.png';
			facebookLoginOut = () => console.log('easy tiger! wait for FB to init');
		}

		const style = {
	    content : {
	      top                   : '50%',
	      left                  : '50%',
	      right                 : 'auto',
	      bottom                : 'auto',
	      marginRight           : '-50%',
	      transform             : 'translate(-50%, -50%)'
	    }
	  };

		return (
			<nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse bc-nav">

				<a className="navbar-brand" href="#">
					<div className="logo-container">
						<img src="../../assets/bc_small_1.png" alt="Burn Cartel"/>
					</div>
				</a>

				<div className="login-out-container">

					<div style={{cursor: 'pointer', backgroundColor: 'white', borderRadius: 5}}
							 onClick={this.handleClose.bind(this)}>
	  				Login
					</div>

					<Modal
			      isOpen={this.state.open}
			      onRequestClose={this.handleClose.bind(this)}
			      contentLabel="Modal"
			      style={style}
						contentLabel="Example Modal">
								<h1>Hello</h1>
			    </Modal>

				</div>

			</nav>
		);
	}

}

export default TopNav;
