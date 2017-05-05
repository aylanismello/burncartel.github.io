import $ from 'jquery';

let host, port;

if(process.env.NODE_ENV === 'production') {
	host = process.env.EC2_HOST;
	port = process.env.EC2_PORT;
} else {
	host = '127.0.0.1';
	port = process.env.EC2_PORT;
}


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
		getUrl = `http://${host}:${port}/api/v1/${resource}/${filters.id}?tracks_page=${page}`;
	} else if (filters.id && resource === 'likes'){
		getUrl = `http://${host}:${port}/api/v1/users/${filters.id}?tracks_page=${page}`;
		  // get "/:user_id/likes", root: :track do
	}else {
		// we are dealing with a fire feed
		getUrl = `http://${host}:${port}/api/v1/feeds?sort_type=${filters.sortType}&tracks_page=${page}`;
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
