var path = require('path');

var Config = new Map();
Config.set('port',3002);
Config.set('staticDir',path.join(__dirname, '..', '..', '/public'));
Config.set('viewDir',path.join(__dirname, '..', '..', '/public/views'));

module.exports = Config;
