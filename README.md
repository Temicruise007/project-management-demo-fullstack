# Project Management Dashboard Backend

This repository contains the backend codebase for a project management dashboard. The backend is built using Node.js, Express.js, and MongoDB (via Mongoose). It supports creating projects, managing tasks/submissions, uploading media files, and tracking project progress.

---

## **Features**
- **Project Management**:
  - Create new projects with title, description, client name, and due date.
  - Track project progress with percentage updates.

- **Task/Submission Management**:
  - Add tasks or submissions associated with specific projects.
  - Upload multiple media files (images, PDFs, videos, audio, etc.) per task.

- **File Uploads**:
  - Support for images, PDFs, JSON, CSV, images, videos, and audio files.
  - Files are stored locally in the `/uploads` directory.

---

## **Technologies Used**
- **Node.js**: JavaScript runtime for building scalable server-side applications.
- **Express.js**: Fast and lightweight web framework for handling API routes.
- **MongoDB**: NoSQL database for managing projects and tasks.
- **Mongoose**: ODM for MongoDB, providing schema-based modeling.
- **Multer**: Middleware for handling file uploads.

---

## **Installation**

1. Clone the repository:
   ```
   git clone https://github.com/your-username/project-management-fullstack.git
   cd project-management-backend
   ```
Install dependencies:
```
npm install
```

Set up environment variables: Create a .env file in the root directory with the following:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database>?retryWrites=true&w=majority
PORT=5000
```

Start the server:
```
npm start
```

Or for development mode with nodemon:
```
npm run dev
```

Directory Structure
arduino
Copy code
/project-management-backend
  /models
    Project.js          // Schema for projects
    Task.js             // Schema for tasks/submissions
  /middleware
    upload.js           // Multer configuration for handling file uploads
  /routes
    projectRoutes.js    // Routes for managing projects
    taskRoutes.js       // Routes for managing tasks/submissions
  /uploads              // Directory to store uploaded files
  package.json    
  server.js             // Entry point for the application


## **API Endpoints**
### 1. Project Management
Create a Project
Endpoint: POST /api/projects/create
Payload:
```
{
  "title": "E-commerce Website",
  "description": "A scalable platform for online sales.",
  "clientName": "Alice Johnson",
  "dueDate": "2024-12-31"
}
```

Response:
```
{
  "message": "Project created successfully!",
  "project": {
    "_id": "605c9b3e6f50ab12d4fbc012",
    "title": "E-commerce Website",
    "description": "A scalable platform for online sales.",
    "clientName": "Alice Johnson",
    "dueDate": "2024-12-31",
    "progress": 0,
    "files": [],
    "created_at": "2024-11-17T10:30:25.817Z",
    "__v": 0
  }
}
```

Update Project Progress
Endpoint: PATCH /api/projects/:projectId/progress
Payload:
```
{
  "progress": 50
}
```

Response:
```
{
  "message": "Project progress updated!",
  "project": { ... }
}
```

### 2. Task/Submission Management
Add a Task to a Project
Endpoint: POST /api/tasks/:projectId/add-task
Form-Data:
Key: description | Value: Task 1: Set up database schema | Type: Text
Key: files | Type: File | Upload any file (e.g., PDF, image, video).

Response:
```
{
  "message": "Task added successfully!",
  "task": {
    "_id": "606c9b4d6f50ab12d4fbc013",
    "projectId": "605c9b3e6f50ab12d4fbc012",
    "description": "Task 1: Set up database schema",
    "files": [
      "uploads/1687093035817-database-schema.pdf"
    ],
    "created_at": "2024-11-17T11:00:25.817Z",
    "__v": 0
  }
}
```

### 3.Testing
Use Postman to test the API endpoints.
Example tests:
Create a project and note the _id in the response.
Add tasks/submissions to the project using the returned _id.
Update project progress and verify the response.
Future Improvements
Integrate cloud storage (e.g., AWS S3) for scalable file storage.
Add user authentication and role-based access control.
Develop frontend to interact with the backend using a framework like React or Angular.
