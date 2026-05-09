# Team Task Manager - Backend

A FastAPI-based backend service for the Team Task Manager application, providing RESTful APIs for task management, project collaboration, and user authentication.

## 🚀 Live Deployment

**Railway**: https://teamtaskmanager-production-8803.up.railway.app/

## 🛠️ Tech Stack

- **Framework**: FastAPI
- **Database**: MongoDB
- **Authentication**: JWT Tokens
- **CORS**: Enabled for cross-origin requests

## 📁 Project Structure

```
backend/
├── app/
│   ├── config.py          # Application configuration
│   ├── database.py        # Database connection setup
│   ├── dependencies.py    # Dependency injection
│   ├── main.py           # FastAPI application entry point
│   ├── models/           # Database models
│   │   ├── project.py
│   │   ├── task.py
│   │   └── user.py
│   ├── routes/           # API route handlers
│   │   ├── auth_routes.py
│   │   ├── dashboard_routes.py
│   │   ├── project_routes.py
│   │   └── task_routes.py
│   ├── schemas/          # Pydantic schemas
│   │   ├── project_schema.py
│   │   ├── task_schema.py
│   │   └── user_schema.py
│   └── utils/            # Utility functions
│       ├── jwt_handler.py
│       └── password_handler.py
└── requirements.txt      # Python dependencies
```

## 🚀 Getting Started

### Prerequisites

- Python 3.8+
- MongoDB database
- Virtual environment (recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Create and activate virtual environment**
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables**
   Create a `.env` file in the backend directory with:
   ```env
   MONGODB_URL=your_mongodb_connection_string
   JWT_SECRET_KEY=your_jwt_secret_key
   JWT_ALGORITHM=HS256
   ```

5. **Run the application**
   ```bash
   uvicorn app.main:app --reload
   ```

The API will be available at `http://localhost:8000`

## 📚 API Documentation

Once the server is running, visit `http://localhost:8000/docs` for interactive API documentation powered by Swagger UI.

### Main Endpoints

- `GET /` - Health check
- `POST /auth/login` - User login
- `POST /auth/signup` - User registration
- `GET /tasks/` - Get all tasks
- `POST /tasks/` - Create new task
- `GET /projects/` - Get all projects
- `POST /projects/` - Create new project
- `GET /dashboard/` - Get dashboard data

## 🔧 Development

### Running Tests
```bash
pytest
```

### Code Formatting
```bash
black .
isort .
```

## 🚀 Deployment

### Railway Deployment

The backend is configured for easy deployment on Railway:

1. Connect your GitHub repository to Railway
2. Set environment variables in Railway dashboard
3. Deploy automatically on push

**Environment Variables for Railway:**
- `MONGODB_URL`
- `JWT_SECRET_KEY`
- `JWT_ALGORITHM`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and ensure code quality
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.