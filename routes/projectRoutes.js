// routes/projectRoutes.js
const express = require('express');

//A mini-router to define endpoints related to projects.
//creates a new router object that can be used to define routes for your web application.
const router = express.Router();

const Project = require('../models/Project');

// Create a new project
router.post('/create', async (req, res) => {
    const { title, description, clientName, dueDate } = req.body;

    try {
        const newProject = new Project({
            title,
            description,
            clientName,
            dueDate
        });

        const savedProject = await newProject.save();
        res.status(201).json({
            message: 'Project created successfully!',
            project: savedProject
        });
    } catch (error) {
        console.error('Error creating project:', error.message); //log the actual error message
        res.status(500).json({ message: 'Server Error' });
    }
});

// Update project progress
router.patch('/:projectId/progress', async (req, res) => {
    const { projectId } = req.params;
    const { progress } = req.body;

    try {
        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        project.progress = progress;
        await project.save();

        res.status(200).json({
            message: 'Project progress updated!',
            project
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
