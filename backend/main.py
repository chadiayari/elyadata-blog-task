from fastapi import FastAPI
from backend.models import Blog
from backend.crud import create_blog, fetch_all_blogs, get_blog_by_id, search_blog

app = FastAPI()


@app.post("/create_blog", response_description="Create a new blog")
async def new_blog(blog: Blog):
    await create_blog(blog)
    return blog


@app.get("/get_all_blogs", response_description="Get the list of all blogs")
async def get_all_blogs():
    blogs = await fetch_all_blogs()
    return blogs


@app.get("/get_blog_by_id/{id}", response_description="Get the list of all blogs")
async def get_all_blogs(id: str):
    blog = await get_blog_by_id(id)
    return blog


@app.get("/search_blog/{term}", response_description="Get the list of all blogs")
async def get_all_blogs(term: str):
    blog = await search_blog(term)
    return blog
