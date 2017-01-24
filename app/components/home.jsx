import React from 'react';
import FeedContainer from './feed_container';

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.updateFilters({curator: -1, sort: 'influential'});
	}

	render() {
		return (
			<FeedContainer />
		);
	}
}

export default Home;
