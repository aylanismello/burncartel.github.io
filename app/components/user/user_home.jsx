import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { GoFlame, GoRadioTower } from 'react-icons/lib/go';
import FeedContainer from '../feed/feed_container';
import Loading from '../loading';
import { FEEDS } from '../../reducers/feed_reducer';


const input = `
  Loading...
`;

const likes = `
  ### Likes
`;

const feed = `
  ### Personal Feed
`;

class UserHome extends React.Component {

  render() {
    let name = 'the dopest person in the 🌌';
    if(this.props.userName) {
      name = this.props.userName;
    }

    if(!this.props.userName) {
      return (
        <div className="help-page">
          <ReactMarkdown source={input} />
        </div>
      )
    } else {
      return (
        <div className="container user-home">
          <div className="user-home-banner">
            <div className="avatar-container">
              <img src={this.props.userPhoto} />
            </div>
            <h2> {name} </h2>
          </div>

          <div className="user-home-content">
            <Link
              to={`/me/likes`}
            >
              <div
                className="user-choice"
                id="user-likes-button"
              >
                <GoFlame
                  size={80}
                  color="orange"
                  className='bc-icon'
                />
                <ReactMarkdown source={likes} />
              </div>
            </Link>

            <Link
              to={`/me/feed`}
            >
              <div
                className="user-choice"
                id="user-feed-button"
                >
                <GoRadioTower
                  size={80}
                  color="indianred"
                  className='bc-icon'
                />
                <ReactMarkdown source={feed} />
              </div>
            </Link>
          </div>



        </div>
      )
    }


  }
}

export default UserHome;
