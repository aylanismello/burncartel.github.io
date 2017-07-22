import { axios } from 'axios';
import { ENV } from '../util/helpers.js';
const { host, port } = ENV;
import { travelerConstants } from '../actions/traveler_actions';

const defaultCB = data => console.log(`received ${data}`);

// export const getTraveler = (params, success = defaultCB, error = defaultCB) => {
// 	axios
// 		.get(`http://${host}:${port}/api/v1/traveler`, {
// 			params
// 		})
// 		.then((data) => {
//       debugger;
// 			success(data);
// 		})
// 		.then((err) => {
// 			error(err);
// 		});
// };

const TravelerMiddleware = ({ getState, dispatch }) => next => action => {
  switch(action.type) {
    case travelerConstants.FETCH_LOCATIONS:
      return next(action);
		default:
			return next(action);
  }
};

export default TravelerMiddleware;
