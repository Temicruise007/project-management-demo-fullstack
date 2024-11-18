const express = require('express');
const mongoose = require('mongoose');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');

//initialize express app to use middlewares
const app = express();


//middleware
/* This line tells your Express application to use the express.json() middleware.
express.json() parses incoming requests with a Content-Type of application/json 
and converts the JSON payload into a JavaScript object. */
app.use(express.json());

/* This line tells your Express application to use the express.urlencoded() middleware.
express.urlencoded() parses incoming requests with a Content-Type of application/x-www-form-urlencoded
and converts the payload into a JavaScript object. */
app.use(express.urlencoded({ extended: true }));

/* This line tells your Express application to use the express.static() middleware.
express.static() serves static files and is based on the serve-static library.
It is used to serve images, CSS files, and JavaScript files in a directory named public. */
app.use('/uploads', express.static('uploads')); //serve uploaded files



//Routes
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes); //register new task routes


mongoose
.connect('mongodb+srv://Temicruise007:Goldberg136166@cluster0.txypd.mongodb.net/project-task-management?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => { //if connection is successful, print success message and then start backend server
    //print susccess message
    console.log('Successfully connected to the database!');
    //start server
    app.listen(5005, () => {
      console.log('Server is running on port 5005')
    });
  })
  .catch(err => {
    console.log(err); //if connection is not successful, then log the error
  });