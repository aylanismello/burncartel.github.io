import React from 'react';
import { Grid } from 'semantic-ui-react';
import ExploreSubPanel from './explore_sub_panel';

const playlistKeys = ['CUSTOM', 'TAG', 'LOCATION'];

const ExplorePanel = ({ playlists }) => {
	return (
		<Grid divided="vertically">
			{playlistKeys.map(playlistType => (
				<ExploreSubPanel
					key={playlistType}
					playlistType={playlists[playlistType]}
					type={playlistType}
				/>
			))}
		</Grid>
	);
};

export default ExplorePanel;
