import $ from 'jquery';


export const getTracks = (success = suc, error = err) => {
	$.ajax({
		url: 'https://bc-services.herokuapp.com/api/v1/tracks/filter/influential',
		method: 'GET',
		// data,
		success,
		error
	});
};
