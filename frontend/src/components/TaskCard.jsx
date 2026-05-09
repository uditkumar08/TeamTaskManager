function TaskCard({
  task,
  deleteTask,
  updateStatus
}) {

  return (

    <div className="bg-white p-5 rounded-2xl shadow">

      <h2 className="text-2xl font-bold mb-3">
        {task.title}
      </h2>

      <p className="mb-2">
        {task.description}
      </p>

      <p className="mb-2">
        <span className="font-semibold">
          Status:
        </span>{" "}
        {task.status}
      </p>

      <p className="mb-2">
        <span className="font-semibold">
          Priority:
        </span>{" "}
        {task.priority}
      </p>

      <p className="mb-2">
        <span className="font-semibold">
          Assigned To:
        </span>{" "}
        {task.assignedTo}
      </p>

      <p className="mb-2">
        <span className="font-semibold">
          Due Date:
        </span>{" "}
        {task.dueDate}
      </p>

      <div className="flex gap-3 mt-4">

        <button
          onClick={() =>
            deleteTask(task._id)
          }
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>

        <button
          onClick={() =>
            updateStatus(task._id, "Done")
          }
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Mark Done
        </button>

      </div>

    </div>
  )
}

export default TaskCard