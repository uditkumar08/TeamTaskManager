from pymongo import MongoClient
import os

MONGO_URL = os.getenv("MONGO_URL")

client = MongoClient(
    MONGO_URL,
    tls=True,
    tlsAllowInvalidCertificates=True
)

db = client["taskmanager"]

users_collection = db["users"]

tasks_collection = db["tasks"]

projects_collection = db["projects"]