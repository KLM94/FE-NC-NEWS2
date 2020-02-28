import React, { Component } from "react";
import LoadingIndicator from "../Components/LoadingIndicator";
import styles from "../CSS/ArticlesList.module.css";
import { getArticles } from "../Api";
import ArticleCard from "./ArticleCard";

class ArticlesList extends Component {
  state = { articles: [], isLoading: true, sortBy: "" };

  componentDidMount() {
    getArticles(this.props.topic, this.state.sortBy)
      .then(response => {
        this.setState({ articles: response.data.articles, isLoading: false });
      })
      .catch(err => console.dir(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.sortBy !== prevState.sortBy)
      getArticles(this.props.topic, this.state.sortBy)
        .then(response => {
          this.setState({ articles: response.data.articles });
        })
        .catch(err => console.dir(err));
  }

  handleChange = event => {
    this.setState({ sortBy: event.target.value });
  };

  // fetchArticles and use in component did mount when using params or id etc
  render() {
    const { isLoading } = this.state;
    if (isLoading) return <LoadingIndicator />;
    return (
      <div className={styles.sortbyGrid}>
        <label className={styles.sortBy}>Sort articles by: </label>
        <select onChange={this.handleChange}>
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
