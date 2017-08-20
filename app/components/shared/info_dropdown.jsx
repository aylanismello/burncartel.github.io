import React from 'react';
import PropTypes from 'prop-types';
import UserList from './user_list';
import BCAvatarLink from './bc_avatar_link';
import { Link } from 'react-router-dom';

const pagination = 6;

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

	renderCuratorList(className) {
		const { users, userType, children, length } = this.props;
		return (
			<div className={className}>
				<div className="curator-list">
					<UserList
						users={users}
						userType={userType}
						length={this.state.currentLength}
					/>
					{this.state.currentLength < length
						? this.renderMoreContentButton(length)
						: null}
				</div>
			</div>
		);
	}

	renderPublisherMeta(className) {
		const { userType, user, users } = this.props;
		// length is how many suggestions to make
		return (
			<div className={className}>
				<div className="publisher-meta">
					<BCAvatarLink
						userType={userType}
						userId={user.id}
						avatarUrl={user.avatar_url}
						userName={user.name}
						avatarSize="large"
					/>
					<div className="suggested-publishers">
						<h5> Sounds like: </h5>
						<UserList users={users} userType={userType} length={5} />
					</div>
				</div>
			</div>
		);
	}

	render() {
		const { users, userType, children, length } = this.props;

		return (
			<div className="info-dropdown-container">
				<div className="info-dropdown">
					<div className="actual-hover">
						{children}
					</div>
					<div className="info-dropdown-content">
						<div className="arrow-up" />
						{userType === 'curators'
							? this.renderCuratorList('inner-content')
							: this.renderPublisherMeta('inner-content')}
					</div>
				</div>
			</div>
		);
	}
}

InfoDropdown.defaultProps = {
	users: [],
	userType: 'curators'
};

InfoDropdown.propTypes = {
	children: PropTypes.object.isRequired,
	users: PropTypes.array,
	userType: PropTypes.string.isRequired,
	length: PropTypes.number.isRequired
};

export default InfoDropdown;
