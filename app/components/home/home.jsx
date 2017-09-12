import React from 'react';
import { Grid, Container, Header, Icon, Divider, Segment } from 'semantic-ui-react';
import BCFeedCover from '../shared/bc_feed_cover';

const urls = {
	'/mix': './assets/images/mix.png',
	'/latest': './assets/images/latest.png',
	'/remix': './assets/images/remix.png',
	'/bc_publishers': './assets/images/bc_publishers.png',
	// hmm is there a better way to do this than just hard coding track ids
	'/tags/94': './assets/images/futurebass.png',
	'/tags/3224': './assets/images/futurefunk.png',
	'/tags/990': './assets/images/vaporwave.png',
	'/tags/296': './assets/images/baile.png',
	'/traveler/508': './assets/images/brazil.png',
	'/traveler/1171': './assets/images/atlanta.png',
	'/traveler/3110': './assets/images/paris.png',
	'/traveler/3365': './assets/images/portugal.png'
};

class Home extends React.Component {
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
							{Object.keys(urls).slice(0, 4).map(url =>
								(<Grid.Column>
									<BCFeedCover artworkUrl={urls[url]} linkUrl={url} handleFeedClick={() => {}} />
								</Grid.Column>)
							)}
						</Grid.Row>
						<Header as="h2">
							<Header.Content>Trending Genres</Header.Content>
						</Header>
						<Grid.Row columns={4}>
							{Object.keys(urls).slice(4, 8).map(url =>
								(<Grid.Column width={4}>
									<BCFeedCover artworkUrl={urls[url]} linkUrl={url} handleFeedClick={() => {}} />
								</Grid.Column>)
							)}
						</Grid.Row>
						<Header as="h2">
							<Header.Content>Trending Locations</Header.Content>
						</Header>
						<Grid.Row columns={4}>
							{Object.keys(urls).slice(8, 12).map(url =>
								(<Grid.Column width={4}>
									<BCFeedCover artworkUrl={urls[url]} linkUrl={url} handleFeedClick={() => {}} />
								</Grid.Column>)
							)}
						</Grid.Row>
					</Grid>
				</Segment>
			</Container>
		);
	}
}

export default Home;
