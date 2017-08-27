import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../shared/loading';
import FeedContainer from '../feed/feed_container';

class SearchShow extends React.Component {
	componentWillMount() {
		// fuck with resource_type later when we could look up regex stuffz
		// alert(`q is ${q}`);
		const { q, resource_type } = this.props;
		this.props.updateFilters({
			resource: 'search',
			q,
			resource_type: resource_type || 'track'
		});
		this.state = {
			loadingAnotherSearch: false
		};
	}

	componentWillReceiveProps(nextProps) {
		if (
			nextProps.q !== this.props.q ||
			nextProps.resource_type !== this.props.resource_type
		) {
			this.setState({ loadingAnotherSearch: true });
			this.props.updateFilters({
				resource: 'search',
				q: nextProps.q,
				resource_type: nextProps.resource_type
			});
		}

		if (this.props.loadingFeed && !nextProps.loadingFeed) {
			this.setState({ loadingAnotherSearch: false });
		}
	}

	getButtonStyle(resourceType) {
		if (resourceType === this.props.resource_type) {
			return { fontWeight: 'bold' };
			// return {};
		} else {
			return {};
		}
	}

	selectNewResourceType(resourceType) {
		window.location = `/#search?q=${this.props.q}&resource_type=${resourceType}`;
	}

	renderResourceFilters() {
		return (
			<div className="search-type-container">
				<span
					className="search-type"
					onClick={() => this.selectNewResourceType('track')}
					style={this.getButtonStyle('track')}
				>
					&gt;
					{' '}SONGS{' '}
				</span>
				<span
					className="search-type"
					onClick={() => this.selectNewResourceType('publisher')}
					style={this.getButtonStyle('publisher')}
				>
					&gt;
					{' '}PUBLISHERS{' '}
				</span>
				<span
					className="search-type"
					onClick={() => this.selectNewResourceType('curator')}
					style={this.getButtonStyle('curator')}
				>
					&gt;
					{' '}CURATORS{' '}
				</span>
				<span
					className="search-type"
					onClick={() => this.selectNewResourceType('location')}
					style={this.getButtonStyle('location')}
				>
					&gt;
					{' '}LOCATIONS{' '}
				</span>
				<span
					className="search-type"
					onClick={() => this.selectNewResourceType('tag')}
					style={this.getButtonStyle('tag')}
				>
					&gt;
					{' '}TAGS{' '}
				</span>
			</div>
		);
	}

	render() {
		if (
			(this.props.loadingFeed && !this.props.tracksPage) ||
			this.state.loadingAnotherSearch
		) {
			return (
				<div className="container">
					<h2>
						{' '}
						results for
						{' '}
						<span style={{ fontWeight: 'bold' }}> {this.props.q} </span>
					</h2>
					{this.renderResourceFilters()}
					<Loading />
				</div>
			);
		} else if (this.props.hasSearchResults) {
			return (
				<div className="container track-show">
					<h2>
						{' '}
						results for
						{' '}
						<span style={{ fontWeight: 'bold' }}> {this.props.q} </span>
					</h2>
					{this.renderResourceFilters()}
					<FeedContainer />
				</div>
			);
		} else {
			// has no search results :(
			return (
				<div className="container track-show">
					<div className="search-type-container">
						<h2>
							nothing found for
							{' '}
							<span style={{ fontWeight: 'bold' }}> {this.props.q} </span>
							{' '}
							😭
						</h2>
						{this.renderResourceFilters()}
					</div>
				</div>
			);
		}
	}
}

SearchShow.propTypes = {
	q: PropTypes.string.isRequired,
	resource_type: PropTypes.string.isRequired,
	updateFilters: PropTypes.func.isRequired,
	loadingFeed: PropTypes.bool.isRequired,
	tracksPage: PropTypes.number.isRequired,
	hasSearchResults: PropTypes.bool.isRequired
};

export default SearchShow;
