export const userConstants = {
  RECEIVE_CURRENT_USER: 'RECEIVE_CURRENT_USER',
  LOGOUT_CURRENT_USER: 'LOGOUT_CURRENT_USER'
};

export const receiveCurrentUser = (currentUser) => ({
  type: userConstants.RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: userConstants.LOGOUT_CURRENT_USER
});
