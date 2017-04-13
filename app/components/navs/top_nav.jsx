import $ from 'jquery';
import React from 'react';

const TopNav = () => {

	let fbButton = null;
	
// https://github.com/mkdynamic/omniauth-facebook/blob/3b084957c0e8fd8a59dd9c44293a02d4ca77835a/lib/omniauth/strategies/facebook.rb
	const loginFB = () =>  {
		FB.getLoginStatus((response) => {
		  if (response.status === 'connected') {
		    console.log('Logged in.');
				let data = {};

				FB.api('/me', {fields: 'first_name,last_name,email'}, (response) => {
					console.log(response);
					debugger;
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
		  } else {
				FB.login(response => {
					if(response.authResponse.accessToken) {
						// let data = {}
						FB.api('/me', {fields: 'last_name,email'}, function(response) {
							console.log(response);
							data['last_name'] = response.last_name



						});


						console.log('logged in');
					} else {
						console.log('not logged in');
					}
				}, {scope: 'public_profile,email'});
		  }
		});
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
