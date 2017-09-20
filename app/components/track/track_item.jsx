import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Segment, Image, Grid } from 'semantic-ui-react';
import * as FontAwesome from 'react-icons/lib/fa/';
import { dateToTimeAgo } from '../../util/helpers';
import FireLike from '../likes/fire_like';
import TagList from '../shared/tag_list';
import TrackBadge from '../shared/track_badge';
import CountryBadges from '../shared/country_badges';
import BCAlbumArt from '../shared/bc_album_art';
import InfoDropdown from '../shared/info_dropdown';

const shortenLongWordsInTitle = (title) => {
	const formattedTitle = title.split(' ').map((word) => {
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
		<Segment>
			<Grid className="track-container">
				<Grid.Column className="track" width={3}>
					<Grid>
						<Grid.Row>
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
						</Grid.Row>
						<Grid.Row>
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
										<FontAwesome.FaSoundcloud size={35} color="black" className="soundcloud-png" />
									</a>
								</div>
							</div>
						</Grid.Row>
					</Grid>
				</Grid.Column>
				{/* </div> */}

				{/* <div className="right-side"> */}
				<Grid.Column width={13}>
					<Grid className="right-side">
						<Grid.Row className="caption">
							<Grid>
								<Grid.Row>
									<Link to={`/tracks/${track.id}`}>
										<h3 className="track-title">
											{shortenLongWordsInTitle(track.name)}
										</h3>
									</Link>
								</Grid.Row>

								{hasRanking
									? <div>
										<Grid.Row>
											<div className="curators-link" style={{ display: 'flex' }}>
												<div className="before-info-dropdown" style={{ marginRight: '.3em' }}>
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
										</Grid.Row>
										<Grid.Row>
											<div className="curators-link" style={{ display: 'flex' }}>
												<div className="before-info-dropdown" style={{ marginRight: '.3em' }}>
														Selected by
													</div>
												<InfoDropdown
														users={track.curators}
														infoType="curators"
														length={track.curators.length}
												>
													<a>
														{' '}{curatorsStr}{' '}
													</a>
												</InfoDropdown>
											</div>
										</Grid.Row>
									</div>
									: null}
								<Grid.Row>
									{`${dateToTimeAgo(track.created_at_external)} old`}
								</Grid.Row>
							</Grid>
						</Grid.Row>

						<Grid.Row className="metadata">
							<CountryBadges locations={track.locations} />

							<TrackBadge track={track} />
							<TagList tagList={track.top_tags.slice(0, 6)} />
						</Grid.Row>
					</Grid>
				</Grid.Column>
			</Grid>
		</Segment>
	);
};

TrackItem.propTypes = {
	track: PropTypes.object.isRequired,
	handleTrackClick: PropTypes.func.isRequired,
	playing: PropTypes.bool.isRequired,
	trackId: PropTypes.number.isRequired,
	trackLoaded: PropTypes.bool.isRequired,
	trackIdx: PropTypes.number.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
	loginFB: PropTypes.func.isRequired,
	likeUnlikeTrack: PropTypes.func.isRequired,
	isLikedByUser: PropTypes.bool.isRequired,
	likePostInProgress: PropTypes.bool.isRequired,
	playingTrackId: PropTypes.number.isRequired,
	hasRanking: PropTypes.bool
};

TrackItem.defaultProps = {
	hasRanking: true
};

export default TrackItem;
