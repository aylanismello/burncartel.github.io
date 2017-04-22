import React from 'react';
import { Link } from 'react-router-dom';
import * as Typicons from 'react-icons/lib/ti/';
import { GoFlame } from 'react-icons/lib/go';
import Infinite from 'react-infinite';
import TrackItem from '../track/track_item';
import Loading from '../loading';

const Feed = ({ tracks, filters, trackLoaded,
	handleTrackClick, loadingFeed, trackId,
	playing, fetchTracks, isLoggedIn, loginFB,
	likeUnlikeTrack, userLikes, likePostInProgress,
 	paginateTracks, page }) => {
	let childElements;

	if(loadingFeed && page === 1) {
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
				likePostInProgress={likePostInProgress}
				likeUnlikeTrack={likeUnlikeTrack}
				isLikedByUser={userLikes[track.id] === undefined ? false : true }
			/>
		));

	}

	const NavigateFeedIcons = () => {
		if(!loadingFeed) {
			return (
				<div>
					<Typicons.TiArrowDown
						size={100}
						color="gray"
						className="bc-icon"
						onClick={() => paginateTracks()}
					/>
					<Typicons.TiArrowUp
						size={100}
						color="gray"
						className="bc-icon"
						onClick={() => window.scrollTo(0, 0)}
					/>
				</div>
			);
		} else {
			return (
				<GoFlame
					size={120}
					color="orange"
					className='track-item-icon'
				/>
			);
		}
	};

	return (
		<div className="feed-container">
			{childElements}
			{page === 1 && loadingFeed ? null : <div className="pagination-button-container"> <NavigateFeedIcons/> </div>}
		</div>
	);
};

export default Feed;
