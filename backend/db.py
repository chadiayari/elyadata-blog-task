from pymongo import MongoClient


client = MongoClient("mongodb://localhost:27017")
db = client["elyadata_blog"]
blog_collection = db.elyadata_blog
