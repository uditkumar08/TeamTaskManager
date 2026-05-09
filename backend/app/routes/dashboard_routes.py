from fastapi import APIRouter
from app.database import tasks_collection
from datetime import datetime

router = APIRouter(prefix="/dashboard")


@router.get("/")
def dashboard_data():

    total_tasks = tasks_collection.count_documents({})

    completed_tasks = tasks_collection.count_documents({
        "status": "Done"
    })

    pending_tasks = tasks_collection.count_documents({
        "status": "Todo"
    })

    in_progress_tasks = tasks_collection.count_documents({
        "status": "In Progress"
    })

    overdue_tasks = 0

    current_date = datetime.now()

    tasks = tasks_collection.find()

    for task in tasks:

        due_date = task.get("dueDate")

        if due_date:

            try:

                due_date_obj = datetime.strptime(
                    due_date,
                    "%Y-%m-%d"
                )

                if (
                    due_date_obj < current_date
                    and task["status"] != "Done"
                ):
                    overdue_tasks += 1

            except:
                pass

    return {
        "total_tasks": total_tasks,
        "completed_tasks": completed_tasks,
        "pending_tasks": pending_tasks,
        "in_progress_tasks": in_progress_tasks,
        "overdue_tasks": overdue_tasks
    }