import $ from 'jquery';

const localUrl = 'http://localhost:3000/api/v1/tracks/filter';
const devUrl = 'https://bc-services.herokuapp.com/api/v1/tracks/filter';

let url = ((location.hostname === 'localhost') ? localUrl : devUrl);
// url = devUrl;


export const getTracks = (filters, success = suc, error = err) => {
	url = `${url}/${filters['sort']}`
	debugger;

	$.ajax({
		url,
		// url: 'https://bc-services.herokuapp.com/api/v1/tracks/filter/influential',
		// url: 'http://localhost:3000/api/v1/tracks/filter/influential',
		method: 'GET',
		data: filters,
		success,
		error
	});
};
