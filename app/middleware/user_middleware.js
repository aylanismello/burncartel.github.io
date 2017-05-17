import {
  userConstants,
  receiveCurrentUser,
  setFBDidInit,
  likeTrack,
  unlikeTrack,
  updateLikedTracks,
  receiveUnlike,
  startLikePost,
  endLikePost
} from '../actions/user_actions';
import {
  updateTrackLikeCount
} from '../actions/feed_actions';
import { getFBUser } from '../util/login_api';
import {
  getUserTracksHash,
  getFeedTracksHash,
  getPlayingFeedTracksHash
} from '../selectors/track_selector';
import { postLike } from '../util/like_api';


const UserMiddleware = ({ getState, dispatch }) => next => action => {
  switch(action.type) {
    case userConstants.LIKE_UNLIKE_TRACK:
      const userTracks = getUserTracksHash(getState());

      if(userTracks[action.trackId] === undefined) {
        dispatch(likeTrack(action.trackId));
      } else {
        dispatch(unlikeTrack(action.trackId));
      }
      return next(action);
    case userConstants.LIKE_TRACK:
      dispatch(startLikePost());

      postLike({ create: true }, action.trackId, getState().user.currentUser.id, (createdLike) => {
        dispatch(updateLikedTracks(createdLike.tracks));

        const oneMoreLike = getPlayingFeedTracksHash(getState())[action.trackId].num_likes + 1;
        dispatch(updateTrackLikeCount(action.trackId, oneMoreLike));

        dispatch(endLikePost());
      }, (err) => {
        throw new Error(`omg hit this error creating like ${err}`);
      });

      return next(action);
    case userConstants.UNLIKE_TRACK:
      dispatch(startLikePost());

      postLike({ create: false }, action.trackId, getState().user.currentUser.id, (createdLike) => {
        dispatch(updateLikedTracks(createdLike.tracks));

        const oneLessLike = getPlayingFeedTracksHash(getState())[action.trackId].num_likes - 1;
        dispatch(updateTrackLikeCount(action.trackId, oneLessLike));

        dispatch(endLikePost());
      }, (err) => {
        throw new Error(`omg hit this error destroying like ${err}`);
      });

      return next(action);
    case userConstants.INIT_FB:
      window.fbAsyncInit = () => {
        FB.init({
          appId: '156389341554296',
          cookie: true
        });

        FB.getLoginStatus((response) => {
          if (response.status === 'connected') {
            getFBUser(user => dispatch(receiveCurrentUser(user)));
          }
          dispatch(setFBDidInit());
        });

      };
      return next(action);
    case userConstants.LOGIN_FB:
      FB.login(response => {
        if(response.authResponse.accessToken) {
          getFBUser(user => dispatch(receiveCurrentUser(user)));
        }
      });
      return next(action);
    default:
      return next(action);
  }
};

export default UserMiddleware;
