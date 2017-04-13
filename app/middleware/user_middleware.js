import {
  userConstants,
  receiveCurrentUser,
  setFBDidInit
} from '../actions/user_actions';
import { getFBUser } from '../util/login_api';

const UserMiddleware = ({ getState, dispatch }) => next => action => {
  switch(action.type) {
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
