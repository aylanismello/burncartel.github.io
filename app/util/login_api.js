import $ from 'jquery';
import { ENV } from './helpers';
const { host, port } = ENV;

export const connectFB = () => {
	$.ajax({
		url: `${window.location.protocol}//connect.facebook.net/en_US/all.js`,
		dataType: 'script',
		cache: true
	});
};

const getPicture = (cb, user) => {
	FB.api(`/${user.uid}/picture`, response => {
		cb({ ...user, photo_url: response.data.url });
	});
};

export const getFBUser = success => {
	FB.api('/me', { fields: 'first_name,last_name,email' }, response => {
		let data = {};
		data['last_name'] = response.last_name;
		data['first_name'] = response.first_name;
		data['uid'] = response.id;
		data['email'] = response.email;

		// I do not know how to send over xhrFields with axios :( so I cannot get rid of the JQuery dependency :(
		// axios
		// 	.post(`http://${host}:${port}/api/v1/session/fb/create`, {
		// 		...data
		// 	})
		// 	.then(({ data }) => {
		// 		getPicture(success, user);
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 	});

		$.ajax({
			url: `http://${host}:${port}/api/v1/session/fb/create`,
			method: 'POST',
			xhrFields: {
				withCredentials: true
			},
			data,
			success: user => {
				getPicture(success, user);
			},
			error: err => {
				console.log(err);
			}
		});
	});
};
