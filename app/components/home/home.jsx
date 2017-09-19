import React from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	Header,
	Icon,
	Divider,
	Segment
} from 'semantic-ui-react';
import ExplorePanel from './explore_panel';

class Home extends React.Component {
	componentWillMount() {
		this.props.updateFilters({ resource: 'playlists' });
	}

	render() {
		return (
			<Container>
				<Segment padded basic>
					<Header as="h1">
						<Icon name="plug" />
						<Header.Content>Explore</Header.Content>
					</Header>

					<Divider section />
					{this.props.playlists
						? <ExplorePanel playlists={this.props.playlists} />
						: null}
				</Segment>
			</Container>
		);
	}
}

const { func, instanceOf, objectOf } = PropTypes;
Home.propTypes = {
	updateFilters: func.isRequired,
	playlists: objectOf(instanceOf(Array))
};

export default Home;
