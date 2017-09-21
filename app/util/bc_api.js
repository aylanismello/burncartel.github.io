import axios from 'axios';
import { ENV } from './helpers';

const { host, port } = ENV;
const url = `http://${host}:${port}/api/v1`;

export const getFeed = (resource, filters, success, error) => {
	let getUrl;

	let page;
	if (filters.page === undefined) {
		page = 1;
	} else {
		page = filters.page;
	}

	if (resource === 'search') {
		if (filters.resource_type) {
			// getUrl = `${url}/feeds/search?q=${filters.q}&resource_type=${filters.resource_type}&tracks_page=${page}`;
			getUrl = `${url}/feeds/search`
		} else {
			getUrl = `${url}/feeds/search`;
			// getUrl = `${url}/feeds/search?q=${filters.q}&tracks_page=${page}`;
		}
	} else if (resource === 'playlists' && !filters.id) {
		getUrl = `${url}/playlists/`;
	} else if (resource === 'playlists' && filters.id) {
		// getUrl = `${url}/playlists/${filters.id}/feed?tracks_page=${page}`;
		getUrl = `${url}/playlists/${filters.id}/feed`;
	} else if (resource === 'locations' && filters.location_type !== undefined) {
		// THIS IS FOR raw locations without sorted_tracks
		// getUrl = `${url}/${resource}?location_type=${filters.location_type}`;
		getUrl = `${url}/${resource}`;
	} else if (resource === 'tracks') {
		getUrl = `${url}/tracks/${filters.id}`;
	} else if (
		resource === 'locations' &&
		filters.parent_location !== undefined
	) {
		// THIS IS also FOR raw locations without sorted_tracks
		getUrl = `${url}/${resource}/${filters.parent_location}/children_locations`;
	} else if (resource === 'user_feed') {
		// getUrl = `${url}/users/${filters.id}/feed?tracks_page=${page}`;
		getUrl = `${url}/users/${filters.id}/feed`;
	} else if (filters.id && resource !== 'likes') {
		// getting /publishers/ or /curators/ OR /locations or /tags
		// getUrl = `${url}/${resource}/${filters.id}/feed?tracks_page=${page}`;
		getUrl = `${url}/${resource}/${filters.id}/feed`;
	} else if (filters.id && resource === 'likes') {
		// getUrl = `${url}/users/${filters.id}/likes?tracks_page=${page}`;
		getUrl = `${url}/users/${filters.id}/likes`;
	} else {
		// we are dealing with a fire feed
		// getUrl = `${url}/feeds?sort_type=${filters.sortType}&tracks_page=${page}`;
		getUrl = `${url}/feeds`;
	}
	axios
		.get(getUrl, {
			params: {...filters, tracks_page: page }
		})
		.then(({ data }) => {
			success(data);
		})
		.catch(err => {
			error(err);
		});

	//
	// $.ajax({
	// 	url: getUrl,
	// 	data: {
	// 		// days_old: 100
	// 	},
	// 	success,
	// 	error
	// });
};
