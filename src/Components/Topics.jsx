import React, { Component } from "react";
import { Link } from "@reach/router";
import styles from "../CSS/Topics.module.css";
import LoadingIndicator from "./LoadingIndicator";
import { getTopics } from "../Api";

class Topics extends Component {
  state = { topics: [], isLoading: true };

  componentDidMount() {
    getTopics()
      .then(response => {
        this.setState({ topics: response.data.topics, isLoading: false });
      })
      .catch(err => console.dir(err));
  }

  render() {
    const { topics, isLoading } = this.state;
    if (isLoading) return <LoadingIndicator />;
    return (
      <div className={styles.topicsContainer}>
        {topics.map(topic => (
          <div key={topic.slug}>
            <Link to={`/articles/topics`} className={styles.topicLink}>
              {topic.slug}
            </Link>
            <div className={styles.topicDescription}>{topic.description}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Topics;
