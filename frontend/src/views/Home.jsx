import React, { useState, useEffect } from "react";
import styles from "../styles/Search.module.scss";
import Card from "../components/Card";
import cn from "classnames";
import { HiOutlineSearch } from "react-icons/hi";
import blogService from "../services/blog-service";

export default function Home() {
  const [blogsData, setBlogsData] = useState([]);
  const [search, setSearch] = useState({
    aircraft_name: "",
    category: "",
    in_production: "",
    model: "",
  });

  useEffect(() => {
    blogService.getAllBlogs().then((data) => console.log(data));
  }, []);

  const handleSearchChanged = (key, value) => {};

  return (
    <div className={cn("section-pt80", styles.section)}>
      <div className={cn(styles.container)}>
        <div className={styles.row}>
          <div className={"filters_target " + styles.filters}>
            <div className={styles.top}>
              <div className={styles.title}>Elyadata Blog</div>
            </div>
            <div className={styles.form}>
              <form className={styles.search} action="">
                <input
                  className={styles.input}
                  type="text"
                  value={search.aircraft_name}
                  onChange={(e) =>
                    handleSearchChanged("aircraft_name", e.target.value)
                  }
                  name="search"
                  placeholder="Search Blog"
                  required
                />
                <button className={styles.result}>
                  <HiOutlineSearch name="search" size="16" />
                </button>
              </form>
            </div>
          </div>
          <div>
            <div className={styles.wrapper}>
              <div className={styles.list}>
                {blogsData?.map((blog) => (
                  <Card
                    className={styles.card}
                    item={blog}
                    key={blog.blog_name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
