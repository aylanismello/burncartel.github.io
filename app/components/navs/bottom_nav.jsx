import React from 'react';
import { Link } from 'react-router-dom';
import { GoFlame } from 'react-icons/lib/go';
import * as FontAwesome from 'react-icons/lib/fa/';
import MediaQuery from 'react-responsive';
import BurnCartelPlayerContainer
	from '../burn_cartel_player/burn_cartel_player_container';
import BottomNavPanel from './bottom_nav_panel';
import { FEEDS } from '../../reducers/feed_reducer';

const BottomNav = ({ currentUserId, trackUrl, currentUserPhotoUrl }) => {
	return (
		<nav className="navbar navbar-toggleable-md navbar-inverse fixed-bottom bg-inverse bc-menu">

			<BurnCartelPlayerContainer />

			<MediaQuery query="(max-device-width: 450px)">
				<BottomNavPanel
					trackUrl={trackUrl}
					currentUserId={currentUserId}
					currentUserPhotoUrl={currentUserPhotoUrl}
				/>
			</MediaQuery>
		</nav>
	);
};

export default BottomNav;
