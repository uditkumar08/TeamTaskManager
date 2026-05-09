import { useEffect, useState } from "react"

import API from "../api/axios"

import Layout from "../components/Layout"

function Projects() {

  const [projects, setProjects] = useState([])

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    members: []
  })

  useEffect(() => {

    fetchProjects()

  }, [])

  const fetchProjects = async () => {

    try {

      const res = await API.get("/projects/")

      setProjects(res.data)

    } catch (err) {

      console.log(err)
    }
  }

  const createProject = async () => {

    try {

      await API.post(
        "/projects/",
        formData
      )

      fetchProjects()

      setFormData({
        title: "",
        description: "",
        members: []
      })

    } catch (err) {

      console.log(err)
    }
  }

  return (

    <Layout>

      <h1 className="text-4xl font-bold mb-8">
        Projects
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow mb-10">

        <h2 className="text-2xl font-semibold mb-5">
          Create Project
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <input
            placeholder="Project Title"
            value={formData.title}
            className="border p-3 rounded-lg"
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value
              })
            }
          />

          <input
            placeholder="Members (comma separated)"
            className="border p-3 rounded-lg"
            onChange={(e) =>
              setFormData({
                ...formData,
                members: e.target.value.split(",")
              })
            }
          />

          <textarea
            placeholder="Description"
            value={formData.description}
            className="border p-3 rounded-lg col-span-2"
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value
              })
            }
          />

        </div>

        <button
          onClick={createProject}
          className="bg-black text-white px-6 py-3 rounded-lg mt-5"
        >
          Create Project
        </button>

      </div>

      {
        projects.length === 0 &&
        (
          <p className="text-gray-500">
            No projects available
          </p>
        )
      }

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

        {projects.map((project) => (

          <div
            key={project._id}
            className="bg-white p-5 rounded-2xl shadow"
          >

            <h2 className="text-2xl font-bold mb-3">
              {project.title}
            </h2>

            <p className="mb-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">

              {project.members?.map((member, index) => (

                <span
                  key={index}
                  className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                >
                  {member}
                </span>

              ))}

            </div>

          </div>

        ))}

      </div>

    </Layout>
  )
}

export default Projects