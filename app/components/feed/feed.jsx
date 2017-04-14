import React from 'react';
import { Link } from 'react-router';
import VisibilitySensor from 'react-visibility-sensor';
import TrackItem from '../track/track_item';
import Loading from '../loading';

const Feed = ({ tracks, filters, trackLoaded,
	handleTrackClick, loadingFeed, trackId,
	playing, fetchTracks, isLoggedIn, loginFB,
	likeUnlikeTrack, userLikes }) => {
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
				isLoggedIn={isLoggedIn}
				loginFB={loginFB}
				key={idx}
				likeUnlikeTrack={likeUnlikeTrack}
				isUserLike={userLikes[track.id] === undefined ? false : true }
			/>
		));

	}

	return (
		<div className="feed-container">
			{childElements}
			<VisibilitySensor onChange={(isVisible) => {
				 if(!loadingFeed) {
					 if(isVisible) {
						 fetchTracks(filters, true);
					 }
				 }
			}} />
		</div>
	);
};

export default Feed;
