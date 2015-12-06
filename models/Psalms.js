var mongoose = require('mongoose');

var PsalmSchema = new mongoose.Schema({
    number: Number,
    assigned: {type: Date, default: Date.now},
    assigneeName: String,
    assignee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('Psalm', PsalmSchema);
