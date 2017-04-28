import $ from 'jquery';

const localUrl = 'http://localhost:3000/api/v1/tracks/filter';
const devUrl = 'https://bc-fire-api.herokuapp.com/api/v1/tracks/filter';

export const getFeed = (resource, filters, success = suc, error = err) => {

	let getUrl;

	let page;
	if(filters.page === undefined) {
		page = 1;
	} else {
		page = filters.page
	}


	if(filters.id && resource !== 'likes') {
		// getting /publishers/ or /curators/
		getUrl = `http://localhost:3000/api/v1/${resource}/${filters.id}?tracks_page=${page}`;
	} else if (filters.id && resource === 'likes'){
		getUrl = `http://localhost:3000/api/v1/users/${filters.id}?tracks_page=${page}`;
		  // get "/:user_id/likes", root: :track do
	}else {
		// we are dealing with a fire feed
		// getUrl = `http://localhost:3000/api/v1/${resource}?sort_type=${filters.sortType}&page=${page}`;
		getUrl = `http://localhost:3000/api/v1/feeds?sort_type=${filters.sortType}&tracks_page=${page}`;
		debugger;

	}


	$.ajax({
		url: getUrl,
		success,
		error
	});


};

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

export const getLikes = (userId, success = suc, error = err) => {
	$.ajax({
		url: `http://localhost:3000/api/v1/users/${userId}/likes`,
		method: 'GET',
		success,
		error
	});
};
