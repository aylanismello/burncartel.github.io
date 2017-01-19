import React from 'react';
import TrackBanner from './track_banner';

const TrackShow = ({track}) => {
	return (
		<div className="container">
			<TrackBanner track={track} />
		</div>
	);
};

export default TrackShow;
