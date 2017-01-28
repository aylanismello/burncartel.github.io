import React from 'react';
import { Link } from 'react-router';
import TrackItem from './track_item';
import BurnCartelPlayer from './burn_cartel_player';

class Feed extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		// console.log(nextProps.filters);
		// if (this.props.trackId !== nextProps.trackId) {
		// 	alert('changed track!');
		// }
	}

	render() {

		const {
			tracks,
			handleTrackUpdate
		} = this.props;

		let childElements;

		if(this.props.loadingFeed) {
			childElements = (
				<div>
					<h1>
						LOADING
					</h1>
				</div>
			);
		} else {
			childElements = Object.keys(tracks).map((track, idx) => (
				<TrackItem
					track={tracks[track]}
					handleTrackUpdate={handleTrackUpdate}
					idx={idx}
					key={idx}
				/>
			));

		}
		return (
			<div className="feed-container">
				<h2> holler </h2>

				{childElements}
			</div>
		);
	}

}

export default Feed;
