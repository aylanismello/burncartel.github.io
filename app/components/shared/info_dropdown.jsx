import React from 'react';
import PropTypes from 'prop-types';
import UserList from './user_list';

const InfoDropdown = ({ children, users, userType, length }) => {
	return (
		<div className="info-dropdown-container">
			<div className="info-dropdown">
				<div className="actual-hover">
					{children}
				</div>
				<div className="info-dropdown-content">
					<div className="arrow-up" />
					<UserList users={users} userType={userType} length={length} />
				</div>
			</div>
		</div>
	);
};

InfoDropdown.defaultProps = {
	users: [],
	userType: 'curators',
	length: 5
};

InfoDropdown.propTypes = {
	children: PropTypes.string.isRequired,
	users: PropTypes.array,
	userType: PropTypes.string,
	length: PropTypes.number
};

export default InfoDropdown;
