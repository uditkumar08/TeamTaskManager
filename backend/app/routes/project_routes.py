from fastapi import APIRouter
from app.database import projects_collection
from bson import ObjectId

router = APIRouter(prefix="/projects")


@router.post("/")
def create_project(project: dict):

    result = projects_collection.insert_one(project)

    return {
        "message": "Project created",
        "id": str(result.inserted_id)
    }


@router.get("/")
def get_projects():

    projects = []

    for project in projects_collection.find():

        project["_id"] = str(project["_id"])

        projects.append(project)

    return projects


@router.delete("/{project_id}")
def delete_project(project_id: str):

    projects_collection.delete_one({
        "_id": ObjectId(project_id)
    })

    return {
        "message": "Project deleted"
    }