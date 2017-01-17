import $ from 'jquery';


export const getTracks = (filter = 'influential', success = suc, error = err) => {
	$.ajax({
		// url: 'https://bc-services.herokuapp.com/api/v1/tracks/filter/influential',
		url: 'http://localhost:3000/api/v1/tracks/filter/influential',
		method: 'GET',
		data: { filter },
		success,
		error
	});
};
