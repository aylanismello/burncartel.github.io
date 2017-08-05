import React from 'react';
import { Link } from 'react-router-dom';

const renderDropdownMenu = (onClickLogout, closeDropdown) => (
	<div className="dropdown-menu-container">

		<Link to="/me">
			<div
        className="dropdown-menu-item"
        onClick={closeDropdown}>
				Profile
			</div>
		</Link>

		<Link to="/me/likes">
			<div
        className="dropdown-menu-item"
        onClick={closeDropdown}>
				Likes
			</div>
		</Link>

		<div className="dropdown-menu-item" onClick={onClickLogout}>
			Log Out
		</div>

	</div>
);

const BCDropdown = ({
	onClickLogout,
	loginText,
	user,
	dropdownOpen,
	onClick,
  closeDropdown
}) => {
	const { photo_url, name } = user;

	return (
		<div className="bc-dropdown-container">
			<div className="bc-dropdown-avatar-name" onClick={onClick}>
				<div className="bc-dropdown-avatar-container">
					<img src={photo_url} className="bc-dropdown-avatar" />
				</div>
				<span className="bc-dropdown-name">
					{name.split(' ')[0]}
				</span>
			</div>

			{dropdownOpen ? renderDropdownMenu(onClickLogout, closeDropdown) : null}

			{/* <Link to="/">
				<div className="login-logout-button" onClick={onClickLogout}>
					{loginText}
				</div>
			</Link> */}
		</div>
	);
};

export default BCDropdown;
