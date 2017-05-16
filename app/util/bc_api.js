import $ from 'jquery';
import { ENV } from './helpers.js';

const { host, port } = ENV;

export const getFeed = (resource, filters, success = suc, error = err) => {
	let getUrl;

	let page;
	if(filters.page === undefined) {
		page = 1;
	} else {
		page = filters.page
	}

	if(resource === 'user_feed') {
		getUrl = `http://${host}:${port}/api/v1/users/${filters.id}/feed?tracks_page=${page}`;
	} else if(filters.id && resource !== 'likes') {
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
