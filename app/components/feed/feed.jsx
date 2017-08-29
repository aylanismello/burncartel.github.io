import React from 'react';
import * as Typicons from 'react-icons/lib/ti/';
import TrackItem from '../track/track_item';
import BCSpinner from '../shared/bc_spinner';
import Loading from '../shared/loading';

const Feed = ({
	tracks,
	filters,
	trackLoaded,
	handleTrackClick,
	loadingFeed,
	trackId,
	playing,
	isLoggedIn,
	loginFB,
	likeUnlikeTrack,
	userLikes,
	likePostInProgress,
	paginateTracks,
	tracksPage,
	playingTrackId,
	canPaginate,
	nextPage,
	hasRanking
}) => {
	let childElements;

	// TODO: FIX this shitty conditional

	if (loadingFeed && !tracksPage) {
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
				isLikedByUser={userLikes[track.id] !== undefined}
				hasRanking={hasRanking}
			/>
		));
	}

	const NavigateFeedIcons = () => {
		debugger;
		if (!loadingFeed && tracksPage) {
			return (
				<div className="navigate-feed-icons">
					{canPaginate
						? <Typicons.TiArrowDown
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
		} else if (loadingFeed && tracksPage) {
			return null;
		} else {
			return <div />;
		}
	};

	return (
		<div className="feed-container">
			{childElements}
			<div className="pagination-button-container">
				<NavigateFeedIcons />
				<BCSpinner
					extraClass={
						loadingFeed && tracksPage
							? 'bottom-loading-spinner'
							: 'visibility-hidden'
					}
				/>
			</div>
		</div>
	);
};

export default Feed;
