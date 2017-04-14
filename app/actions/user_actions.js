export const userConstants = {
  RECEIVE_CURRENT_USER: 'RECEIVE_CURRENT_USER',
  LOGOUT_CURRENT_USER: 'LOGOUT_CURRENT_USER',
  INIT_FB: 'INIT_FB',
  SET_FB_DID_INIT: 'SET_FB_DID_INIT',
  LOGIN_FB: 'LOGIN_FB',
  LIKE_UNLIKE_TRACK: 'LIKE_UNLIKE_TRACK',
  LIKE_TRACK: 'LIKE_TRACK',
  UNLIKE_TRACK: 'UNLIKE_TRACK',
  UPDATE_LIKED_TRACKS: 'UPDATE_LIKED_TRACKS',
  RECEIVE_UNLIKE: 'RECEIVE_UNLIKE',
  START_LIKE_POST: 'START_LIKE_POST',
  END_LIKE_POST: 'END_LIKE_POST'
};

export const endLikePost = () => ({
  type: userConstants.END_LIKE_POST
});

export const startLikePost = () => ({
  type: userConstants.START_LIKE_POST
});

export const updateLikedTracks = (tracks) => ({
  type: userConstants.UPDATE_LIKED_TRACKS,
  tracks
});

export const receiveUnlike = (unlike) => ({
  type: userConstants.RECEIVE_UNLIKE,
  unlike
});

export const likeUnlikeTrack = (trackId) => ({
  type: userConstants.LIKE_UNLIKE_TRACK,
  trackId
});

export const likeTrack = (trackId) => ({
  type: userConstants.LIKE_TRACK,
  trackId
});

export const unlikeTrack = (trackId) => ({
  type: userConstants.UNLIKE_TRACK,
  trackId
});

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
