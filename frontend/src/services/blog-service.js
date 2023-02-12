import axios from "axios";

const API_URL = "/";

class BlogService {
  async getAllBlogs() {
    const response = await axios.get(API_URL + "get_all_blogs");
    if (response.data == null) return;
    return response.data;
  }

  async getBlogById(id) {
    const response = await axios.get(API_URL + "get_blog_by_id/" + id);
    if (response.data == null) return;
    return response.data;
  }

  async createBlog(data) {
    const response = await axios.post("create_blog", data);
    return response;
  }
}

export default new BlogService();
