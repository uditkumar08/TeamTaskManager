from fastapi import APIRouter, HTTPException

from app.database import users_collection

from app.utils.password_handler import (
    hash_password,
    verify_password
)

from app.utils.jwt_handler import (
    create_access_token
)

router = APIRouter(prefix="/auth")


@router.post("/signup")
def signup(user: dict):

    existing_user = users_collection.find_one({
        "email": user["email"]
    })

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )

    hashed_password = hash_password(
        user["password"]
    )

    new_user = {
        "name": user["name"],
        "email": user["email"],
        "password": hashed_password,
        "role": user.get("role", "member")
    }

    users_collection.insert_one(new_user)

    return {
        "message": "User created successfully"
    }


@router.post("/login")
def login(user: dict):

    db_user = users_collection.find_one({
        "email": user["email"]
    })

    if not db_user:
        raise HTTPException(
            status_code=400,
            detail="Invalid email"
        )

    if not verify_password(
        user["password"],
        db_user["password"]
    ):
        raise HTTPException(
            status_code=400,
            detail="Invalid password"
        )

    token = create_access_token({
        "sub": db_user["email"]
    })

    return {
        "access_token": token,
        "role": db_user["role"]
    }