import $ from 'jquery';

const localUrl = 'http://localhost:3000/api/v1/tracks/filter/influential';
const devUrl = 'https://bc-services.herokuapp.com/api/v1/tracks/filter/influential';

let url = ((location.hostname === 'localhost') ? localUrl : devUrl);
// url = devUrl;


export const getTracks = (filter = 'influential', success = suc, error = err) => {
	$.ajax({
		url,
		// url: 'https://bc-services.herokuapp.com/api/v1/tracks/filter/influential',
		// url: 'http://localhost:3000/api/v1/tracks/filter/influential',
		method: 'GET',
		data: { filter },
		success,
		error
	});
};
