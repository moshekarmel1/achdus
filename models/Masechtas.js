var mongoose = require('mongoose');

var MasechtaSchema = new mongoose.Schema({
    name: String,
    assigned: {type: Date, default: Date.now},
    assigneeName: String
    assignee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('Masechta', MasechtaSchema);
