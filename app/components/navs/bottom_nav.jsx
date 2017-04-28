import React from 'react';
import { Link } from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa/';
import BurnCartelPlayerContainer from '../burn_cartel_player/burn_cartel_player_container';
import { FEEDS } from '../../reducers/feed_reducer';

const BottomNav = ({ currentUserId }) => {

	const BottomNavIcons = () => (
		<div className='bottom-nav-icons'>
			<FontAwesome.FaSoundcloud
				size={30}
				color='aliceblue'
				className='bc-icon'
				/>
			<FontAwesome.FaGlobe
				size={30}
				color='aliceblue'
						className='bc-icon'
			/>
			{currentUserId ?  <Link
							to={`/likes/${currentUserId}`}
						>
							<FontAwesome.FaHeart
								size={30}
								color='aliceblue'
										className='bc-icon'
								/>
						</Link> : null}


			<FontAwesome.FaSearch
				size={30}
				color='aliceblue'
						className='bc-icon'
				/>
		</div>
	);

	return (
		<nav className="navbar navbar-toggleable-md navbar-inverse fixed-bottom bg-inverse bc-menu">

		{/*  This should dynamically appear upon the first song played??? */}
		<BurnCartelPlayerContainer />

		<BottomNavIcons />

		</nav>

	);
};

export default BottomNav;
