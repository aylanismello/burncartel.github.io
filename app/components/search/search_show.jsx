import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../shared/loading';
import FeedContainer from '../feed/feed_container';

class SearchShow extends React.Component {
	componentWillMount() {
		// fuck with resource_type later when we could look up regex stuffz
		// alert(`q is ${q}`);
		this.props.updateFilters({ resource: 'search', q: this.props.q });
		this.state = {
			loadingAnotherSearch: false
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.q !== this.props.q) {
			this.setState({ loadingAnotherSearch: true });
			this.props.updateFilters({ resource: 'search', q: this.props.q });
		}

		if (this.props.loadingFeed && !nextProps.loadingFeed) {
			this.setState({ loadingAnotherSearch: false });
		}
	}

	render() {
		if (
			(this.props.loadingFeed && !this.props.tracksPage) ||
			this.state.loadingAnotherSearch
		) {
			return <Loading />;
		} else {
			return (
				<div className="container track-show">
					<FeedContainer />
				</div>
			);
		}
	}
}

React.propTypes = {
	q: PropTypes.string.isRequired,
	updateFilters: PropTypes.func.isRequired,
	loadingFeed: PropTypes.bool.isRequired,
	tracksPage: PropTypes.number.isRequired
};

export default SearchShow;
