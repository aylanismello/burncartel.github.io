import React from 'react';
import PropTypes from 'prop-types';
import {
	Grid,
	Container,
	Header,
	Icon,
	Divider,
	Segment
} from 'semantic-ui-react';
import BCFeedCover from '../shared/bc_feed_cover';

const urls = {
	'/mix': './assets/images/mix.png',
	'/latest': './assets/images/latest.png',
	'/remix': './assets/images/remix.png',
	'/bc_publishers': './assets/images/bc_publishers.png'
	// hmm is there a better way to do this than just hard coding track ids
};

// 'tags, future bass': './assets/images/futurebass.png',
// 'tags, future funk': './assets/images/futurefunk.png',
// 'tags, vaporwave': './assets/images/vaporwave.png',
// 'tags, baile': './assets/images/baile.png',
// 'locations, brazil': './assets/images/brazil.png',
// 'locations/1171': './assets/images/atlanta.png',
// 'locations/3110': './assets/images/paris.png',
// 'locations/3365': './assets/images/portugal.png'
const exploreFeeds = {
	tags: [
		{
			artworkUrl: './assets/images/futurebass.png',
			q: 'future bass'
		},
		{
			artworkUrl: './assets/images/futurefunk.png',
			q: 'future funk'
		},
		{
			artworkUrl: './assets/images/vaporwave.png',
			q: 'vaporwave'
		},
		{
			artworkUrl: './assets/images/baile.png',
			q: 'baile'
		}
	]
};

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

					<Grid divided="vertically">
						<Header as="h2">
							<Header.Content>The Latest</Header.Content>
						</Header>
						<Grid.Row columns={4}>
							{Object.keys(urls).slice(0, 4).map(url => (
								<Grid.Column>
									<BCFeedCover
										artworkUrl={urls[url]}
										linkUrl={url}
										handleFeedClick={() => {}}
									/>
								</Grid.Column>
							))}

						</Grid.Row>
						<Header as="h2">
							<Header.Content>Trending Genres</Header.Content>
						</Header>
						<Grid.Row columns={4}>
							{exploreFeeds.tags.map(tag => (
								<Grid.Column width={4}>
									<BCFeedCover
										artworkUrl={tag.artworkUrl}
										resource="tags"
										filters={{ q: tag.q }}
										handleFeedClick={() => {}}
									/>
								</Grid.Column>
							))}
						</Grid.Row>
						<Header as="h2">
							<Header.Content>Trending Locations</Header.Content>
						</Header>
						{/* <Grid.Row columns={4}>
							{Object.keys(urls).slice(8, 12).map(url => (
								<Grid.Column width={4}>
									<BCFeedCover
										artworkUrl={urls[url]}
										linkUrl={url}
										handleFeedClick={() => {}}
									/>
								</Grid.Column>
							))}
						</Grid.Row> */}
					</Grid>
				</Segment>
			</Container>
		);
	}
}

const { func } = PropTypes;
Home.propTypes = {
	updateFilters: func.isRequired
};

export default Home;
