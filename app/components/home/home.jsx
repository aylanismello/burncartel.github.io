import React from 'react';
import FeedContainer from '../feed/feed_container';
import { Link } from 'react-router-dom';
import { FEEDS } from '../../reducers/feed_reducer';


class Home extends React.Component {
	constructor(props) {
		super(props);
	}



	componentWillMount() {
		// this.props.setFeedType(FEEDS.FIRE);
		// this.props.updateFilters({sort: 'influential'});

		const sortType = this.props.history.location.pathname.slice(1);

		if(sortType === "") {
			this.props.updateFilters({ resource: 'tracks', sortType: 'influential' });
		} else {
			this.props.updateFilters({ resource: 'tracks', sortType });
		}


	}

	componentWillReceiveProps(nextProps) {
		if(this.props.pathname !== nextProps.pathname) {
			const sortType = nextProps.pathname.slice(1);


			if(sortType === "") {
				this.props.updateFilters({ resource: 'tracks', sortType: 'influential' });
			} else {
				this.props.updateFilters({ resource: 'tracks', sortType });
			}

		}
	}


	handleFilterChange(newFilter) {
		this.props.updateFilters(newFilter);
	}

	render() {

		return (
			<div className="container home-page-container">
				<div className="btn-group btn-group-justified" role="group" aria-label="Justified button group" >

					<Link to="/">
						<button className="btn btn-default"
						> Influential </button>
					</Link>

					<Link to="/bc">
						<button
							className="btn btn-default"
						> BC Selected </button>
					</Link>

					<Link to="/hot">
						<button
							className="btn btn-default"
						>
							Hot
						</button>
					</Link>

					{/* <button
						className="btn btn-default"
						onClick={this.handleFilterChange.bind(this, {remixed: 'remix'})}
					> Remixes
					</button>
					<button className="btn btn-default"
						onClick={this.handleFilterChange.bind(this, {track_type: 'mix'})}
						> Mixes </button> */}

					<Link to="/not">
						<button className="btn btn-default"
						> Unheard </button>
					</Link>
				</div>
				<FeedContainer />
			</div>
		);
	}
}

export default Home;
