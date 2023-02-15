import React, { useState } from "react";
import blogService from "../../services/blog-service";
import { useNavigate } from "react-router-dom";
import styles from "./styles.css";
import cn from "classnames";

export default function CreateBlog() {
  const [blogName, setBlogName] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [blogImage, setBlogImage] = useState("");
  const [author, setAuthor] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    // Prevent page reload
    event.preventDefault();
    var res = await blogService.createBlog({
      blog_name: blogName,
      blog_content: blogContent,
      blog_image: blogImage,
      author: author,
      nb_likes: 0,
      nb_dislikes: 0,
    });
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
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-name">
            <p>Create a new blog</p>
          </div>
          <div className="form-element-container">
            <div className="form-element">
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
            </div>
          </div>
          <div className="form-element-container">
            <div className="form-element">
              <label>
                Blog content:
                <input
                  type="text"
                  name="blog_content"
                  rows="5"
                  cols="50"
                  placeholder="Blog content"
                  value={blogContent}
                  onChange={(e) => handleBlogContent(e)}
                  required
                />
              </label>
            </div>
          </div>
          <div className="form-element-container">
            <div className="form-element">
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
            </div>
          </div>
          <div className="form-element-container">
            <div className="form-element">
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
            </div>
          </div>{" "}
          <div className="form-element">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}
