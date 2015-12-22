var mongoose = require('mongoose');

var UrlSchema = new mongoose.Schema({
	name: {type: String, lowercase: true, unique: true},
	urls: [String]
});

mongoose.model('Url', UrlSchema);