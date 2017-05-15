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
						<FontAwesome.FaList
							size={40}
							color='aliceblue'
							className='bc-icon'
							/>
				</Link> : null}
	</div>
);

export default BottomNavPanel;
