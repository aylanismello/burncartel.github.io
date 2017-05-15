import React from 'react';
import { Link } from 'react-router-dom';
import { GoFlame } from 'react-icons/lib/go';
import * as FontAwesome from 'react-icons/lib/fa/';
import MediaQuery from 'react-responsive';
import BurnCartelPlayerContainer from '../burn_cartel_player/burn_cartel_player_container';
import BottomNavPanel from './bottom_nav_panel';
import { FEEDS } from '../../reducers/feed_reducer';


const BottomNav = ({ currentUserId, trackUrl }) => {

	return (
		<nav className="navbar navbar-toggleable-md navbar-inverse fixed-bottom bg-inverse bc-menu">

			<BurnCartelPlayerContainer />

			<BottomNavPanel
				trackUrl={trackUrl}
				currentUserId={currentUserId}
			/>

      <MediaQuery query='(max-device-width: 450px)'>
        {/* <div>You are using a phone!</div> */}
			</MediaQuery>
      <MediaQuery query='(min-device-width: 451px)'>
        {/* <div>You are using a laptop or tablet!</div> */}
			</MediaQuery>

		</nav>

	);
};

export default BottomNav;
