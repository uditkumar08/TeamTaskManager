from fastapi import (
    APIRouter,
    HTTPException,
    Header
)

from bson import ObjectId
from datetime import datetime

from app.database import tasks_collection

from app.schemas.task_schema import (
    TaskSchema
)

from app.utils.jwt_handler import (
    verify_token
)

router = APIRouter(prefix="/tasks")


@router.post("/")
def create_task(
    task: TaskSchema,
    authorization: str = Header(None)
):

    if not authorization:

        raise HTTPException(
            status_code=401,
            detail="Token missing"
        )

    token = authorization.split(" ")[1]

    payload = verify_token(token)

    if not payload:

        raise HTTPException(
            status_code=401,
            detail="Invalid token"
        )

    new_task = {
        "title": task.title,
        "description": task.description,
        "status": task.status,
        "priority": task.priority,
        "dueDate": task.dueDate,
        "assignedTo": task.assignedTo,
        "createdAt": datetime.utcnow()
    }

    result = tasks_collection.insert_one(
        new_task
    )

    return {
        "message": "Task created",
        "id": str(result.inserted_id)
    }


@router.get("/")
def get_tasks():

    tasks = []

    for task in tasks_collection.find():

        task["_id"] = str(task["_id"])

        tasks.append(task)

    return tasks


@router.put("/{task_id}")
def update_task(
    task_id: str,
    updated_task: dict
):

    tasks_collection.update_one(
        {"_id": ObjectId(task_id)},
        {
            "$set": updated_task
        }
    )

    return {
        "message": "Task updated"
    }


@router.delete("/{task_id}")
def delete_task(task_id: str):

    tasks_collection.delete_one({
        "_id": ObjectId(task_id)
    })

    return {
        "message": "Task deleted"
    }