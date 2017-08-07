import React from 'react';
import PropTypes from 'prop-types';
import UserList from './user_list';

const pagination = 8;

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

				<UserList
					users={users}
					userType={userType}
					length={this.state.currentLength}
				/>
				{this.state.currentLength < length
					? this.renderMoreContentButton(length)
					: null}
			</div>
		);
	}

	renderPublisherMeta(className) {
		const { users, userType, user } = this.props;

		return(
			<div className={className}>

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
	children: PropTypes.string.isRequired,
	users: PropTypes.array,
	userType: PropTypes.string.isRequired,
	length: PropTypes.number.isRequired
};

export default InfoDropdown;
