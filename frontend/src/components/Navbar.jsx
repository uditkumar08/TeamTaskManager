import { useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate()

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

        <p className="text-gray-600 capitalize">
          {localStorage.getItem("role")}
        </p>

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