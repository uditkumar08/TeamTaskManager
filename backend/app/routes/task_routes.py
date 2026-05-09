from fastapi import APIRouter

from app.database import tasks_collection

from app.schemas.task_schema import TaskCreate

router = APIRouter(prefix="/tasks")


@router.get("")
def get_tasks():

    tasks = list(tasks_collection.find())

    for task in tasks:

        task["_id"] = str(task["_id"])

    return tasks


@router.post("")
def create_task(task: TaskCreate):

    new_task = {
        "title": task.title,
        "description": task.description,
        "status": task.status,
        "priority": task.priority,
        "dueDate": task.dueDate,
        "assignedTo": task.assignedTo
    }

    tasks_collection.insert_one(new_task)

    return {
        "message": "Task created successfully"
    }


@router.delete("/{task_id}")
def delete_task(task_id: str):

    from bson import ObjectId

    tasks_collection.delete_one({
        "_id": ObjectId(task_id)
    })

    return {
        "message": "Task deleted"
    }


@router.put("/{task_id}")
def update_task(task_id: str, data: dict):

    from bson import ObjectId

    tasks_collection.update_one(
        {
            "_id": ObjectId(task_id)
        },
        {
            "$set": data
        }
    )

    return {
        "message": "Task updated"
    }