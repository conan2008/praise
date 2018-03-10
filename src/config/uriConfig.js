var path = require('path');

var baseUri = 'http://localhost:8082';
var UriConfig = new Map();

UriConfig.set('addOnePraise',baseUri + '/praise/addOnePraise');

module.exports = UriConfig;