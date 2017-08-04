import React from 'react';
import { Link } from 'react-router-dom';
import { GoFlame } from 'react-icons/lib/go';
import * as FontAwesome from 'react-icons/lib/fa/';
import SideNavItem from './side_nav_item';
import BCLogo from '../shared/bc_logo';

const SideNavCaption = ({ text }) => (
	<div className="side-nav-item-caption">
		<span>
			{text}
		</span>
	</div>
);

const SideNav = props => {
	return (
		<div className="side-nav-container">

			<div className="fire-feed-brand-container">
			  <Link to="/">
			    <img src="../../assets/fire_feed_logo_1.png" alt="Fire Feed" />
				</Link>
			</div>

			<div className="side-nav">

				<Link to="/">
					<div className="side-nav-item">
						<FontAwesome.FaHome
							size={40}
							color="aliceblue"
							className="bc-icon"
						/>
						<SideNavCaption text="Home" />
					</div>
				</Link>

				<Link className="navbar-brand" to="/bc">
					<div className="side-nav-item">
						<div className="logo-container">
							<img src="../../assets/bc_small_1.png" alt="Burn Cartel" />
						</div>
						<SideNavCaption text="Curated" />
					</div>
				</Link>

				{props.currentUserId
					? <Link to="/me/likes">
							<div className="side-nav-item">
								<GoFlame size={40} color="aliceblue" className="bc-icon" />

								<SideNavCaption text="Likes" />
							</div>
						</Link>
					: null}

				{props.currentUserId
					? <Link to="/me/feed">
							<div className="side-nav-item">
								<FontAwesome.FaRssSquare
									size={40}
									color="aliceblue"
									className="bc-icon"
								/>

								<SideNavCaption text="My Feed" />
							</div>
						</Link>
					: null}

				{props.currentUserId
					? <Link to={`/me`}>
							<div className="side-nav-item">
								<FontAwesome.FaUser
									size={40}
									color="aliceblue"
									className="bc-icon"
								/>
								<SideNavCaption text="Account" />
							</div>
						</Link>
					: null}

				<Link to="/help">
					<div className="side-nav-item">
						<FontAwesome.FaQuestion
							size={40}
							color="aliceblue"
							className="bc-icon"
						/>
						<SideNavCaption text="Help" />
					</div>
				</Link>

			</div>
		</div>
	);
};

export default SideNav;
