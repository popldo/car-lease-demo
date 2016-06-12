/*eslint-env node*/
var fs 				= require("fs");
var config = {};

//Tracing
config.trace = true;
config.traceFile = __dirname+'/../logs/app_trace.log';
var manual = JSON.parse(fs.readFileSync('mycreds.json', 'utf8'));
//IP and port configuration
config.api_ip = manual["credentials"]["peers"][0]["api_host"];
//When using blockchain on bluemix, api_port_external and api_port_internal will be the same
config.api_port_external = manual["credentials"]["peers"][0]["api_port"]; //"3000";		//port number used when calling api from outside of the vagrant environment
config.api_port_internal = 	manual["credentials"]["peers"][0]["api_port"]; //"5000";		//port number used when calling api from inside vagrant environment - generally used for chaincode calling out to api

config.app_url = 'http://'+manual["credentials"]["peers"]["api_url"];

//Chaincode file locations
config.vehicle_log = "https://github.com/jpayne23/Car-Lease-Demo/Chaincode/vehicle_log_code";
config.vehicle = "https://github.com/jpayne23/Car-Lease-Demo/Chaincode/vehicle_code";


//Chaincode deployed names
config.vehicle_log_name = 'd8462b53eed6ffd55a9ccc4d3520c481a006b633d535e83f4647f94fa5689fbbef93934fc7eaca0914fbe85d2fb89a8c32f8506b71b5ebd986fa7c77f9e8b596';
config.vehicle_name = '609f8a8dc3368a64df71761dd5ef22ca87f4b879d0bc1020d092ec3a0536d63ce8b2380a5af16a1f2304048f5bedf3492321d5ed4e465f4fe2c61721330cc719';

exports.config = config;

