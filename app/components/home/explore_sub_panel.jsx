import React from 'react';
import { Grid } from 'semantic-ui-react';
import BCFeedCover from '../shared/bc_feed_cover';

const ExplorePanel = ({ playlistType, type }) => {
	return (
		<Grid.Row columns={4}>
			{playlistType.map(playlist => (
				<Grid.Column width={4}>
					<BCFeedCover
						artworkUrl={`/assets/images/${playlist.artwork_url}`}
						linkUrl={`/playlists/${playlist.id}`}
						filters={{ q: playlist.q }}
						handleFeedClick={() => {}}
					/>
				</Grid.Column>
			))}
		</Grid.Row>
	);
};

export default ExplorePanel;
