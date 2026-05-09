import { useEffect, useState } from "react"

import API from "../api/axios"

import Layout from "../components/Layout"

function Dashboard() {

  const [data, setData] = useState({})

  useEffect(() => {

    fetchDashboard()

  }, [])

  const fetchDashboard = async () => {

    try {

      const res = await API.get(
        "/dashboard"
      )

      setData(res.data)

    } catch (err) {

      console.log(err)
    }
  }

  return (

    <Layout>

      <h1 className="text-4xl font-bold mb-10">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold">
            Total Tasks
          </h2>

          <p className="text-3xl mt-3">
            {data.total_tasks}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold">
            Completed
          </h2>

          <p className="text-3xl mt-3">
            {data.completed_tasks}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold">
            Pending
          </h2>

          <p className="text-3xl mt-3">
            {data.pending_tasks}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold">
            In Progress
          </h2>

          <p className="text-3xl mt-3">
            {data.in_progress_tasks}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold">
            Overdue
          </h2>

          <p className="text-3xl mt-3 text-red-500">
            {data.overdue_tasks}
          </p>
        </div>

      </div>

    </Layout>
  )
}

export default Dashboard