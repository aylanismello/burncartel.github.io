let host, port;

host = process.env.EC2_HOST;
port = process.env.EC2_PORT;


export const ENV = {
  host,
  port
};
