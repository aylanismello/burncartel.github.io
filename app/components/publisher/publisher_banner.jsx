import React from 'react';


const renderHandles = (handles) => {
	return handles.map((handle, idx) => (
		<div key={idx}>
			<a target="_" href={handle.url}>{handle.service}</a>
		</div>
	));
};

const PublisherBanner = ({ user }) => {
	return (
		<div
			className="thumbnail track-banner"
		>
			<h2> {user.name}</h2>
			<img src={user.avatar_url} />
			{renderHandles(user.handles)}
		</div>
	);
};

export default PublisherBanner;
