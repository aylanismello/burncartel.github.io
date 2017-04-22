import $ from 'jquery';
import React from 'react';

const TopNav = ({ currentUser, logoutCurrentUser,
	receiveCurrentUser, loginFB, fbDidInit }) => {

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

	return (
		<nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse bc-nav">

			<a className="navbar-brand" href="#">
				<div className="logo-container">
					<img src="../../assets/bc_small_1.png" alt="Burn Cartel"/>
				</div>
			</a>

			<div className="login-out-container">

				<img
					className="login-out-img"
					onClick={() => facebookLoginOut()}
					src={buttonImgSrc}
				/>

			</div>

		</nav>
	);
};

export default TopNav;
