from fastapi import FastAPI
from backend.models import Blog
from backend.crud import create_blog, fetch_all_blogs

app = FastAPI()


@app.post("/create_blog", response_description="Create a new blog")
async def new_blog(blog: Blog):
    await create_blog(blog)
    return blog


@app.get("/get_all_blogs", response_description="Get the list of all blogs")
async def get_all_blogs():
    todos = await fetch_all_blogs()
    return todos
