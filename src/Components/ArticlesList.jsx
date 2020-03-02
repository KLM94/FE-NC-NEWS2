import React, { Component } from "react";
import LoadingIndicator from "../Components/LoadingIndicator";
import styles from "../CSS/ArticlesList.module.css";
import { getArticles } from "../Api";
import ArticleCard from "./ArticleCard";
import ErrorPage from "./ErrorPage";

class ArticlesList extends Component {
  state = { articles: [], isLoading: true, sortBy: "", err: null };

  componentDidMount() {
    const { topic } = this.props;
    const { sortBy } = this.state;
    getArticles(topic, sortBy).then(response => {
      this.setState({ articles: response.data.articles, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { sortBy } = this.state;
    const { topic } = this.props;
    if (sortBy !== prevState.sortBy)
      getArticles(topic, sortBy)
        .then(response => {
          this.setState({ articles: response.data.articles });
        })
        .catch(({ response }) => {
          this.setState({
            err: { status: response.status, msg: response.data.msg },
            isLoading: false
          });
        });
  }

  handleChange = event => {
    this.setState({ sortBy: event.target.value });
  };

  render() {
    const { isLoading, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return <LoadingIndicator />;

    return (
      <div className={styles.sortbyGrid}>
        <label className={styles.sortBy}>Sort articles by: </label>
        <select className={styles.dropdown} onChange={this.handleChange}>
          <option value="created_at">Date Created</option>
          <option value="comment_count">Comments</option>
          <option value="votes">Votes</option>
        </select>
        <ArticleCard articles={this.state.articles} />
      </div>
    );
  }
}

export default ArticlesList;
