import React from 'react';



// takes in function to trigger pagination

const PaginateButton = ({ fetchTracks }) => {

	return (
		<button
			onClick={() => fetchTracks({}, true)}
			className="btn btn-default"> More </button>
	);
}


export default PaginateButton;
