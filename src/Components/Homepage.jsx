import React, { Component } from "react";
import styles from "../CSS/Homepage.module.css";
import { getArticles } from "../Api";
import ArticleCard from "./ArticleCard";
import ErrorPage from "./ErrorPage";
import LoadingIndicator from "./LoadingIndicator";

class Homepage extends Component {
  state = { articles: [], err: null, isLoading: true };

  componentDidMount() {
    getArticles()
      .then(response => {
        this.setState({ articles: response.data.articles, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          err: { status: response.status, msg: response.data.msg },
          isLoading: false
        });
      });
  }

  render() {
    const { articles, err, isLoading } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return <LoadingIndicator />;

    return (
      <div>
        <h1 className={styles.latestArticles}>Latest Articles</h1>
        <div className={styles.articles}>
          <ArticleCard articles={articles} articleLimit={3} />
        </div>
      </div>
    );
  }
}

export default Homepage;
