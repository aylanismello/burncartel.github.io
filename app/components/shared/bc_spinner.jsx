import React from 'react';
import Spinner from 'react-spinkit';
import PropTypes from 'prop-types';

const BCSpinner = ({ extraClass, name }) => {
	const className = `react-loading-spinner-container ${extraClass}`;

	return (
		<div className={className}>
			<Spinner name={name} className="react-loading-spinner" />
			{/* <Spinner name="line-scale-pulse-out" className={className} /> */}
		</div>
	);
};

BCSpinner.defaultProps = {
	extraClass: '',
	name: 'line-scale-pulse-out'
};

BCSpinner.propTypes = {
	extraClass: PropTypes.string,
	name: PropTypes.string
};

export default BCSpinner;
