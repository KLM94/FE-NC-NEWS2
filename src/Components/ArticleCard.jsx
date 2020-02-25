import React from "react";
import styles from "../CSS/ArticleCard.module.css";
import { Link } from "@reach/router";

function ArticleCard(props) {
  return (
    <ul className={styles.articleGrid}>
      {props.articles.map(article => {
        return (
          <li key={article.article_id}>
            <div className={styles.articleContainer}>
              <p>
                <em>
                  {`Published by ${article.author} on ${new Date(
                    article.created_at
                  ).toLocaleDateString()} in ${article.topic}`}
                </em>
              </p>
              <p>
                <b>{article.title}</b>
              </p>

              <p>{article.body}</p>
              <p>Votes: {article.votes}</p>
              <p></p>

              <div className={styles.viewMoreArticles}>
                <Link to={`/articles/${article.article_id}`}>
                  View full article
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ArticleCard;
