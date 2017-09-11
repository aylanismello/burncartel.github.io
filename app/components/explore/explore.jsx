import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedContainer from '../feed/feed_container';

class Explore extends Component {
	componentWillMount() {
		const sortType = this.props.history.location.pathname.slice(1);

		if (sortType === '') {
			this.props.updateFilters({
				resource: 'tracks',
				sortType: 'influential'
			});
		} else {
			this.props.updateFilters({
				resource: 'tracks',
				sortType
			});
		}
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.pathname !== nextProps.pathname) {
			const sortType = nextProps.pathname.slice(1);

			if (sortType === '') {
				this.props.updateFilters({
					resource: 'tracks',
					sortType: 'influential'
				});
			} else {
				this.props.updateFilters({
					resource: 'tracks',
					sortType
				});
			}
		}
	}

	render() {
		// 		const options = [
		// 			{ value: '/', label: 'Popular' },
		// 			{ value: '/liked', label: 'Most Liked' },
		// 			{ value: '/latest', label: 'Latest' },
		// 			{ value: '/bc_publishers', label: 'BC Picks' },
		// 			// { value: '/hot', label: 'Hot' },
		// 			{ value: '/remix', label: 'Remixes' },
		// 			{ value: '/mix', label: 'Mixes' }
		// 		];
		//
		// 		let hasRanking = true;
		// 		let value;
		// 		// make exceptional case for Burn Cartel Radio mode filter, this is a hack for now
		// 		if (this.props.location.pathname === '/bc') {
		// 			hasRanking = false;
		// 		} else {
		// 			value = options.filter(option => option.value === this.props.location.pathname)[0];
		// 		}
		return (
			<div className="container">
				<FeedContainer />
			</div>
		);
	}
}

const { func, string } = PropTypes;

Explore.propTypes = {
	updateFilters: func.isRequired,
	pathname: string.isRequired
};

export default Explore;
