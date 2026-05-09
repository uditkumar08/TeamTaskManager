from pydantic import BaseModel


class ProjectSchema(BaseModel):

    title: str
    description: str
    members: list[str]