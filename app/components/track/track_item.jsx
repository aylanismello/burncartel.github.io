import React from 'react';
import { Link } from 'react-router-dom';
import FireLike from '../likes/fire_like';
import TagList from '../shared/tag_list';
import * as FontAwesome from 'react-icons/lib/fa/';

const shortenLongWordsInTitle = title => {
	const formattedTitle = title.split(' ').map(word => {
		if (word.length >= 18) {
			return `${word.slice(0, 17)}.`;
		} else {
			return word;
		}
	});

	return formattedTitle.join(' ');
};

const TrackBadge = ({ title }) => (
	<span className="badge badge-default bc-badge">{title}</span>
);


const TrackItem = ({
	track,
	handleTrackClick,
	playing,
	trackId,
	trackLoaded,
	trackIdx,
	isLoggedIn,
	loginFB,
	likeUnlikeTrack,
	isLikedByUser,
	likePostInProgress,
	playingTrackId,
	hasRanking = true
}) => {
	const numCurators = track.curators.length;
	const curatorWord = numCurators <= 1 ? 'curator' : 'curators';
	const curatorsStr = `${numCurators} ${curatorWord}`;

	const artwork_url = track.artwork_url
		? track.artwork_url
		: track.publisher.avatar_url;

	const playIconUrl =
		'https://cdn3.iconfinder.com/data/icons/seo-marketing-2-1/48/56-128.png';
	const pauseIconUrl =
		'https://cdn1.iconfinder.com/data/icons/media-volume-1/48/017-512.png';
	const loadingIconUrl =
		'https://cdn1.iconfinder.com/data/icons/loading-wait-time/256/loading_wait_time_02-128.png';

	let playIcon = playIconUrl;

	if (playingTrackId === track.id) {
		if (trackLoaded && playing) {
			playIcon = pauseIconUrl;
		} else if (trackLoaded && !playing) {
			playIcon = playIconUrl;
		} else {
			playIcon = loadingIconUrl;
		}
	}

	let flameColor;

	if (isLikedByUser) {
		flameColor = 'orange';
	} else {
		flameColor = 'black';
	}

	let Badge = null;

	if (track.is_remix) {
		Badge = <TrackBadge title="REMIX" />;
	} else if (track.is_mix) {
		Badge = <TrackBadge title="MIX" />;
	} else if (track.is_bc) {
		Badge = <TrackBadge title="BC PICK" />;
	} else if (track.is_episode) {
		Badge = <TrackBadge title="BC RADIO" />;
	}

	return (
		<div className="row">
			<div
				className="col-sm-6 col-md-10 track-container"
				id={`track-#${track.id}`}
			>
				<div className="thumbnail">
					{/*  do NOT use image itself to set width of this, there's invisble white space on edges*/}
					<div className="left-side">
						<div className="artwork-wrapper">
							{hasRanking
								? <h2>
										<span className="ranking-header">
											{trackIdx + 1}
										</span>
									</h2>
								: null}

							<img src={artwork_url} className="artwork-icon" />
							<img
								onClick={() => handleTrackClick(track.id, 'play')}
								src={playIcon}
								className="artwork-play"
							/>
						</div>

						<div className="track-item-icons">
							<FireLike
								isLoggedIn={isLoggedIn}
								loginFB={loginFB}
								likePostInProgress={likePostInProgress}
								likeUnlikeTrack={likeUnlikeTrack}
								numLikes={track.num_likes}
								isLikedByUser={isLikedByUser}
								trackId={track.id}
							/>

							<div className="track-item-icon">
								<a href={track.permalink_url} target="_blank">
									<FontAwesome.FaSoundcloud
										size={35}
										color="black"
										className="soundcloud-png"
									/>
								</a>

							</div>

						</div>
					</div>

					<div className="right-side">
						<div className="caption">

							<Link to={`/tracks/${track.id}`}>
								<h3 className="track-title">
									{shortenLongWordsInTitle(track.name)}
								</h3>
							</Link>

							{hasRanking
								? <div>
										<div>
											<span>
												{' '}By{' '}
												<Link to={`/publishers/${track.publisher_id}`}>
													{track.publisher.name}
												</Link>
											</span>
										</div>
										<span>Selected by {curatorsStr} </span>
									</div>
								: null}

						</div>

						<div className="metadata">
							{Badge}
							<TagList tagList={track.top_tags.slice(0, 6)} />
						</div>

					</div>
				</div>

			</div>
		</div>
	);
};

export default TrackItem;
