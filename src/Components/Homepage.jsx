import React from "react";
import styles from "../CSS/Homepage.module.css";
import ArticlesList from "./ArticlesList";

const Homepage = () => {
  return (
    <main>
      <h1 className={styles.featuredArticles}>Featured Articles</h1>
      {/* slice */}
      <ArticlesList />
    </main>
  );
};

export default Homepage;
