import axios from 'axios';
import { ENV } from './helpers';

const { host, port } = ENV;

const defaultCB = data => console.log(`received ${data}`);

export const postLike = (
	{ create },
	track_id,
	user_id,
	success = defaultCB,
	error = defaultCB
) => {
	const endpoint = create ? 'create' : 'destroy';

	axios
		.post(`http://${host}:${port}/api/v1/likes/${endpoint}`, {
			track_id,
			user_id
		})
		.then(({ data }) => {
			success(data);
		})
		.catch(err => {
			error(err);
		});
};
