import React from "react";
import styles from "../CSS/Homepage.module.css";
import ArticlesList from "./ArticlesList";

const Homepage = () => {
  return (
    <main>
      <h1 className={styles.latestArticles}>Latest Articles</h1>
      {/* slice */}
      <ArticlesList />
    </main>
  );
};

export default Homepage;
