const db = require('mongoose');
const url = 'mongodb://dmaruqyan:dav123456789@ds119129.mlab.com:19129/tast12598452';
db.connect(url, {});
db.Promise = global.Promise;

module.exports = db;
