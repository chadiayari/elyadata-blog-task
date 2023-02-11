from backend.db import blog_collection
from .models import Blog
from fastapi import status
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse


async def create_blog(blog: Blog):
    blog = jsonable_encoder(blog)
    new_blog = blog_collection.insert_one(blog)
    created_blog = blog_collection.find_one({"_id": new_blog.inserted_id})
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_blog)


async def fetch_all_blogs():
    blogs = blog_collection.find({}, {'_id': 0})
    return list(blogs)
