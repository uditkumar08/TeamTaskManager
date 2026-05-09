# Team Task Manager - Frontend

A modern React-based frontend application for team task management, built with Vite and styled with Tailwind CSS. Provides an intuitive interface for managing projects, tasks, and team collaboration.

## 🚀 Live Deployment

**Vercel**: https://task-manager-eighti.vercel.app/

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Icons**: Lucide React (via Tailwind)

## 📁 Project Structure

```
frontend/
├── public/               # Static assets
├── src/
│   ├── api/
│   │   └── axios.js      # HTTP client configuration
│   ├── components/       # Reusable UI components
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── TaskCard.jsx
│   ├── pages/            # Page components
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── Projects.jsx
│   │   ├── Signup.jsx
│   │   └── Tasks.jsx
│   ├── routes/
│   │   └── ProtectedRoute.jsx  # Route protection
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the frontend directory:
   ```env
   VITE_API_BASE_URL=http://localhost:8000
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔧 Development

### Code Quality

The project uses ESLint for code linting. Run the linter with:
```bash
npm run lint
```

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🚀 Deployment

### Vercel Deployment

The frontend is optimized for Vercel deployment:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

**Environment Variables for Vercel:**
- `VITE_API_BASE_URL` - Backend API URL (use Railway URL for production)

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist/` folder to your hosting provider

## 🌟 Features

- **User Authentication**: Login and signup functionality
- **Dashboard**: Overview of tasks and projects
- **Task Management**: Create, update, and track tasks
- **Project Management**: Organize tasks into projects
- **Responsive Design**: Works on desktop and mobile devices
- **Protected Routes**: Secure access to authenticated areas

## 🔗 API Integration

The frontend communicates with the backend API through Axios. Configure the API base URL in the `.env` file:

```env
VITE_API_BASE_URL=https://your-backend-url.com
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
