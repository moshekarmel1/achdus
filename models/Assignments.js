var mongoose = require('mongoose');

var AssignmentSchema = new mongoose.Schema({
    name: String,
    assigned: {type: Date, default: Date.now},
    assigneeName: String,
    assignee: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    assignment: { type: mongoose.Schema.Types.ObjectId, ref: 'Psalm' }
});

mongoose.model('Assignment', AssignmentSchema);
