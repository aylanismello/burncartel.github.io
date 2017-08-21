let host, port, clientId;

host = process.env.EC2_HOST;
port = process.env.EC2_PORT;
clientId = 'caf73ef1e709f839664ab82bef40fa96';


export const ENV = {
  host,
  port,
  clientId
};
