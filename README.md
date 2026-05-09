# Team Task Manager

A full-stack team collaboration application for managing projects and tasks efficiently. Built with modern web technologies and deployed on Railway and Vercel.

## 🚀 Live Deployments

- **Frontend**: https://teamttaskmanager.vercel.app/
- **Backend API**: https://teamtaskmanager-production-8803.up.railway.app/
- **API Docs**: https://teamtaskmanager-production-8803.up.railway.app/docs

## 🏗️ Architecture

This project consists of two main components:

### Backend (FastAPI)
- RESTful API built with FastAPI
- MongoDB database
- JWT authentication
- CORS enabled for frontend communication
- Deployed on Railway

### Frontend (React)
- Modern React application with Vite
- Tailwind CSS for styling
- Axios for API communication
- React Router for navigation
- Deployed on Vercel

## 📁 Project Structure

```
TeamTaskManager/
├── backend/              # FastAPI backend application
│   ├── app/             # Application code
│   ├── requirements.txt # Python dependencies
│   └── README.md        # Backend documentation
├── frontend/            # React frontend application
│   ├── src/            # Source code
│   ├── package.json    # Node dependencies
│   └── README.md       # Frontend documentation
└── README.md           # This file
```

## 🚀 Quick Start

### Prerequisites

- Python 3.8+ (for backend)
- Node.js 16+ (for frontend)
- MongoDB database

### Running Locally

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TeamTaskManager
   ```

2. **Setup Backend**
   ```bash
   cd backend
   python -m venv venv
   # Windows:
   venv\Scripts\activate
   # macOS/Linux:
   source venv/bin/activate
   pip install -r requirements.txt
   # Configure .env file with MongoDB URL and JWT secrets
   uvicorn app.main:app --reload
   ```

3. **Setup Frontend** (in a new terminal)
   ```bash
   cd frontend
   npm install
   # Configure .env file with VITE_API_BASE_URL
   npm run dev
   ```

4. **Access the application**
   - Frontend: https://teamttaskmanager.vercel.app/
   - Backend API: https://teamtaskmanager-production-8803.up.railway.app/
   - API Docs: https://teamtaskmanager-production-8803.up.railway.app/docs

## 🌟 App Features

- **User Authentication**: Secure login and registration
- **Project Management**: Create and manage team projects
- **Task Management**: Assign, track, and update tasks
- **Dashboard**: Overview of all projects and tasks
- **Responsive Design**: Works on all devices
- **Real-time Updates**: Live synchronization of changes

## 🚀 Future Features

- **Notifications**: Email and in-app notifications for task updates
- **File Attachments**: Upload and share files with tasks
- **Team Chat**: Real-time messaging within projects
- **Time Tracking**: Log time spent on tasks
- **Advanced Reporting**: Analytics and insights on team productivity
- **Mobile App**: Native mobile applications for iOS and Android

## 🛠️ Tech Stack

### Backend
- **FastAPI**: High-performance web framework
- **MongoDB**: NoSQL database
- **PyJWT**: JSON Web Token authentication
- **Pydantic**: Data validation
- **Uvicorn**: ASGI server

### Frontend
- **React 19**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **Axios**: HTTP client

## 🚀 Deployment

### Backend (Railway)
The backend is deployed on Railway with automatic deployments from the main branch.

### Frontend (Vercel)
The frontend is deployed on Vercel with automatic deployments from the main branch.

## 🤝 Contributing

We welcome contributions! Please see the individual README files in `backend/` and `frontend/` directories for detailed contribution guidelines.

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or support, please open an issue in the repository.