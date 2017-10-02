import React from 'react';
import { Link } from 'react-router-dom';
import { GoFlame } from 'react-icons/lib/go';
import * as FontAwesome from 'react-icons/lib/fa/';
import { Menu } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';
import BurnCartelPlayerContainer from '../burn_cartel_player/burn_cartel_player_container';
import BottomNavPanel from './bottom_nav_panel';
import { FEEDS } from '../../reducers/feed_reducer';

const BottomNav = ({ currentUserId, trackUrl, currentUserPhotoUrl }) => {
	return (
		<nav className="bg-inverse bc-menu">
		{/* <Menu
			fixed="bottom"
			className="bg-inverse bc-menu"
		> */}
			<BurnCartelPlayerContainer />

			<MediaQuery query="(max-device-width: 450px)">
				<BottomNavPanel
					trackUrl={trackUrl}
					currentUserId={currentUserId}
					currentUserPhotoUrl={currentUserPhotoUrl}
				/>
			</MediaQuery>
			{/* </Menu> */}
		</nav>
	);
};

export default BottomNav;
