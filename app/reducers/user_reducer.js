import { userConstants } from '../actions/user_actions';

const initialState = Object.freeze({
  handle: null,
  uid: null,
  name: null,
  email: null
});

const UserReducer = (state = initialState, action) => {
  switch(action.type) {
    case userConstants.RECEIVE_CURRENT_USER:
      return action.currentUser;
    case userConstants.LOGOUT_CURRENT_USER:
      return initialState;
    default:
      return state;
  }
};

export default UserReducer;
