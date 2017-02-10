import React from 'react';
import TopNav from '../navs/top_nav';
import BottomNav from '../navs/bottom_nav';
import FeedContainer from '../feed/feed_container';

class App extends React.Component {
  constructor(props) {
  	super(props);
  }

  componentWillReceiveProps(nextProps) {
    // you also have to check for pagination being invoked here.
    // so maybe if this.props.feed.length !=== nextProps.feed.length
    // wait what...

    // somethign changed in fire feed
    if (nextProps.feedType === 'FIRE' && !_.isEqual(this.props.filters, nextProps.filters)) {
      this.props.fetchTracks(nextProps.filters);
    } else if(nextProps.feedType !== this.props.feedType) {//the feed type changed

      // HERE IS THE LOGIC FOR FETCHING EPISODE TRACKS
      alert('feed type changed!')
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
