import React from 'react';
import Dropdown from 'react-dropdown';
import FeedContainer from '../feed/feed_container';
import { Link } from 'react-router-dom';
import { FEEDS } from '../../reducers/feed_reducer';


class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const sortType = this.props.history.location.pathname.slice(1);

		if(sortType === "") {
			this.props.updateFilters({ resource: 'tracks',
			sortType: 'influential'
		 });
		} else {
			this.props.updateFilters({ resource: 'tracks',
				sortType
			 });
		}
	}

	componentWillReceiveProps(nextProps) {
		if(this.props.pathname !== nextProps.pathname) {
			const sortType = nextProps.pathname.slice(1);


			if(sortType === "") {
				this.props.updateFilters({ resource: 'tracks',
				 sortType: 'influential'
			  });
			} else {
				this.props.updateFilters({ resource: 'tracks',
					sortType
			 });
			}

		}
	}

	_onSelect(e) {
		this.props.history.push(e.value);
	}

	render() {
		const options = [
		  { value: '/', label: 'Influential' },
		  { value: '/hot', label: 'Hot' },
		  { value: '/remix', label: 'Remixes' },
		  { value: '/mix', label: 'Mixes' },
		  { value: '/latest', label: 'Latest' },
		  // { value: '/bc', label: 'BC Selected' },
		  // { value: '/not', label: 'Unheard' },
		];

		const value = options.filter(option => option.value === this.props.location.pathname)[0];

		return (
			<div className="container home-page-container">
				<div className="btn-group btn-group-justified" role="group" aria-label="Justified button group" >

					<div className='feed-banner'>
						<div className='feed-name'>
							<h3> {value.label} Feed </h3>
						</div>

						<Dropdown
							options={options}
							onChange={this._onSelect.bind(this)}
							value={value}
							placeholder="🔥 Select a feed 🔥"
						/>
					</div>

				</div>
				<FeedContainer />
			</div>
		);
	}
}

export default Home;
