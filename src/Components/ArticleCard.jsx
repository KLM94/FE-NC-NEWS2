import React, { Component } from "react";
import styles from "../CSS/ArticleCard.module.css";
import { Link } from "@reach/router";
import ShowMoreText from "react-show-more-text";
import { FaRegComment, FaHeart } from "react-icons/fa";

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
                <div className={styles.publishedbyContainer}></div>
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
                  <FaRegComment /> {article.comment_count} <FaHeart size={15} />{" "}
                  {article.votes}
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
