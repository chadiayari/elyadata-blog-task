from backend.db import blog_collection
from .models import Blog
from fastapi import status
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
import json
from bson import json_util


async def create_blog(blog: Blog):
    blog = jsonable_encoder(blog)
    new_blog = blog_collection.insert_one(blog)
    created_blog = blog_collection.find_one({"_id": new_blog.inserted_id})
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_blog)


async def fetch_all_blogs():
    blog = blog_collection.find()
    return json.loads(json_util.dumps(blog))


async def get_blog_by_id(id):
    blog = blog_collection.find({'_id': id})
    return json.loads(json_util.dumps(blog))


async def search_blog(term):
    blog = blog_collection.find(
        {'blog_name': term})
    return json.loads(json_util.dumps(blog))


async def update_nb_likes(id, nbLikes, nbDislikes):
    updated_blog = blog_collection.find_one_and_update(
        {"_id": id}, {"$set": {"nb_likes": nbLikes, "nb_dislikes": nbDislikes}}
    )

    return json.loads(json_util.dumps(updated_blog))
