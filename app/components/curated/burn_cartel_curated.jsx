import React from 'react';
import FeedContainer from '../feed/feed_container';

class BurnCartelCurated extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.setBcFeed();
	}

	render() {
		return (
			<div className="home-page-container">
        <h1> Welcome to Burn Cartel - Curated ! </h1>
				<FeedContainer />
			</div>
		);
	}
};

export default BurnCartelCurated;
