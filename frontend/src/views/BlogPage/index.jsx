import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import blogService from "../../services/blog-service";
import Chip from "../../components/Chip";

export const BlogPage = () => {
  const [blogData, setBlogData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    blogService.getBlogById(id).then((data) => setBlogData(data[0]));
  }, []);

  return (
    <>
      {blogData ? (
        <div className="blog-wrap">
          <center>
            <p className="blog-date">Published by {blogData.author}</p>
            <h1>{blogData.blog_name}</h1>
            <div className="blog-subCategory">
              <div>
                <Chip label={blogData.blog_name} />
              </div>
            </div>
          </center>
          <img src={blogData.blog_image} alt="cover" />
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blogData.blog_content }}
          ></div>
        </div>
      ) : (
        <p>Content not found</p>
      )}{" "}
    </>
  );
};
