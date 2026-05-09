import { Link, useNavigate } from "react-router-dom"

function Sidebar() {

  const navigate = useNavigate()

  const handleLogout = () => {

    localStorage.removeItem("token")
    localStorage.removeItem("role")

    navigate("/")
  }

  return (

    <div className="w-[250px] bg-black text-white min-h-screen p-6 flex flex-col justify-between">

      <div>

        <h1 className="text-3xl font-bold mb-10">
          Team Manager
        </h1>

        <div className="flex flex-col gap-5">

          <Link
            to="/dashboard"
            className="hover:text-gray-300"
          >
            Dashboard
          </Link>

          <Link
            to="/tasks"
            className="hover:text-gray-300"
          >
            Tasks
          </Link>

          <Link
            to="/projects"
            className="hover:text-gray-300"
          >
            Projects
          </Link>

        </div>

      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
      >
        Logout
      </button>

    </div>
  )
}

export default Sidebar