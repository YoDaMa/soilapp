const Client = require('azure-iot-device').Client;
const Mqtt = require('azure-iot-device-mqtt').Mqtt;

const sensor = require('i2c-seesaw-moisture-sensor')

let client = sensor.open(0x36)

setInterval(() => {
	client.getTemperature()
		.then(console.log)

	client.getMoisture()
		.then(console.log)
}, 2000);

