import React from 'react';

const TrackDetails = (props) => {
	let Details;
	if (props.playerType === 'mobile') {
		Details = (
			<div className="burn-cartel-player-details">
				<div className="dummy-icon">
					{props.playIcon}
				</div>
				{props.details}
			</div>
		);
	}

	return Details;
};

export default TrackDetails;
