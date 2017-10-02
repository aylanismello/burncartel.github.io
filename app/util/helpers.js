import moment from 'moment';

const host = process.env.EC2_HOST;
const port = process.env.EC2_PORT;
const clientId = 'caf73ef1e709f839664ab82bef40fa96';

export const ENV = {
	host,
	port,
	clientId
};

export const dateToTimeAgo = (date) => {
	return moment.duration(moment(new Date()).diff(moment(date))).humanize();
};
