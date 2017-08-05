import React from 'react';
import { Link } from 'react-router-dom';

const BCDropdown = ({ onClickLogout, loginText, user }) => {
	const { photo_url, name } = user;

	return (
		<div className="bc-dropdown-container">
			<div className="bc-dropdown-avatar-container">
				<img src={photo_url} className="bc-dropdown-avatar" />
			</div>

			{/* <Link to="/">
				<div className="login-logout-button" onClick={onClickLogout}>
					{loginText}
				</div>
			</Link> */}
		</div>
	);
};

export default BCDropdown;
