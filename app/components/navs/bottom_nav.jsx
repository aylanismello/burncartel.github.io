import React from 'react';
import { Link } from 'react-router';
import * as FontAwesome from 'react-icons/lib/fa/';
import BurnCartelPlayerContainer from '../burn_cartel_player/burn_cartel_player_container';



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
		<FontAwesome.FaHeart
			size={30}
			color='aliceblue'
					className='bc-icon'
			/>
		<FontAwesome.FaSearch
			size={30}
			color='aliceblue'
					className='bc-icon'
			/>
	</div>
);

const BottomNav = () => {
	return (
		<nav className="navbar navbar-toggleable-md navbar-inverse fixed-bottom bg-inverse bc-menu">

		{/*  This should dynamically appear upon the first song played??? */}
		<BurnCartelPlayerContainer />

		{/* https://gorangajic.github.io/react-icons/fa.html */}

			{/* <Link
				to="/">
				<FontAwesome.FaHome
				size={30}
				color='aliceblue'
				className='bc-icon'
				/>
			</Link> */}
			<BottomNavIcons />


		</nav>

	);
};

export default BottomNav;
