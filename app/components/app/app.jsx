import React from 'react';
import {withRouter} from 'react-router';
import TopNav from '../navs/top_nav';
import BottomNav from '../navs/bottom_nav';
import FeedContainer from '../feed/feed_container';
import { getTrackFromId } from '../../selectors/track_selector';
import { FEEDS } from '../../reducers/feed_reducer';


class App extends React.Component {
  constructor(props) {
  	super(props);
  }

  componentWillMount() {
    this.props.initFB();
  }

  componentWillReceiveProps(nextProps) {
    // you also have to check for pagination being invoked here.
    // so maybe if this.props.feed.length !=== nextProps.feed.length
    // wait what...

    if(!_.isEqual(this.props.filters, nextProps.filters)) {
      this.props.fetchTracks(nextProps.filters);
    }

    if(!_.isEqual(this.props.feedType, nextProps.feedType)) {
      if(nextProps.feedType === FEEDS.LIKES) {
        this.props.fetchTracks();
      }
    }

  }

  render() {
  	return (
  		<div>

      <TopNav
        currentUser={this.props.currentUser}
        logoutCurrentUser={this.props.logoutCurrentUser}
        receiveCurrentUser={this.props.receiveCurrentUser}
        loginFB={this.props.loginFB}
        fbDidInit={this.props.fbDidInit}
      />
        <div className="container">
          {this.props.children}
        </div>


      <BottomNav
        currentUserId={this.props.currentUser.id}
      />
			</div>
      );
    }
  }

  export default App;
