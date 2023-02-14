import React, { useState } from "react";
import cn from "classnames";
import blogService from "../../services/blog-service";
import { useNavigate } from "react-router-dom";
import styles from "./styles.css";

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
    <>
      <div className={cn("wrapper")}>
        <form onSubmit={() => handleSubmit()} className="form-container">
          <h2>Create a new blog</h2>
          <div className="form-element-container">
            <div className="form-element">
              <label>Title:</label>
              <input
                type="text"
                name="name"
                placeholder="Blog title"
                value={blogName}
                onChange={(e) => handleBlogName(e)}
                required
              />
            </div>
          </div>
          <div className="form-element-container">
            <div className="form-element">
              <label>Written by:</label>
              <input
                type="text"
                name="Write you name"
                placeholder="Author"
                value={author}
                onChange={(e) => handleAuthor(e)}
                required
              />
            </div>
          </div>
          <div className="form-element-container">
            <div className="form-element">
              <label>Blog image url:</label>
              <input
                type="text"
                id="blog-image"
                name="blog_image"
                placeholder="Blog image URL"
                value={blogImage}
                onChange={(e) => handleBlogImage(e)}
                required
              />
            </div>
          </div>

          <div className="form-element-container">
            <div className="form-element">
              <label>Body</label>
              <textarea
                name="blog_content"
                rows="5"
                cols="50"
                placeholder="Blog content"
                value={blogContent}
                onChange={(e) => handleBlogContent(e)}
                required
              ></textarea>
            </div>
          </div>
          <div className="form-element">
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </>
  );
}
