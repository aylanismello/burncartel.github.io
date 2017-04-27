import React from 'react';
import { Link } from 'react-router-dom';

const renderHandles = (handles) => {
	return handles.map((handle, idx) => (
		<div key={idx}>
			<a target="_" href={handle.url}>{handle.service}</a>
		</div>
	));
};

const renderCurators = (curators) => {
	return curators.map((curator, idx) => (
		<div>
			<Link
				to={`/curators/${curator.id}`}
				key={`${curator}-${idx}`}>
				{curator.name}
			</Link>
		</div>
	));
}

const PublisherBanner = ({ user }) => {
	return (
		<div
			className="thumbnail track-banner"
		>
			<h2> {user.name}</h2>
			<img src={user.avatar_url} />
			{renderHandles(user.handles)}
			<h3> Selected by </h3>
			{renderCurators(user.uniq_curators)}
		</div>
	);
};

export default PublisherBanner;
