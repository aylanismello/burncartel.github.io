import React from 'react';
import { Link } from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa/';
import { GoFlame } from 'react-icons/lib/go';
import FireFeedBrand from './fire_feed_brand';

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

			<FireFeedBrand />

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

				<div className="navbar-brand-container">
					<Link className="navbar-brand" to="/bc">
						<div className="side-nav-item">
							<div className="logo-container">
								<img src="../../assets/bc_small_1.png" alt="Burn Cartel" />
							</div>
							<SideNavCaption text="Curated" />
						</div>
					</Link>


				</div>

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
								<FontAwesome.FaSpaceShuttle
									size={40}
									color="aliceblue"
									className="bc-icon"
								/>

								<SideNavCaption text="Smart Feed" />
							</div>
						</Link>
					: null}

				{/* {props.currentUserId
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
					: null} */}

				<Link to="/traveler">
					<div className="side-nav-item">
						<FontAwesome.FaGlobe
							size={40}
							color="aliceblue"
							className="bc-icon"
						/>
						<SideNavCaption text="Traveler" />
					</div>
				</Link>

			</div>
		</div>
	);
};

export default SideNav;
