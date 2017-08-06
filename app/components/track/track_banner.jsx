import React from 'react';
import { Link } from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa/';
import TagList from '../shared/tag_list';
import TrackBadge from '../shared/track_badge';
import BCAlbumArt from '../shared/bc_album_art';

const maxTitleLength = 72;
const formatName = name => (name.length < maxTitleLength ? name : `${name.slice(0, maxTitleLength)}...`);

const TrackBanner = ({
	track,
	playingTrackId,
	playing,
	trackLoaded,
	handleTrackClick,
	children
}) => {
	// for some reasion FireLike size must be set in CSS*
	return (
		<div className="thumbnail track-banner">
			<div className="left-side">

				<div className="track-title-container">
					<h2 className="track-title"> {formatName(track.name)} </h2>
				</div>

				<Link to={`/publishers/${track.publisher.id}`}>
					<h3 className="clickable-banner-metadata">{track.publisher.name} </h3>
					{' '}
				</Link>

				<BCAlbumArt
					trackId={track.id}
					playingTrackId={playingTrackId}
					trackLoaded={trackLoaded}
					playing={playing}
					handleTrackClick={() => handleTrackClick(track.id, 'play')}
					track={track}
				/>

			</div>
			<div className="right-side">
				<TagList tagList={track.top_tags.slice(0, 5)} />

				<TrackBadge track={track} size={20} />

				<div className="track-banner-icons-container">
					<div className="track-item-icon">
						<a href={track.permalink_url} target="_blank">
							<FontAwesome.FaSoundcloud
								size={43}
								color="aliceblue"
								className="soundcloud-png"
							/>
						</a>
					</div>

					{children}
				</div>
			</div>
		</div>
	);
};

export default TrackBanner;
