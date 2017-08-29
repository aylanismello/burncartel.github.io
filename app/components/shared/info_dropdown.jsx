import React from 'react';
import PropTypes from 'prop-types';
import UserList from './user_list';
import BCAvatarLink from './bc_avatar_link';
import { Link } from 'react-router-dom';

const pagination = 6;
const DEFAULT_CLASS_NAME = 'inner-content';

class InfoDropdown extends React.Component {
	constructor(props) {
		super(props);

		this.renderMoreContentButton = this.renderMoreContentButton.bind(this);
		this.renderCuratorList = this.renderCuratorList.bind(this);
		this.renderPublisherMeta = this.renderPublisherMeta.bind(this);
		this.state = {
			currentLength: pagination
		};
	}

	renderMoreContentButton(length) {
		return (
			<div
				className="more-content-button"
				onClick={() => {
					if (this.state.currentLength < length) {
						this.setState({
							currentLength: this.state.currentLength + pagination
						});
					}
				}}
			>
				{' '}+
			</div>
		);
	}

	renderCuratorList() {
		const { users, infoType, children, length } = this.props;
		return (
			<div className={DEFAULT_CLASS_NAME}>
				<div className="curator-list">
					<UserList
						users={users}
						infoType={infoType}
						length={this.state.currentLength}
					/>
					{this.state.currentLength < length
						? this.renderMoreContentButton(length)
						: null}
				</div>
			</div>
		);
	}

	renderLocationMeta() {
		return (
			<div className={DEFAULT_CLASS_NAME}>
				<div className="location-meta">
					<span>{this.props.location.name} </span>
				</div>
			</div>
		);
	}

	renderPublisherMeta() {
		const { infoType, user, users } = this.props;
		// length is how many suggestions to make
		return (
			<div className={DEFAULT_CLASS_NAME}>
				<div className="publisher-meta">
					<BCAvatarLink
						infoType={infoType}
						userId={user.id}
						avatarUrl={user.avatar_url}
						userName={user.name}
						avatarSize="large"
					/>
					<div className="suggested-publishers">
						<h5> Sounds like: </h5>
						<UserList users={users} infoType={infoType} length={5} />
					</div>
				</div>
			</div>
		);
	}

	render() {
		const { infoType, children } = this.props;

		let style = {};
		let content;
		if (infoType === 'curators') {
			content = this.renderCuratorList();
		} else if (infoType === 'publishers') {
			content = this.renderPublisherMeta();
		} else {
			content = this.renderLocationMeta();
			// this overrides the default distance from relative dropdown triggering element
			style = { top: '32px', width: 'auto', padding: '5px' };
		}

		return (
			<div className="info-dropdown-container">
				<div className="info-dropdown">
					<div className="actual-hover">
						{children}
					</div>
					<div className="info-dropdown-content" style={style}>
						<div className="arrow-up" />
						{content}
					</div>
				</div>
			</div>
		);
	}
}

InfoDropdown.defaultProps = {
	users: [],
	infoType: 'curators'
};

InfoDropdown.propTypes = {
	children: PropTypes.object.isRequired,
	users: PropTypes.array,
	location: PropTypes.object,
	infoType: PropTypes.oneOf(['curators', 'publishers', 'locations']).isRequired,
	length: PropTypes.number.isRequired
};

export default InfoDropdown;
