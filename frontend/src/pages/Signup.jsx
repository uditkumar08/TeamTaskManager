import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

import API from "../api/axios"

function Signup() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "member"
  })

  const handleSignup = async () => {

    try {

      await API.post(
        "/auth/signup",
        formData
      )

      navigate("/")

    } catch (err) {

      console.log(err)
    }
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-2xl shadow w-[400px]">

        <h1 className="text-3xl font-bold mb-6 text-center">
          Signup
        </h1>

        <input
          placeholder="Name"
          value={formData.name}
          className="w-full border p-3 rounded-lg mb-4"
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value
            })
          }
        />

        <input
          placeholder="Email"
          value={formData.email}
          className="w-full border p-3 rounded-lg mb-4"
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          className="w-full border p-3 rounded-lg mb-4"
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value
            })
          }
        />

        <select
          value={formData.role}
          className="w-full border p-3 rounded-lg mb-4"
          onChange={(e) =>
            setFormData({
              ...formData,
              role: e.target.value
            })
          }
        >
          <option value="member">
            Member
          </option>

          <option value="admin">
            Admin
          </option>
        </select>

        <button
          onClick={handleSignup}
          className="w-full bg-black text-white py-3 rounded-lg"
        >
          Signup
        </button>

        <p className="mt-5 text-center">

          Already have an account?

          <Link
            to="/"
            className="text-blue-500 ml-2"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  )
}

export default Signup