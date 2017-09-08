import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default (ComposedComponent, config = { requireLogin: false }) => {
	class Authentication extends Component {
		componentWillMount() {
			if (!this.props.currentUserId && config.requireLogin) {
				this.context.router.history.push('/');
			}
		}

		componentWillUpdate(nextProps) {
			if (this.props.currentUserId && !nextProps.currentUserId) {
				this.context.router.history.push('/');
			}
		}

		render() {
			return <ComposedComponent {...this.props} />;
		}
	}

	Authentication.contextTypes = {
		router: PropTypes.object
	};

	const mapStateToProps = state => ({
		currentUserId: state.user.currentUser.id
	});

	return connect(mapStateToProps, {})(Authentication);
};
