let host, port;

if(process.env.NODE_ENV === 'production') {
	host = process.env.EC2_HOST;
	port = process.env.EC2_PORT;
} else {
	host = '127.0.0.1';
	port = process.env.EC2_PORT;
}


export const ENV = {
  host,
  port
};
