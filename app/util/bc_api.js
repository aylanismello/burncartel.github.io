import $ from 'jquery';

const localUrl = 'http://localhost:3000/api/v1/tracks/filter';
const devUrl = 'https://bc-fire-api.herokuapp.com/api/v1/tracks/filter';

// let url = ((location.hostname === 'localhost') ? localUrl : devUrl);

// the page number is passed in here as well

export const getTracks = (filters, success = suc, error = err, page = 1) => {
	const baseUrl = ((location.hostname === 'localhost') ? localUrl : devUrl);

	const url = `${baseUrl}/${filters['sort']}?page=${page}`;

	$.ajax({
		url,
		method: 'GET',
		data: filters,
		success,
		error
	});
};
