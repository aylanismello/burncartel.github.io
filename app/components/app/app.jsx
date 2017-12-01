import React from 'react';
import MediaQuery from 'react-responsive';
import TopNav from '../navs/top_nav';
import { Container } from 'semantic-ui-react';
import BottomNav from '../navs/bottom_nav';
import SideNav from '../navs/side_nav';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.addShortcutsToWindow = this.addShortcutsToWindow.bind(this);
	}

	componentWillMount() {
		// this.props.initFB();
		this.addShortcutsToWindow();
	}

	componentWillReceiveProps(nextProps) {
		if (!_.isEqual(this.props.filters, nextProps.filters)) {
			if (nextProps.filters.resource === 'tracks') {
				// TRACKS
				if (nextProps.filters.isSingleTrack) {
					this.props.fetchFeed(nextProps.filters);
				} else {
					this.props.fetchFeed(nextProps.filters);
				}
			} else {
				// LIKES, PUBLISHERS, CURATORS
				this.props.fetchFeed(nextProps.filters);
			}
		}
	}

	addShortcutsToWindow() {
		// add spacebar = play/pause
		window.addEventListener('keydown', (e) => {
			if (e.keyCode === 32 && e.target === document.body) {
				e.preventDefault();
				if (this.props.playerInitialized) {
					this.props.togglePlay();
				}
			}
		});
	}
	render() {
		return (
			<Container className="fixed-components">
				{/* <MediaQuery query="(min-device-width: 451px)"> */}
				{/* <SideNav
					trackUrl={this.props.trackUrl}
					currentUserId={this.props.currentUser.id}
					currentUserPhotoUrl={this.props.currentUser.photo_url}
				/> */}
				{/* </MediaQuery> */}

				<TopNav
					currentUser={this.props.currentUser}
					logoutCurrentUser={this.props.logoutCurrentUser}
					receiveCurrentUser={this.props.receiveCurrentUser}
					loginFB={this.props.loginFB}
					fbDidInit={this.props.fbDidInit}
				/>

				<BottomNav
					currentUserId={this.props.currentUser.id}
					currentUserPhotoUrl={this.props.currentUser.photo_url}
					trackUrl={this.props.trackUrl}
				/>
			</Container>
		);
	}
}

export default App;
