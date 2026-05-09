from pydantic import BaseModel
from typing import List

class ProjectCreate(BaseModel):

    title: str
    description: str
    members: List[str]