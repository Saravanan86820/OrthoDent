# OrthoDent

![Project Status](https://img.shields.io/badge/status-Completed-green) ![Technologies](https://img.shields.io/badge/Technologies-MERN-blue)

**OrthoDent** is a web-based clinical and academic management platform developed for the Department of Orthodontics at **MGPGIDS (Govt. of Puducherry)**. It replaces manual record-keeping with a secure, efficient, and collaborative digital system.

---

## Table of Contents
- [Project Duration](#project-duration)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Highlights](#project-highlights)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)

---

## Project Duration
**Dec 2024 – May 2025**

---

## Technologies Used
- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Tokens)  
- **Stack:** MERN  

---

## Features

### 1. Student Activity Tracking
- Track student activities, academic progress, and participation.
- Real-time updates for faculty and students.

### 2. Patient Case Management
- Add and manage patient case records securely.
- Maintain detailed medical, dental, and treatment histories.
- Manage follow-ups for ongoing treatments.

### 3. Attendance Monitoring
- Record and monitor student attendance for theory, practical, and clinical sessions.
- Generate attendance reports and statistics per course, batch, and month.

### 4. Real-Time Collaboration
- Faculty and students can collaborate on case records and academic tasks.
- Secure role-based access ensures appropriate permissions.

### 5. Digital Transformation
- Replaces paper-based manual records.
- Improves data security, accuracy, and accessibility.

---

## Project Highlights
- Designed and implemented core modules for the Department of Orthodontics.
- Enhanced clinical and academic workflow with automated tracking.
- User-friendly interface built with React.js and Tailwind CSS.
- Secure authentication and session management using JWT.

---

## Screenshots
*Add screenshots of your project here for better visualization.*  

![Dashboard Example](path/to/dashboard.png)  
![Patient Case Management](path/to/patient-case.png)  
![Attendance Module](path/to/attendance.png)  

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**  
   ```bash
   git clone <repository-url>

2. **Backend Setup:**
   ```
   cd backend
   npm install
   npm start

3. **Frontend Setup:**
   ```
   cd ../frontend
   npm install
   npm start

4. **Environment Variables:**
   ```
   PORT=5000
   MONGO_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-secret-key>

5. **Open your browser and visit:**
   ```
   http://localhost:3000


## Folder Structure
```
OrthoDent/
├── backend/ # Node.js & Express server
│ ├── config/ # Configuration files (DB connection, env variables)
│ ├── controllers/ # Request handling logic
│ ├── middlewares/ # Middleware functions (auth, error handling)
│ ├── models/ # Mongoose schemas/models
│ ├── routes/ # API route definitions
│ ├── utils/ # Utility/helper functions
│ ├── server.js # Entry point for the backend
│ └── package.json # Backend dependencies
│
├── frontend/ # React.js client
│ ├── public/ # Public assets (index.html, favicon)
│ ├── src/ # Source code
│ │ ├── components/ # Reusable React components
│ │ ├── pages/ # Page-level components
│ │ ├── services/ # API calls and data services
│ │ ├── hooks/ # Custom React hooks
│ │ ├── App.js # Main App component
│ │ └── index.js # Entry point for React
│ └── package.json # Frontend dependencies
│
├── README.md # Project documentation
└── .gitignore # Git ignore rules
```

## API Endpoints

| Method | Endpoint        | Description           |
| ------ | --------------- | --------------------- |
| GET    | /api/students   | Get all students      |
| POST   | /api/students   | Add new student       |
| GET    | /api/patients   | Get patient details   |
| POST   | /api/patients   | Add new patient case  |
| GET    | /api/attendance | Fetch attendance data |
| POST   | /api/attendance | Record attendance     |

