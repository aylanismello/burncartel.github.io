import React from 'react';
import {Link} from 'react-router';
import {withRouter} from 'react-router';
import TopNav from '../navs/top_nav';
import BottomNav from '../navs/bottom_nav';
import FeedContainer from '../feed/feed_container';
import { getTrackFromId } from '../../selectors/track_selector';


class App extends React.Component {
  constructor(props) {
  	super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (!_.isEqual(this.props.filters, nextProps.filters)) {
      this.props.fetchTracks(nextProps.filters);
    }
  }

  render() {
  	return (
  		<div>

      <TopNav />
        <div className="container">
          {this.props.children}
        </div>


      <BottomNav />
			</div>
      );
    }
  }

  export default App;
