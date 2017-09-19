/* global FB*/
import { Link } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import queryString from 'query-string';
import * as FontAwesome from 'react-icons/lib/fa/';
import { Menu } from 'semantic-ui-react';
import LoginModal from '../shared/login_modal';
import BCSearchBar from '../shared/bc_search_bar';
import BCDropdown from './bc_dropdown';

const loginTypes = {
	LOGIN: 'LOGIN',
	SIGNUP: 'SIGNUP'
};

const style = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		height: '300px',
		width: '300px'
	}
};

class TopNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			loginText: '',
			loginType: '',
			dropdownOpen: false
		};

		this.renderLoginOrLogoutButton = this.renderLoginOrLogoutButton.bind(this);
		this.renderSignupButton = this.renderSignupButton.bind(this);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.facebookLogout = this.facebookLogout.bind(this);
		this.closeDropdownIfPossible = this.closeDropdownIfPossible.bind(this);
	}

	componentWillMount() {
		Modal.setAppElement('body');

		document.body.addEventListener('click', e => {
			this.closeDropdownIfPossible(e);
		});

		document.addEventListener('keydown', e => {
			if (e.keyCode === 27 && e.target === document.body) {
				this.closeDropdownIfPossible(e);
			}
		});
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.currentUser.uid) {
			this.setState({ loginText: 'Logout' });
		} else {
			this.setState({ loginText: 'Login' });
		}
	}

	closeDropdownIfPossible(e) {
		// if (e.target.className && e.target.className.includes && !e.target.className.includes('dropdown') && this.state.dropdownOpen) {
		if (!e.target.className.includes('dropdown') && this.state.dropdownOpen) {
			this.setState({ dropdownOpen: false });
		}
	}

	renderLoginOrLogoutButton() {
		if (this.props.currentUser.uid) {
			return (
				<BCDropdown
					onClickLogout={this.facebookLogout.bind(this)}
					onClick={() =>
						this.setState({ dropdownOpen: !this.state.dropdownOpen })}
					loginText={this.state.loginText}
					user={this.props.currentUser}
					dropdownOpen={this.state.dropdownOpen}
					closeDropdown={() => this.setState({ dropdownOpen: false })}
				/>
			);
		} else {
			return (
				<div
					className="login-logout-button"
					onClick={() => this.handleLoginClick(loginTypes.LOGIN)}
				>
					{this.state.loginText}
				</div>
			);
		}
	}

	renderSignupButton() {
		if (!this.props.currentUser.uid) {
			return (
				<div>
					<span
						className="badge sign-up"
						onClick={() => this.handleLoginClick(loginTypes.SIGNUP)}
					>
						Sign Up
					</span>
				</div>
			);
		} else {
			return null;
		}
	}

	handleLoginClick(loginType) {
		this.props.currentUser.uid
			? this.facebookLogout()
			: this.setState({ open: true, loginType });
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

		// redirect to home page after logging out.. how?
		this.setState({
			loginText: 'Login',
			dropdownOpen: false
		});
	}

	render() {
		// grab the q params from our query string to update search bar
		const { q } = queryString.parse(this.context.router.route.location.search);

		return (
			// <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse bc-nav">
			<Menu fixed="top" className="bc-nav" >
				<div className="nav-buttons">

					<BCSearchBar q={q} />
					{/* <Link to="/help">
						<FontAwesome.FaQuestion
							size={30}
							color="aliceblue"
							className="bc-icon"
						/>
					</Link> */}

					<div className="login-logout-container">
						{this.renderLoginOrLogoutButton()}
						{this.renderSignupButton()}
					</div>

					<LoginModal
						isOpen={this.state.open}
						onRequestClose={this.handleClose.bind(this)}
						loginType={this.state.loginType}
						style={style}
						fbLoginCallback={this.facebookLogin.bind(this)}
					/>

				</div>
			</Menu>
		);
	}
}

TopNav.contextTypes = {
	router: PropTypes.object
};

export default TopNav;
