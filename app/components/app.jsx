import React from 'react';
import {Link} from 'react-router';
import {withRouter} from 'react-router';
import TopNav from './top_nav';
import BottomNav from './bottom_nav';
import FeedContainer from './feed_container';

class App extends React.Component {
  constructor(props) {
  	super(props);
    props.fetchTracks();
  }

  onSelectChange(option) {
    // console.log(`Selected ${option.value}: ${option.label}`);
    this.props.updateFilter(option.value);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentFilter !== nextProps.currentFilter) {
      console.log('props changed!');
      this.props.fetchTracks(nextProps.currentFilter);
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
