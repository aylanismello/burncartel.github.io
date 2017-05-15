import React from 'react';
import { Link } from 'react-router-dom';
import * as Typicons from 'react-icons/lib/ti/';
import { GoFlame } from 'react-icons/lib/go';
import Infinite from 'react-infinite';
import TrackItem from '../track/track_item';
import Loading from '../loading';

const Feed = ({ tracks, filters, trackLoaded,
	handleTrackClick, loadingFeed, trackId,
	playing, isLoggedIn, loginFB,
	likeUnlikeTrack, userLikes, likePostInProgress,
 	paginateTracks, tracksPage, playingTrackId,
	canPaginate, nextPage, hasRanking }) => {
	let childElements;

	// TODO: FIX this shitty conditional

	if(loadingFeed && !tracksPage) {
		childElements = <Loading />;
	} else {

		childElements = tracks.map((track, idx) => (
			<TrackItem
				track={track}
				trackIdx={idx}
				trackId={trackId}
				playingTrackId={playingTrackId}
				playing={playing}
				trackLoaded={trackLoaded}
				handleTrackClick={handleTrackClick}
				isLoggedIn={isLoggedIn}
				loginFB={loginFB}
				key={idx}
				likePostInProgress={likePostInProgress}
				likeUnlikeTrack={likeUnlikeTrack}
				isLikedByUser={userLikes[track.id] === undefined ? false : true }
				hasRanking={hasRanking}
			/>
		));

	}


	const NavigateFeedIcons = () => {
		if(!loadingFeed && tracksPage) {
			return (
				<div>
					{canPaginate ?
						<Typicons.TiArrowDown
							size={100}
							color="gray"
							className="bc-icon"
							onClick={() => paginateTracks()}
						/>
					: null}

					<Typicons.TiArrowUp
						size={100}
						color="gray"
						className="bc-icon"
						onClick={() => window.scrollTo(0, 0)}
					/>
				</div>
			);
		} else if(loadingFeed && tracksPage){
			return (
				<GoFlame
					size={120}
					color="orange"
					className='track-item-icon'
				/>
			);
		} else {
			return (
				<div></div>
			)
		}
	};

	return (
		<div className="feed-container">
			{childElements}
			{/* {tracksPage === 1 && loadingFeed ? null : <div className="pagination-button-container"> <NavigateFeedIcons/> </div>} */}
			{/* {canPaginate ?  <div className="pagination-button-container"> <NavigateFeedIcons/> </div> : null} */}
			<div className="pagination-button-container"> <NavigateFeedIcons/> </div>
		</div>
	);
};

export default Feed;
