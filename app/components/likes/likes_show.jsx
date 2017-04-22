import React from 'react';
import FeedContainer from '../feed/feed_container';
import Loading from '../loading';
import { FEEDS } from '../../reducers/feed_reducer';


const LikesShow = ({ ffUserId, setFeedType, setLikeFeedUserId }) => {
  setLikeFeedUserId(ffUserId);
  setFeedType(FEEDS.LIKES);

  return (
    <div className="container user-show">
      {/* <UserBanner user={user} /> */}
      <h2> Your Likes :) </h2>
      <FeedContainer />
    </div>
  );
}

export default LikesShow;
