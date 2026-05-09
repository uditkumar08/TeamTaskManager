import { useEffect, useState } from "react"

import API from "../api/axios"

import Layout from "../components/Layout"
import TaskCard from "../components/TaskCard"

function Tasks() {

  const [tasks, setTasks] = useState([])

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "Todo",
    priority: "Medium",
    dueDate: "",
    assignedTo: ""
  })

  useEffect(() => {

    fetchTasks()

  }, [])

  const fetchTasks = async () => {

    try {

      const res = await API.get("/tasks")

      setTasks(res.data)

    } catch (err) {

      console.log(err)
    }
  }

  const createTask = async () => {

    try {

      const token = localStorage.getItem("token")

      await API.post(
        "/tasks",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      alert("Task Created")

      fetchTasks()

    } catch (err) {

      console.log(err)

      alert("Error creating task")
    }
  }

  const deleteTask = async (id) => {

    try {

      await API.delete(`/tasks/${id}`)

      fetchTasks()

    } catch (err) {

      console.log(err)
    }
  }

  const updateStatus = async (id, status) => {

    try {

      await API.put(
        `/tasks/${id}`,
        {
          status
        }
      )

      fetchTasks()

    } catch (err) {

      console.log(err)
    }
  }

  return (

    <Layout>

      <h1 className="text-4xl font-bold mb-8">
        Tasks
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow mb-10">

        <h2 className="text-2xl font-semibold mb-5">
          Create Task
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <input
            placeholder="Title"
            className="border p-3 rounded-lg"
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value
              })
            }
          />

          <input
            placeholder="Assigned To"
            className="border p-3 rounded-lg"
            onChange={(e) =>
              setFormData({
                ...formData,
                assignedTo: e.target.value
              })
            }
          />

          <input
            placeholder="Description"
            className="border p-3 rounded-lg"
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value
              })
            }
          />

          <input
            type="date"
            className="border p-3 rounded-lg"
            onChange={(e) =>
              setFormData({
                ...formData,
                dueDate: e.target.value
              })
            }
          />

          <select
            className="border p-3 rounded-lg"
            onChange={(e) =>
              setFormData({
                ...formData,
                priority: e.target.value
              })
            }
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <select
            className="border p-3 rounded-lg"
            onChange={(e) =>
              setFormData({
                ...formData,
                status: e.target.value
              })
            }
          >
            <option>Todo</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>

        </div>

        <button
          onClick={createTask}
          className="bg-black text-white px-6 py-3 rounded-lg mt-5"
        >
          Create Task
        </button>

      </div>

      {
        tasks.length === 0 &&
        (
          <p className="text-gray-500">
            No tasks available
          </p>
        )
      }

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

        {tasks.map((task) => (

          <TaskCard
            key={task._id}
            task={task}
            deleteTask={deleteTask}
            updateStatus={updateStatus}
          />

        ))}

      </div>

    </Layout>
  )
}

export default Tasks