import { Link } from "react-router-dom";

import cn from "classnames";
import styles from "./styles.css";

const Header = () => {
  return (
    <header id="header" class="fixed-top">
      <center>
        <a href="/" class="nav-btn">
          Home Page
        </a>

        <a href="create-blog" class="nav-btn">
          Create a new blog
        </a>
      </center>
    </header>
  );
};

export default Header;
