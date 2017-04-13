import $ from 'jquery';
import React from 'react';

const TopNav = ({ currentUser, logoutCurrentUser, receiveCurrentUser }) => {

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
		let data = {};
		facebookLoginOut = () => {
			FB.login(response => {
				if(response.authResponse.accessToken) {
					// let data = {}
					FB.api('/me', {fields: 'first_name,last_name,email'}, (response) => {
	          console.log(response);
	          data['last_name'] = response.last_name;
	          data['first_name'] = response.first_name;
	          data['id'] = response.id;
	          data['email'] = response.email;

	          $.ajax({
	            url: 'http://localhost:3000/yo',
	            method: 'POST',
	            xhrFields: {
	              withCredentials: true
	            },
	            data,
	            success: (sux) => {
	              receiveCurrentUser(sux);
	            },
	            error: (err) => {
	              console.log(err);
	            }
	          });
	        });

					console.log('logged in');
				} else {
					console.log('not logged in');
				}

			});
			// });
		}
	}


	return (
		<nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
			{/* <fbButton className="navbar-toggler navbar-toggler-right" type="fbButton" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</fbButton> */}
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
