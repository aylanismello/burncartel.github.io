import React from 'react';
import { Link } from 'react-router-dom';
import { GoFlame } from 'react-icons/lib/go';
import * as FontAwesome from 'react-icons/lib/fa/';
import MediaQuery from 'react-responsive';
import BurnCartelPlayerContainer from '../burn_cartel_player/burn_cartel_player_container';
import { FEEDS } from '../../reducers/feed_reducer';


const BottomNav = ({ currentUserId, trackUrl }) => {

	const BottomNavIcons = () => (
		<div className='bottom-nav-icons'>
			<a target="_" href={trackUrl}>
				<FontAwesome.FaSoundcloud
					size={40}
					color='aliceblue'
					className='bc-icon'
					/>
			</a>
			{/* <FontAwesome.FaGlobe
				size={30}
				color='aliceblue'
						className='bc-icon'
			/> */}
			{currentUserId ?
					<Link
						to={`/likes/${currentUserId}`}
					>
							<GoFlame
								size={34}
								color='aliceblue'
								className='bc-icon'
								/>
					</Link> : null}


			{/* <FontAwesome.FaSearch
				size={30}
				color='aliceblue'
						className='bc-icon'
				/> */}
		</div>
	);

	return (
		<nav className="navbar navbar-toggleable-md navbar-inverse fixed-bottom bg-inverse bc-menu">

			<BurnCartelPlayerContainer />

			<BottomNavIcons />
			<div>
      <MediaQuery query='(max-device-width: 450px)'>
        {/* <div>You are using a phone!</div> */}
			</MediaQuery>
      <MediaQuery query='(min-device-width: 451px)'>
        {/* <div>You are using a laptop or tablet!</div> */}
			</MediaQuery>
    </div>

		</nav>

	);
};

export default BottomNav;
