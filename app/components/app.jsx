import React from 'react';
import {Link} from 'react-router';
import {withRouter} from 'react-router';
import TopNav from './top_nav';
import BottomNav from './bottom_nav';
import FeedContainer from './feed_container';

class App extends React.Component {
  constructor(props) {
  	super(props);
    // props.fetchTracks(this.props.filters);
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.filters !== nextProps.filters) {
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
