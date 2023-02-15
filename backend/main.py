from fastapi import FastAPI
import uvicorn
from backend.models import Blog
from backend.crud import create_blog, fetch_all_blogs, get_blog_by_id, search_blog, update_nb_likes

app = FastAPI()


@app.post("/create_blog", response_description="Create a new blog")
async def createBlog(blog: Blog):
    await create_blog(blog)
    return blog


@app.get("/get_all_blogs", response_description="Get the list of all blogs")
async def getAllBlogs():
    blogs = await fetch_all_blogs()
    return blogs


@app.get("/get_blog_by_id/{id}", response_description="Get the list of all blogs")
async def getBlogById(id: str):
    blog = await get_blog_by_id(id)
    return blog


@app.get("/search_blog/{term}", response_description="Get the list of all blogs")
async def searchBlog(term: str):
    blog = await search_blog(term)
    return blog


@app.put("/update_likes",  response_description="Update the number of likes and dislikes of a given blog")
async def updateLikes(id: str, nb_likes: int, nb_dislikes: int):
    item = await update_nb_likes(id, nb_likes, nb_dislikes)
    return item


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=5049)
