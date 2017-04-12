import $ from 'jquery';
import React from 'react';


const TopNav = () => {

	let fbButton = null;



// https://github.com/mkdynamic/omniauth-facebook/blob/3b084957c0e8fd8a59dd9c44293a02d4ca77835a/lib/omniauth/strategies/facebook.rb
	const loginFB = () =>  {
		// window.location = 'https://www.facebook.com/v2.8/dialog/oauth?client_id=156389341554296&redirect_uri=https://www.facebook.com/connect/login_success.html';
		$.ajax({
			method: 'get',
			// url: 'https://www.facebook.com/v2.8/dialog/oauth?client_id=156389341554296&redirect_uri=https://www.facebook.com/connect/login_success.html',
			url: 'http://localhost:3000/yo',
			success: (data) => {
				debugger;
			},
			error: (err) => {
				debugger;
			}
		})

	// 	FB.login(response => {
	//
	// 		// debugger;
	// 		if(response.authResponse.accessToken) {
	//
	//
	// 		// 	debugger;
	// 		// 	$.ajax({
	// 		// 		url: 'http://localhost:4000/auth/facebook/callback',
	// 		// 		method: 'GET',
	// 		// 		xhrFields: {
	// 		// 			withCredentials: true
	// 		// 	 },
	// 		// 	 data: {
	// 		// 		 code: response.authResponse.signedRequest
	// 		// 	 },
	// 		// 		error: (err) => {
	// 		// 			// debugger;
	// 		// 		}
	// 		// 	})
	// 		//
	// 		// 	console.log('logged in');
	// 		} else {
	// 			console.log('not logged in');
	// 		}
	// });
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
					onClick={() => loginFB()}
					>
						LOGIN
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
