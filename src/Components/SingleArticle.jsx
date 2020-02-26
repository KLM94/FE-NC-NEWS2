import React, { Component } from "react";
import { getArticle } from "../Api";
import Comments from "./Comments";
import LoadingIndicator from "../Components/LoadingIndicator";
import styles from "../CSS/SingleArticle.module.css";
import AddComment from "./AddComment";

class SingleArticle extends Component {
  state = { article: [], isLoading: true };

  componentDidMount() {
    getArticle(this.props.id)
      .then(response => {
        this.setState({ article: response.data.article, isLoading: false });
      })
      .catch(err => console.dir(err));
  }

  render() {
    const { article, isLoading } = this.state;
    if (isLoading) return <LoadingIndicator />;

    return (
      <div className={styles.fullarticle} key="article">
        <h2 className={styles.articletitle}> {article.title} </h2>
        <section>
          <em>{`Published by ${article.author} on ${new Date(
            article.created_at
          ).toLocaleDateString()}`}</em>
        </section>
        <br></br>
        <section className={styles.articlebody}>{article.body}</section>
        <p>{`Votes: ${article.votes}`}</p>
        <AddComment
          addComment={this.addComment}
          articleId={this.props.article_id}
        />
        <p>{` Scroll below to view ${article.comment_count} comments`}</p>
        <Comments article_id={article.article_id} />
      </div>
    );
  }
}

export default SingleArticle;
