from pydantic import BaseModel
from typing import Literal


class TaskSchema(BaseModel):

    title: str
    description: str

    status: Literal[
        "Todo",
        "In Progress",
        "Done"
    ]

    priority: Literal[
        "Low",
        "Medium",
        "High"
    ]

    dueDate: str

    assignedTo: str