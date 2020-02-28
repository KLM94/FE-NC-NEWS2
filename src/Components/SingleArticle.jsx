import React, { Component } from "react";
import { getArticle } from "../Api";
import Comments from "./Comments";
import LoadingIndicator from "../Components/LoadingIndicator";
import styles from "../CSS/SingleArticle.module.css";
import Voting from "./Voting";
import ErrorPage from "./ErrorPage";

class SingleArticle extends Component {
  state = { article: [], isLoading: true, err: null };

  componentDidMount() {
    getArticle(this.props.id)
      .then(response => {
        this.setState({ article: response.data.article, isLoading: false });
      })

      .catch(({ response }) => {
        this.setState({
          err: { status: response.status, msg: response.data.msg },
          isLoading: false
        });
      });
  }

  render() {
    const { article, isLoading, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return <LoadingIndicator />;

    return (
      <div className={styles.fullarticle} key="article">
        <section className={styles.votes}></section>
        <h2 className={styles.articletitle}> {article.title} </h2>
        <section>
          <em>{`Published by ${article.author} on ${new Date(
            article.created_at
          ).toLocaleDateString()}`}</em>
        </section>
        <br></br>
        <section className={styles.articlebody}>{article.body}</section>
        <Voting article_id={article.article_id} votes={article.votes} />

        <div>
          <p>
            {article.comment_count === 1
              ? `There is ${article.comment_count} comment for this article.`
              : `There are ${article.comment_count} comments for this article.`}
          </p>
          <Comments article_id={article.article_id} />
        </div>
      </div>
    );
  }
}

export default SingleArticle;
