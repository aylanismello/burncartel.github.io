import $ from 'jquery';
import React from 'react';

const TopNav = ({ currentUser, logoutCurrentUser, receiveCurrentUser }) => {

	let fbButton = null;
	let buttonText;
	let facebookLoginOut;

	if(currentUser.uid) {
		buttonText = 'LOGOUT';
		facebookLoginOut = () => {
			FB.logout();
			logoutCurrentUser();
		};
	} else {
		buttonText = 'LOGIN';
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
	              debugger;
	              // set your state here

	              console.log(sux);
	            },
	            error: (err) => {
	              debugger;
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




			<div id="user-widget">

				<button
					onClick={() => facebookLoginOut()}
					>
						{ buttonText }
					</button>

			</div>

			<div className="collapse navbar-collapse" id="navbarCollapse">

					{/* <ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Link</a>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="#">Disabled</a>
					</li>
				</ul> */}

				{/* <form className="form-inline mt-2 mt-md-0">
					<input className="form-control mr-sm-2" type="text" placeholder="Search"/>
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form> */}

			</div>

		</nav>

	);
};

export default TopNav;
