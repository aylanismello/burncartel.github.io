import React from 'react';
import { Link } from 'react-router';
import TrackItem from './track_item';

class Feed extends React.Component {

	constructor(props) {
		super(props);
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log(nextProps.filters)
	// }

	shouldComponentUpdate(nextProps) {
		return true;
	}

	componentWillUpdate(nextProps) {
		// debugger;
		console.log(nextProps.filters);
	}

	render() {

		const {
			tracks,
			handleTrackUpdate
		} = this.props;

		let childElements;

		if(Object.keys(tracks).length === 0) {
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
				{childElements}
			</div>
		);
	}

}

export default Feed;
