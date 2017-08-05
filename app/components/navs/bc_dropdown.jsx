import React from 'react';
import { Link } from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa/';

const iconSize = 15;

const renderDropdownMenu = (onClickLogout, closeDropdown) => (
	<div className="dropdown-menu-container">

		<Link to="/me">
			<div className="dropdown-menu-item" onClick={closeDropdown}>
				<FontAwesome.FaUser
					size={iconSize}
					color="aliceblue"
					className="bc-icon"
				/>
				<div className="dropdown-text">
					Profile
				</div>
			</div>
		</Link>

		<Link to="/me/likes">
			<div className="dropdown-menu-item" onClick={closeDropdown}>
				<FontAwesome.FaHeart
					size={iconSize}
					color="aliceblue"
					className="bc-icon"
				/>
				<div className="dropdown-text">
					Likes
				</div>
			</div>
		</Link>

		<Link to="/help">
			<div className="dropdown-menu-item" onClick={closeDropdown}>
				<FontAwesome.FaQuestion
					size={iconSize}
					color="aliceblue"
					className="bc-icon"
				/>
				<div className="dropdown-text">
					Help
				</div>
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
		</div>
	);
};

export default BCDropdown;
