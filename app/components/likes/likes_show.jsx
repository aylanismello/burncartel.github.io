import React from 'react';
import FeedContainer from '../feed/feed_container';
import Loading from '../loading';
import { FEEDS } from '../../reducers/feed_reducer';


class LikesShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.setLikesUser(this.props.ffUserId);
    this.props.setFeedType(FEEDS.LIKES);
  }

  render() {
    return (
      <div className="container user-show">
        {/* <UserBanner user={user} /> */}
        <h2> Your Likes :) </h2>
        <FeedContainer />
      </div>
    );
  }

}

export default LikesShow;
