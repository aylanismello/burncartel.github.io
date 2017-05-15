import React from 'react';
import { Link } from 'react-router-dom';
import { GoFlame } from 'react-icons/lib/go';
import * as FontAwesome from 'react-icons/lib/fa/';


const BottomNavPanel = ({ currentUserId, trackUrl }) => (
	<div className='bottom-nav-icons'>
    <Link to="/">
			<FontAwesome.FaHome
				size={40}
				color='aliceblue'
				className='bc-icon'
				/>
		</Link>

		<Link className="navbar-brand" to="/bc">
			<div className="logo-container">
				<img src="../../assets/bc_small_1.png" alt="Burn Cartel"/>
			</div>
		</Link>
		{/* <a target="_" href={trackUrl}>
			<FontAwesome.FaHome
				size={40}
				color='aliceblue'
				className='bc-icon'
				/>
		</a> */}
		{currentUserId ?
				<Link
					to={`/likes/${currentUserId}`}
				>
						<FontAwesome.FaUser
							size={37}
							color='aliceblue'
							className='bc-icon'
							/>
				</Link> : null}
	</div>
);

export default BottomNavPanel;
