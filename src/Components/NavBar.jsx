import React from "react";
import styles from "../CSS/NavBar.module.css";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav id="nav">
      <div className={styles.btnContainer}>
        <Link to="/">
          <button className={styles.navBtn}>Home</button>
        </Link>
        <Link to="/articles">
          <button className={styles.navBtn}>Articles</button>
        </Link>
        <Link to="/topics">
          <button className={styles.navBtn}>Topics</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
