# Project Managament App Backend

A RESTful API service for collaborative project management that enables teams to organize projects, manage hierarchical tasks with subtasks, maintain project notes, and handle user authentication with role-based access control.

## Features

- **User Authentication & Authorization**
  - JWT-based authentication with refresh tokens
  - Email verification and password reset
  - Role-based access control (Admin, Project Admin, Member)

- **Project Management**
  - Create and manage projects
  - Team member management with role assignments
  - Project-level access control

- **Task Management**
  - Hierarchical task system with subtasks
  - File attachments support
  - Status tracking (Todo, In Progress, Done)
  - Task assignment to team members

- **Project Notes**
  - Admin-controlled documentation system
  - Project-specific note management

## Tech Stack

- **Backend**: Node.js with Express.js 5.1.0
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT with bcrypt password hashing
- **File Upload**: Multer middleware
- **Email**: Nodemailer with Mailgen templates
- **Validation**: Express-validator

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project-management-system
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/project-camp
ACCESS_TOKEN_SECRET=your-access-token-secret
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your-refresh-token-secret
REFRESH_TOKEN_EXPIRY=10d
CORS_ORIGIN=http://localhost:5173

# Email configuration
MAILTRAP_SMTP_HOST=your-smtp-host
MAILTRAP_SMTP_PORT=587
MAILTRAP_SMTP_USER=your-smtp-user
MAILTRAP_SMTP_PASS=your-smtp-password
```

4. Start the development server:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

## Scripts

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## API Endpoints

### Authentication (`/api/v1/auth/`)
- `POST /register` - User registration
- `POST /login` - User login
- `POST /logout` - User logout
- `GET /current-user` - Get current user info
- `POST /change-password` - Change password
- `POST /refresh-token` - Refresh access token
- `GET /verify-email/:verificationToken` - Email verification
- `POST /forgot-password` - Request password reset
- `POST /reset-password/:resetToken` - Reset password
- `POST /resend-email-verification` - Resend verification email

### Projects (`/api/v1/projects/`)
- `GET /` - List user projects
- `POST /` - Create project
- `GET /:projectId` - Get project details
- `PUT /:projectId` - Update project
- `DELETE /:projectId` - Delete project
- `GET /:projectId/members` - List project members
- `POST /:projectId/members` - Add project member
- `PUT /:projectId/members/:userId` - Update member role
- `DELETE /:projectId/members/:userId` - Remove member

### Tasks (`/api/v1/tasks/`)
- `GET /:projectId` - List project tasks
- `POST /:projectId` - Create task
- `GET /:projectId/t/:taskId` - Get task details
- `PUT /:projectId/t/:taskId` - Update task
- `DELETE /:projectId/t/:taskId` - Delete task
- `POST /:projectId/t/:taskId/subtasks` - Create subtask
- `PUT /:projectId/st/:subTaskId` - Update subtask
- `DELETE /:projectId/st/:subTaskId` - Delete subtask

### Notes (`/api/v1/notes/`)
- `GET /:projectId` - List project notes
- `POST /:projectId` - Create note
- `GET /:projectId/n/:noteId` - Get note details
- `PUT /:projectId/n/:noteId` - Update note
- `DELETE /:projectId/n/:noteId` - Delete note

### Health Check (`/api/v1/healthcheck/`)
- `GET /` - System health status

## User Roles & Permissions

| Feature | Admin | Project Admin | Member |
|---------|-------|---------------|--------|
| Create Project | ✓ | ✗ | ✗ |
| Update/Delete Project | ✓ | ✗ | ✗ |
| Manage Project Members | ✓ | ✗ | ✗ |
| Create/Update/Delete Tasks | ✓ | ✓ | ✗ |
| View Tasks | ✓ | ✓ | ✓ |
| Update Subtask Status | ✓ | ✓ | ✓ |
| Create/Delete Subtasks | ✓ | ✓ | ✗ |
| Create/Update/Delete Notes | ✓ | ✗ | ✗ |
| View Notes | ✓ | ✓ | ✓ |

## Project Structure

```
├── src/
│   ├── controllers/        # Request handlers
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API route definitions
│   ├── utils/             # Utility functions
│   ├── validators/        # Input validation
│   ├── db/               # Database connection
│   ├── app.js            # Express app configuration
│   └── index.js          # Application entry point
├── public/               # Static files and uploads
├── .env                  # Environment variables
└── package.json          # Dependencies and scripts
```

## Error Handling

The API uses consistent error handling with:
- `ApiError` class for custom errors
- `ApiResponse` class for success responses
- `asyncHandler` wrapper for async route handlers

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Email verification for account security
- Role-based authorization middleware
- Input validation on all endpoints
- CORS configuration
- Secure file upload handling

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

ISC License

## Author

Kushal Bansal