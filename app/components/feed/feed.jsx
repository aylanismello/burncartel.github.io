import React from 'react';
import { Link } from 'react-router';
import TrackItem from '../track/track_item';
import Loading from '../loading';
import PaginateButton from './paginate_button';

const Feed = ({ tracks, trackLoaded, handleTrackClick, loadingFeed, trackId, playing, fetchTracks  }) => {
	let childElements;

	if(loadingFeed) {
		childElements = <Loading />;
	} else {

		childElements = tracks.map((track, idx) => (
			<TrackItem
				track={track}
				trackIdx={idx}
				trackId={trackId}
				playing={playing}
				trackLoaded={trackLoaded}
				handleTrackClick={handleTrackClick}
				key={idx}
			/>
		));

	}

	return (
		<div className="feed-container">
			{childElements}
			<PaginateButton
				fetchTracks={fetchTracks}
			/>
		</div>
	);
};

export default Feed;
