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
      <div>
        <div className={styles.gridRow}>
          <div className={styles.codingTitle}>CODING </div>
          <img
            src="https://i.ibb.co/pbXMzkp/coding.jpg"
            alt="coding"
            width="450"
            height="400"
          ></img>{" "}
          <div className={styles.cookingTitle}></div>
          <img
            src="https://i.ibb.co/JBJKXYC/cooking.jpg"
            alt="cooking"
            width="450"
            height="400"
          ></img>
          <div className={styles.footballTitle}>
            <img
              src="https://i.ibb.co/268xzF3/footie.jpg"
              alt="football"
              width="450"
              height="400"
            ></img>
          </div>
        </div>
        <div className={styles.topicsContainer}>
          {topics.map(topic => (
            <div key={topic.slug}>
              <Link
                to={`/articles/topics/${topic.slug}`}
                className={styles.topicLink}
              >
                {topic.slug}
              </Link>
              <div className={styles.topicDescription}>{topic.description}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Topics;
