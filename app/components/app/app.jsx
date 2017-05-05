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
    
    if(!_.isEqual(this.props.filters, nextProps.filters)) {
      if(nextProps.filters.resource === 'tracks') { //TRACKS
        if(nextProps.filters.isSingleTrack) {
          this.props.fetchFeed(nextProps.filters);
        } else {
          this.props.fetchFeed(nextProps.filters);
        }
      } else { //LIKES, PUBLISHERS, CURATORS
        this.props.fetchFeed(nextProps.filters);
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
