from pydantic import BaseModel

class TaskCreate(BaseModel):

    title: str
    description: str
    status: str
    priority: str
    dueDate: str
    assignedTo: str