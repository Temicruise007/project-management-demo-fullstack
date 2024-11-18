const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    clientName: { type: String, required: true },
    dueDate: { type: Date},
    progress: { type: String, default: 0}, //Track project progress as a percentage
    files: [{ type: String}], //store file paths
    created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', projectSchema);