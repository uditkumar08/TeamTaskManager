from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes import auth_routes
from app.routes import task_routes
from app.routes import project_routes
from app.routes import dashboard_routes

from app.database import client

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://task-manager-eighti.vercel.app"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_routes.router)
app.include_router(task_routes.router)
app.include_router(project_routes.router)
app.include_router(dashboard_routes.router)


@app.get("/")
def home():

    return {
        "message": "API Running Successfully"
    }


@app.get("/health")
def health_check():

    try:

        client.admin.command("ping")

        return {
            "status": "success",
            "database": "connected"
        }

    except Exception as e:

        return {
            "status": "failed",
            "error": str(e)
        }


@app.get("/ping")
def ping():

    return {
        "message": "pong"
    }