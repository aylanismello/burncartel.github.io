import React from 'react';
// import Dropdown from 'react-dropdown';
import { Grid, Container, Image, Header, Icon } from 'semantic-ui-react';
import BCFeedCover from '../shared/bc_feed_cover';

const urls = {
	mix: './assets/images/mix.png',
	latest: './assets/images/latest.png',
	remix: './assets/images/remix.png',
	bc_publishers: './assets/images/bc_publishers.png',
	// radio episodes
	bc: './assets/images/bc.png'
};

class Home extends React.Component {
	render() {
		return (
			<Container>
				<Header as="h1">
					<Icon name="plug" />
					<Header.Content>Explore</Header.Content>
				</Header>

				<Grid>
					<Grid.Row columns={4}>
						{Object.keys(urls).slice(0, 4).map(url =>
							(<Grid.Column>
								<BCFeedCover artworkUrl={urls[url]} handleFeedClick={() => {}} />
								{/* <Image
									inline
									src={urls[url]}
									href={`/#/${url}`}
									width="200px"
									spaced
									className="bc-feed-cover"
								/> */}
							</Grid.Column>)
						)}
					</Grid.Row>
					{/* <Grid.Row columns={4}>
						{Object.keys(urls).slice(4, 5).map(url =>
							(<Grid.Column width={4}>
								<Image inline src={urls[url]} href={`/#/${url}`} width="200px" spaced />
							</Grid.Column>)
						)}
					</Grid.Row> */}
				</Grid>
			</Container>
		);
	}
}

export default Home;
