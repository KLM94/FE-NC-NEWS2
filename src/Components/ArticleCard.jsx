import React, { Component } from "react";
import styles from "../CSS/ArticleCard.module.css";
import { Link } from "@reach/router";
import ShowMoreText from "react-show-more-text";
import { FaRegComment } from "react-icons/fa";

class ArticleCard extends Component {
  executeOnClick(isExpanded) {}

  render() {
    const { articles } = this.props;
    return (
      <ul className={styles.articleGrid}>
        {articles.slice(0, this.props.articleLimit).map(article => {
          return (
            <li key={article.article_id}>
              <div className={styles.articleContainer}>
                <div className={styles.publishedbyContainer}>
                  {/* <p className={styles.publishedby}>
                    <em>
                      {`Published by ${article.author} on ${new Date(
                        article.created_at
                      ).toLocaleDateString()} in ${article.topic}`}
                    </em>
                  </p> */}
                </div>
                <Link
                  to={`/articles/${article.article_id}`}
                  style={{ textDecoration: "none" }}
                >
                  <p className={styles.title}>
                    <b>{article.title}</b>
                  </p>
                </Link>
                <ShowMoreText
                  lines={4}
                  more="Show more"
                  less="Show less"
                  anchorClass=""
                  onClick={this.executeOnClick}
                  expanded={false}
                  width={400}
                >
                  {article.body}
                </ShowMoreText>
                <p>
                  <FaRegComment /> {article.comment_count}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

ArticleCard.defaultProps = {
  articleLimit: -1
};

export default ArticleCard;
