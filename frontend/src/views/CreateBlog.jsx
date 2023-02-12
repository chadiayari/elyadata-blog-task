import React, { useState, useEffect } from "react";
import blogService from "../services/blog-service";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const [blogName, setBlogName] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [author, setAuthor] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitForm = () => {};
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    // Prevent page reload
    event.preventDefault();
    var res = await blogService.createBlog({
      blog_name: blogName,
      blog_content: blogContent,
      blog_image: blogImage,
      author: author,
    });
    console.log(res);
    if (res.status == 200) {
      navigate("/");
    }
  };

  const handleBlogName = (e) => {
    setBlogName(e.target.value);
  };

  const handleBlogContent = (e) => {
    setBlogContent(e.target.value);
  };

  const handleBlogImage = (e) => {
    setBlogImage(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Blog name:
        <input
          type="text"
          name="name"
          placeholder="Blog name"
          value={blogName}
          onChange={(e) => handleBlogName(e)}
          required
        />
      </label>
      <br />
      <label>
        Blog content:
        <input
          type="text"
          name="blog_content"
          placeholder="Blog content"
          value={blogContent}
          onChange={(e) => handleBlogContent(e)}
          required
        />
      </label>
      <br />
      <label>
        Blog image:
        <input
          type="text"
          name="blog_image"
          placeholder="Blog image"
          value={blogImage}
          onChange={(e) => handleBlogImage(e)}
          required
        />
      </label>
      <br />
      <label>
        Author name:
        <input
          type="text"
          name="author_name"
          placeholder="Author"
          value={author}
          onChange={(e) => handleAuthor(e)}
          required
        />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}
