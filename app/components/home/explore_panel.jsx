import React from 'react';
import { Divider } from 'semantic-ui-react';
import ExploreSubPanel from './explore_sub_panel';

const playlistKeys = ['CUSTOM', 'TAG', 'LOCATION'];

const ExplorePanel = ({ playlists }) => {
	return (
		<div className="explore-panel">
			{playlistKeys.map(playlistType => (
				<div>
					<Divider section />
					<h2> {playlistType}</h2>
					<ExploreSubPanel
						key={playlistType}
						playlistType={playlists[playlistType]}
						type={playlistType}
					/>
				</div>
			))}
		</div>
	);
};

export default ExplorePanel;
