import { Link } from "react-router-dom"

function Sidebar() {

  return (

    <div className="w-[250px] bg-black text-white min-h-screen p-6">

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
  )
}

export default Sidebar