import React from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

const BCSpinner = ({ extraClass }) => {
	const className = `react-loading-spinner-container ${extraClass}`;

	return (
		<div className={className}>
			<Spinner name="line-scale-pulse-out" className="react-loading-spinner" />
			{/* <Spinner name="line-scale-pulse-out" className={className} /> */}
		</div>
	);
};

BCSpinner.defaultProps = {
	extraClass: ''
};

BCSpinner.propTypes = {
	extraClass: PropTypes.string
};

export default BCSpinner;
