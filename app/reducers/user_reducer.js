import { userConstants } from '../actions/user_actions';

const initialState = Object.freeze({
  currentUser: {
    handle: null,
    uid: null,
    name: null,
    email: null
  },
  fbDidInit: false
});

const UserReducer = (state = initialState, action) => {
  switch(action.type) {
    case userConstants.SET_FB_DID_INIT:
      return { ...state, fbDidInit: true };
    case userConstants.RECEIVE_CURRENT_USER:
      return { ...state, currentUser: action.currentUser };
    case userConstants.LOGOUT_CURRENT_USER:
      return { ...initialState, fbDidInit: true };
    default:
      return state;
  }
};

export default UserReducer;
