import React from 'react';
// import Dropdown from 'react-dropdown';
import { Grid, Container, Image } from 'semantic-ui-react';
import FeedContainer from '../feed/feed_container';

const urls = {
	liked: './assets/bc_radio_episode_14_cover.png',
	latest: './assets/bc_radio_episode_12_cover.png',
	remix: './assets/bc_radio_episode_11_cover.png',
	bc_publishers: './assets/bc_radio_episode_10_cover.png'
};

class Home extends React.Component {
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

	onSelect(e) {
		this.props.history.push(e.value);
	}

	render() {
		const options = [
			{ value: '/', label: 'Popular' },
			{ value: '/liked', label: 'Most Liked' },
			{ value: '/latest', label: 'Latest' },
			{ value: '/bc_publishers', label: 'BC Picks' },
			// { value: '/hot', label: 'Hot' },
			{ value: '/remix', label: 'Remixes' },
			{ value: '/mix', label: 'Mixes' }
		];

		let hasRanking = true;
		let value;
		// make exceptional case for Burn Cartel Radio mode filter, this is a hack for now
		if (this.props.location.pathname === '/bc') {
			hasRanking = false;
		} else {
			value = options.filter(
				option => option.value === this.props.location.pathname
			)[0];
		}

		return (
			<div className="container home-page-container">
				{/* <div
					className="btn-group btn-group-justified"
					role="group"
					aria-label="Justified button group"
				>

					{hasRanking
						? <div className="feed-banner">
								<div className="feed-name">
									<h3> {value.label} Feed </h3>
								</div>

								<Dropdown
									options={options}
									onChange={e => this.onSelect(e)}
									value={value}
									placeholder="🔥 Select a feed 🔥"
								/>
							</div>
						: <div className="feed-banner">
								<div className="feed-name">
									<h2> 💻 BC Radio 📻 </h2>
								</div>
							</div>}

				</div> */}

				<Grid columns={4} centered>
					<Grid.Row>
						{Object.keys(urls).map(url => (
							<Grid.Column width={16}>
								{/* <Image inline src={url} width="200px" spaced /> */}
								<Image
									className="bc-feed-cover"
									src={url}
									href={`/#/${urls[url]}`}
									width="200px"
									spaced
								/>
							</Grid.Column>
						))}
					</Grid.Row>
				</Grid>
				<FeedContainer hasRanking={hasRanking} />
			</div>
		);
	}
}

export default Home;
