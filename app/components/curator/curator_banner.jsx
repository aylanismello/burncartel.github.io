import React from 'react';
import Loading from '../loading';
import { Link } from 'react-router-dom';


const renderPublishers = (publishers) => {
	return publishers.map((publisher, idx) => (
		<div>
			<Link
				to={`/publishers/${publisher.id}`}
				key={`${publisher}-${idx}`}>
				{publisher.name}
			</Link>
		</div>
	));
}

const CuratorBanner = ({ user }) => {
	if(!user.top_publishers) {
		return (
			<div>
				<Loading />
			</div>
		)
	} else {
		return (
			<div
				className="thumbnail user-banner"
			>
				<h2> {user.name}</h2>
				<img src={user.avatar_url} />
				<h3> Most published artists </h3>
				{renderPublishers(user.top_publishers)}

			</div>
		)
	}
};

export default CuratorBanner;
