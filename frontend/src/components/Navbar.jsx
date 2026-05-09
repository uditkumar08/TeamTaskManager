import { useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate()

  const role = localStorage.getItem("role")

  const logout = () => {

    localStorage.removeItem("token")
    localStorage.removeItem("role")

    navigate("/")
  }

  return (

    <div className="bg-white shadow px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        Team Task Manager
      </h1>

      <div className="flex items-center gap-4">

  {
  role && (
    <div
      className={
        role === "admin"
          ? "bg-green-500 text-white px-4 py-2 rounded-lg font-medium capitalize"
          : "bg-blue-500 text-white px-4 py-2 rounded-lg font-medium capitalize"
      }
    >
      {role}
    </div>
  )
}

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
        >
          Logout
        </button>

      </div>

    </div>
  )
}

export default Navbar