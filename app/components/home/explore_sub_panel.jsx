import React from 'react';
import { Grid } from 'semantic-ui-react';
import Slider from 'react-slick';
import BCFeedCover from '../shared/bc_feed_cover';

const settings = {
	infinite: false,
	speed: 500,
	autoplay: false,
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		},
		{ breakpoint: 1000, settings: { slidesToShow: 3, slidesToScroll: 3 } },
		{ breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } }
	]
};

const ExplorePanel = ({ playlistType, type }) => {
	// debugger;
	return (
		<Slider className="explore-panel-slider" {...settings}>
			{playlistType.map(playlist => (
				<BCFeedCover
					artworkUrl={playlist.photo ? playlist.photo.small : ''}
					linkUrl={`/playlists/${playlist.id}`}
					filters={{ q: playlist.q }}
					handleFeedClick={() => {}}
				/>
			))}
		</Slider>
	);
};

export default ExplorePanel;
