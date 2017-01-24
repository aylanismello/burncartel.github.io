import $ from 'jquery';

const localUrl = 'http://localhost:3000/api/v1/tracks/filter';
const devUrl = 'https://bc-services.herokuapp.com/api/v1/tracks/filter';

// let url = ((location.hostname === 'localhost') ? localUrl : devUrl);

export const getTracks = (filters, success = suc, error = err) => {
	const url = `http://localhost:3000/api/v1/tracks/filter/${filters['sort']}`;
	// debugger;

	$.ajax({
		url,
		method: 'GET',
		data: filters,
		success,
		error
	});
};
