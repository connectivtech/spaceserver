var winston = require('winston');
var config = require('./config');

require('winston-papertrail').Papertrail;

var winstonPapertrail = new winston.transports.Papertrail({
	host: config.papertrailHost,
	port: config.papertrailPort
})

winstonPapertrail.on('error',function(err) {
	// log error?
});

var logger = new winston.Logger({
	transports: [winstonPapertrail]
});

module.exports = logger;