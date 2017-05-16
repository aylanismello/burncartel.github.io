import React from 'react';
import ReactMarkdown from 'react-markdown';
import FeedContainer from '../feed/feed_container';
import Loading from '../loading';
import { FEEDS } from '../../reducers/feed_reducer';


const input = `
  ## uh-oh!


  Looks like we can't set up a feed for you, since you haven't liked any tracks yet!


  No worries, head back to the main feeds page, start liking tracks and we'll meet
  you back here 👍


`;

class UserFeedShow extends React.Component {

  componentWillReceiveProps(nextProps) {
    if(nextProps.currentUserId) {
      this.props.updateFilters({ resource: 'user_feed', id: nextProps.currentUserId })
    }
  }

  render() {
    let name = 'the dopest person in the 🌌';
    if(this.props.userName) {
      name = this.props.userName;
    }

    if(this.props.userName && this.props.userLikes.length === 0) {
      return (
        <div className="help-page">
          <ReactMarkdown source={input} />
        </div>
      )
    } else {
      return (
        <div className="container user-show">
          <h2> {name}'s 🔥 Feed 🎵 </h2>
          <FeedContainer />
        </div>
      )
    }


  }
}

export default UserFeedShow;
