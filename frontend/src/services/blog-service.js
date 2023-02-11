import axios from "axios";

const API_URL = "/";

class BlogService {
  async getAllBlogs() {
    const response = await axios.get(API_URL + "get_all_blogs");
    if (response.data == null) return;
    return response.data;
  }
}

export default new BlogService();
