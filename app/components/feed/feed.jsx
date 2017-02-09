import React from 'react';
import { Link } from 'react-router';
import TrackItem from '../track/track_item';
import Loading from '../loading';
import PaginateButton from './paginate_button';

const Feed = ({ tracks, handleTrackClick, loadingFeed, trackId, playing }) => {
	let childElements;

	if(loadingFeed) {
		childElements = <Loading />;
	} else {

		childElements = tracks.map((track, idx) => (
			<TrackItem
				track={track}
				trackId={trackId}
				playing={playing}
				handleTrackClick={handleTrackClick}
				key={idx}
			/>
		));

	}

	return (
		<div className="feed-container">
			{childElements}
			<PaginateButton />
		</div>
	);
};

export default Feed;
