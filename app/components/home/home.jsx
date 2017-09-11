import React from 'react';
import Dropdown from 'react-dropdown';
import { Grid, Container, Image } from 'semantic-ui-react';
import FeedContainer from '../feed/feed_container';

const urls = [
	'https://static1.squarespace.com/static/57f5390f5016e1da21c4bbdf/582a29c215d5dbb8582d3d2d/59834d5ccd0f6841623bb870/1501777245342/Ways08.1200-showcase.jpg',
	'https://static1.squarespace.com/static/57f5390f5016e1da21c4bbdf/582a29c215d5dbb8582d3d2d/591db6fdebbd1a0edc2a7876/1495119615915/EH+Logo+3000x3000.jpg',
	'https://static1.squarespace.com/static/57f5390f5016e1da21c4bbdf/582a29c215d5dbb8582d3d2d/593ac6fbcd0f68380abfdb07/1497024255948/ConLaw_Logo_05.22.17_Red_2400x2400.png',
	'https://static1.squarespace.com/static/57f5390f5016e1da21c4bbdf/582a29c215d5dbb8582d3d2d/58581bc15016e17cbf709c29/1482169527123/showcard_99pi.jpg',
	'https://static1.squarespace.com/static/57f5390f5016e1da21c4bbdf/582a29c215d5dbb8582d3d2d/585835bf414fb5cb3971c483/1482176498289/showcard_allusionist.jpg',
	'https://static1.squarespace.com/static/57f5390f5016e1da21c4bbdf/582a29c215d5dbb8582d3d2d/58582e3646c3c4d40191a3fb/1482174491847/showcard_bugle.jpg'
];

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
						{urls.map(url => (
							<Grid.Column width={5}>
								<Image inline src={url} width="100px" spaced />
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
