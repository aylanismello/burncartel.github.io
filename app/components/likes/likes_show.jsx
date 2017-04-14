import React from 'react';
import FeedContainer from '../feed/feed_container';
import Loading from '../loading';

const LikesShow = ({ updateFilters }) => {
  return (
    <div className="container user-show">
      <UserBanner user={user} />
      <h2> Latest selections </h2>
      <FeedContainer />
    </div>
  )
};

export default LikesShow;
