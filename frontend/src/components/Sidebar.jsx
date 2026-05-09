import { Link, useNavigate } from "react-router-dom"

function Sidebar() {

  const navigate = useNavigate()

  const role = localStorage.getItem("role")
  const token = localStorage.getItem("token")

  const logout = () => {

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

      {
        token && (

          <div className="border-t border-gray-700 pt-5">

            <p className="text-sm text-gray-400">
              Logged in as
            </p>

            <div className="mt-2">

              <p className="font-semibold text-lg">
                User
              </p>

              <div
                className={
                  role === "admin"
                    ? "bg-green-500 inline-block px-3 py-1 rounded-lg mt-2 capitalize"
                    : "bg-blue-500 inline-block px-3 py-1 rounded-lg mt-2 capitalize"
                }
              >
                {role}
              </div>

            </div>

          </div>

        )
      }

    </div>
  )
}

export default Sidebar