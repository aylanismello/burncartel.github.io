import { userConstants } from '../actions/user_actions';

const initialState = Object.freeze({
  currentUser: {
    sorted_serialized_tracks: [],
    uid: null,
    id: null,
    name: null,
    provider: null,
    photo_url: null
  },
  fbDidInit: false,
  likePostInProgress: false
});

const UserReducer = (state = initialState, action) => {
  switch(action.type) {
    case userConstants.UPDATE_LIKED_TRACKS:
      return { ...state,  currentUser: { ...state.currentUser, tracks: action.tracks } } ;
    case userConstants.SET_FB_DID_INIT:
      return { ...state, fbDidInit: true };
    case userConstants.START_LIKE_POST:
      return { ...state, likePostInProgress: true };
    case userConstants.END_LIKE_POST:
      return { ...state, likePostInProgress: false };
    case userConstants.RECEIVE_CURRENT_USER:
      return { ...state, currentUser: action.currentUser };
    case userConstants.LOGOUT_CURRENT_USER:
      return { ...initialState, fbDidInit: true };
    default:
      return state;
  }
};

export default UserReducer;
