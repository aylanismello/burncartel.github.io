import React from 'react';
import PropTypes from 'prop-types';

const InfoDropdown = ({ children }) => {
	return (
		<div className="info-dropdown-container">
			<div className="hover-on-element">
				{children}
				<div className="info-dropdown">
						<span className="caret info-caret" />
					OK!
				</div>
			</div>
			{/* <div className="info-dropdown-content"> */}

			{/* </div> */}
		</div>
	);
};

InfoDropdown.propTypes = {};

export default InfoDropdown;
