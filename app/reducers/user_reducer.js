import { REHYDRATE } from 'redux-persist/constants';
import { userConstants } from '../actions/user_actions';

const initialState = Object.freeze({
	currentUser: {
		tracks: [],
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
	switch (action.type) {
		// case REHYDRATE:
		// 	const incoming = action.payload.user;
		// 	if (incoming.currentUser && incoming.currentUser.id) {
		// 		return incoming;
		// 	}
		// 	return state;
		case userConstants.UPDATE_LIKED_TRACKS:
			return {
				...state,
				currentUser: { ...state.currentUser, tracks: action.tracks }
			};
		case userConstants.SET_FB_DID_INIT:
			return { ...state, fbDidInit: true };
		case userConstants.START_LIKE_POST:
			return { ...state, likePostInProgress: true };
		case userConstants.END_LIKE_POST:
			return { ...state, likePostInProgress: false };
		case userConstants.RECEIVE_CURRENT_USER:
			const { sorted_serialized_tracks } = action.currentUser;
			return {
				...state,
				currentUser: { ...action.currentUser, tracks: sorted_serialized_tracks }
			};
		case userConstants.LOGOUT_CURRENT_USER:
			return { ...initialState, fbDidInit: true };
		default:
			return state;
	}
};

export default UserReducer;
