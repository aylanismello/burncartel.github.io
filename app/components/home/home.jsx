import React from 'react';
import FeedContainer from '../feed/feed_container';
import { FEEDS } from '../../reducers/feed_reducer';


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 0
		};
	}

	componentWillMount() {
		this.props.setFeedType(FEEDS.FIRE);
		this.props.updateFilters({sort: 'influential'});
	}

	handleFilterChange(newFilter) {
		this.props.updateFilters(newFilter);
	}

	render() {

		return (
			<div className="container home-page-container">
				<div className="btn-group btn-group-justified" role="group" aria-label="Justified button group" >
					<button className="btn btn-default"
					onClick={this.handleFilterChange.bind(this, {sort: 'influential'})}
					> Influential </button>
					<button
						className="btn btn-default"
						onClick={this.handleFilterChange.bind(this, {sort: 'bc'})}
					> BC Selected </button>

					<button
						className="btn btn-default"
						onClick={this.handleFilterChange.bind(this, {sort: 'hot'})}
					>
						Hot
					</button>

					<button
						className="btn btn-default"
						onClick={this.handleFilterChange.bind(this, {remixed: 'remix'})}
					> Remixes
					</button>
					<button className="btn btn-default"
						onClick={this.handleFilterChange.bind(this, {track_type: 'mix'})}
						> Mixes </button>
					<button className="btn btn-default"
						onClick={this.handleFilterChange.bind(this, {sort: 'not'})}
					> Unheard </button>
				</div>
				<FeedContainer />
			</div>
		);
	}
}

export default Home;
