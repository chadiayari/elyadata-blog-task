from typing import List
from uuid import uuid4
from fastapi import FastAPI
from models import Blog

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}
