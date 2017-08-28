import React from 'react';
import { Link } from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa/';
import FireLike from '../likes/fire_like';
import TagList from '../shared/tag_list';
import TrackBadge from '../shared/track_badge';
import CountryBadge from '../shared/country_badge';
import BCAlbumArt from '../shared/bc_album_art';
import InfoDropdown from '../shared/info_dropdown';

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

	return (
		<div className="row">
			<div
				className="col-sm-6 col-md-10 track-container"
				id={`track-#${track.id}`}
			>
				<div className="thumbnail">
					{/*  do NOT use image itself to set width of this, there's invisble white space on edges*/}
					<div className="left-side">

						<BCAlbumArt
							hasRanking={hasRanking}
							trackIdx={trackIdx}
							trackId={track.id}
							playingTrackId={playingTrackId}
							trackLoaded={trackLoaded}
							playing={playing}
							handleTrackClick={() => handleTrackClick(track.id, 'play')}
							track={track}
						/>

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
										<div className="curators-link">
											<div className="before-info-dropdown">
												{' '}By{' '}
											</div>
											<span>
												<InfoDropdown
													user={track.publisher}
													users={track.suggested_publishers}
													infoType="publishers"
													length={2}
												>
													<Link to={`/publishers/${track.publisher_id}`}>
														{track.publisher.name}
													</Link>
												</InfoDropdown>

											</span>
										</div>
										<div className="curators-link">
											<div className="before-info-dropdown">
												Selected by
											</div>
											<InfoDropdown
												users={track.curators}
												infoType="curators"
												length={track.curators.length}
											>
												<a> {curatorsStr} </a>
											</InfoDropdown>
										</div>
									</div>
								: null}

						</div>

						<div className="metadata">

							<CountryBadge locations={track.locations} />

							<TrackBadge track={track} />
							<TagList tagList={track.top_tags.slice(0, 6)} />
						</div>

					</div>
				</div>

			</div>
		</div>
	);
};

export default TrackItem;
