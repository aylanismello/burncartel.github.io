import React from 'react';

const PaginateButton = ({ fetchTracks, filters }) => {

	return (
		<button
			onClick={() => fetchTracks(filters, true)}
			className="btn btn-default"> More </button>
	);
};

export default PaginateButton;
