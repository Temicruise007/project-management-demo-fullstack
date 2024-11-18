// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const Project = require('../models/Project');
const upload = require('../middleware/upload').array('files', 5); // Allow up to 5 files per task

// Add a task to a project
router.post('/:projectId/add-task', (req, res) => {
    const { projectId } = req.params;
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: err });
        }

        const { description } = req.body;
        const files = req.files.map(file => file.path); // Save file paths

        try {
            const project = await Project.findById(projectId);
            if (!project) {
                return res.status(404).json({ message: 'Project not found' });
            }

            const newTask = new Task({
                projectId,
                description,
                files
            });

            const savedTask = await newTask.save();
            res.status(201).json({
                message: 'Task added successfully!',
                task: savedTask
            });
        } catch (error) {
            res.status(500).json({ message: 'Server Error' });
        }
    });
});

module.exports = router;
