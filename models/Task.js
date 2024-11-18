const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    description: { type: String, required: true },
    files: [{ type: String }], //store file paths for task-specific uploads
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Task', taskSchema);