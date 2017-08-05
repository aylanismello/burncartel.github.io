import React from 'react';
import { Link } from 'react-router-dom';
import IconLink from '../shared/icon_link';

const FireFeedBrand = () => (
	<div className="fire-feed-brand-container">
		<div className="fire-feed-brand">
			<Link to="/">
				<img src="../../assets/fire_feed_logo_1.png" alt="Fire Feed" />
			</Link>
		</div>

		<div className="follow-bc-container">

			<div className="follow-bc-description">
				<h6> Follow us <span role="img">❤️</span> </h6>
			</div>

			<IconLink service="soundcloud" href="https://soundcloud.com/burncartel" />

			<IconLink
				service="instagram"
				href="https://www.instagram.com/burncartel/"
			/>

			<IconLink service="twitter" href="https://twitter.com/burncartel" />

			<IconLink service="facebook" href="https://www.facebook.com/burncartel" />

			{/* <IconLink
        service="youtube"
        href="https://www.youtube.com/channel/UCjh4Lhu8TufiMza5YmkSMgA"
      /> */}
		</div>

	</div>
);

export default FireFeedBrand;
