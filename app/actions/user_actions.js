export const userConstants = {
  RECEIVE_CURRENT_USER: 'RECEIVE_CURRENT_USER',
  LOGOUT_CURRENT_USER: 'LOGOUT_CURRENT_USER',
  INIT_FB: 'INIT_FB',
  SET_FB_DID_INIT: 'SET_FB_DID_INIT',
  LOGIN_FB: 'LOGIN_FB'
};


export const setFBDidInit = () => ({
  type: userConstants.SET_FB_DID_INIT
});

export const loginFB = () => ({
  type: userConstants.LOGIN_FB
})

export const initFB = () => ({
  type: userConstants.INIT_FB
});

export const receiveCurrentUser = (currentUser) => ({
  type: userConstants.RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: userConstants.LOGOUT_CURRENT_USER
});
