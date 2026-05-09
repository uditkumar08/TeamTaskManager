from fastapi import APIRouter
from app.database import tasks_collection
from bson import ObjectId

router = APIRouter(prefix="/tasks")


@router.post("/")
def create_task(task: dict):

    result = tasks_collection.insert_one(task)

    return {
        "message": "Task created successfully",
        "id": str(result.inserted_id)
    }


@router.get("/")
def get_tasks():

    tasks = []

    for task in tasks_collection.find():

        task["_id"] = str(task["_id"])

        tasks.append(task)

    return tasks


@router.delete("/{task_id}")
def delete_task(task_id: str):

    tasks_collection.delete_one({
        "_id": ObjectId(task_id)
    })

    return {
        "message": "Task deleted"
    }