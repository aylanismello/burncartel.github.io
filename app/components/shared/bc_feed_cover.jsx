import React from 'react';
import { Link } from 'react-router-dom';
import * as FontAwesome from 'react-icons/lib/fa/';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { getFeedResourceId } from '../../util/bc_api';
import BCSpinner from './bc_spinner';

const iconSize = 40;

// const BCFeedCover = ({ handleFeedClick, artworkUrl, extraClass, linkUrl }) => {
class BCFeedCover extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			linkUrl: props.linkUrl || ''
		};
	}

	componentWillMount() {
		// first this we must do it resolve this feed type to an id!
		// cause we might need that later!
		if (!this.props.linkUrl) {
			getFeedResourceId(
				(response) => {
					const { id } = response.data;
					this.setState({
						linkUrl: `/${this.props.resource}/${id}`
					});
				},
				this.props.resource,
				this.props.filters
			);
		}
	}

	render() {
		const { handleFeedClick, artworkUrl, extraClass } = this.props;

		const playIcon = (
			<FontAwesome.FaPlay
				size={iconSize}
				color="white"
				className="artwork-play cursor-pointer-grow"
				onClick={handleFeedClick}
			/>
		);

		// const pauseIcon = (
		// 	<FontAwesome.FaPause
		// 		size={iconSize}
		// 		color="white"
		// 		className="artwork-play cursor-pointer-grow"
		// 		onClick={handleFeedClick}
		// 	/>
		// );

		const currentIcon = playIcon;

		return (
			<div className="artwork-wrapper-feed">
				<Link
					to={this.state.linkUrl}
					onClick={e => {
						const { tagName } = e.target;
						if (tagName === 'path' || tagName === 'svg') {
							e.preventDefault();
							console.log(
								'GOINT TO LOAD UP NEW PLAYING FEED WITHOUT CHANGING FOCUSED FEED... WHOA!'
							);
						}
					}}
				>
					{/* <img src={artworkUrl} className="artwork-icon" /> */}
					{/* <Image src={artworkUrl} width="200px" /> */}
					<Image src={artworkUrl} fluid />
					<div className="feed-cover-buttons-container">
						<div className="current-icon-container">
							{currentIcon}
							<BCSpinner
								extraClass="artwork-play visibility-hidden"
								name="line-scale-pulse-out-rapid"
							/>
						</div>
					</div>
				</Link>
			</div>
		);
	}
}

const { func, string, objectOf } = PropTypes;

BCFeedCover.propTypes = {
	handleFeedClick: func.isRequired,
	artworkUrl: string.isRequired,
	extraClass: string,
	linkUrl: string,
	resource: string,
	filters: objectOf(string)
};

BCFeedCover.defaultProps = {
	extraClass: '',
	linkUrl: undefined,
	filters: {},
	resource: 'fire_feeds'
};

export default BCFeedCover;
