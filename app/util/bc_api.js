import $ from 'jquery';

const localUrl = 'http://localhost:3000/api/v1/tracks/filter';
const devUrl = 'https://bc-services.herokuapp.com/api/v1/tracks/filter';

// let url = ((location.hostname === 'localhost') ? localUrl : devUrl);

export const getTracks = (filters, success = suc, error = err) => {
	const baseUrl = ((location.hostname === 'localhost') ? localUrl : devUrl);
	const url = `${baseUrl}/${filters['sort']}`;

	$.ajax({
		url,
		method: 'GET',
		data: filters,
		success,
		error
	});
};

export const getEpisodes = (filters, success = suc, error = err) => {
	const episodeUrl = 'http://localhost:3000/api/v1/episodes';

	$.ajax({
		url: episodeUrl,
		method: 'GET',
		data: filters,
		success,
		error
	});
};
