from fastapi import (
    APIRouter,
    HTTPException,
    Header
)

from bson import ObjectId

from app.database import (
    projects_collection
)

from app.schemas.project_schema import (
    ProjectSchema
)

from app.utils.jwt_handler import (
    verify_token
)

router = APIRouter(prefix="/projects")


@router.post("/")
def create_project(
    project: ProjectSchema,
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

    if payload["role"] != "admin":

        raise HTTPException(
            status_code=403,
            detail="Only admin can create projects"
        )

    new_project = {
        "title": project.title,
        "description": project.description,
        "members": project.members
    }

    result = projects_collection.insert_one(
        new_project
    )

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