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

  mapImages() {
    return {
      coding: "https://i.ibb.co/pbXMzkp/coding.jpg",
      cooking: "https://i.ibb.co/JBJKXYC/cooking.jpg",
      football: "https://i.ibb.co/268xzF3/footie.jpg"
    };
  }

  render() {
    const { topics, isLoading } = this.state;

    if (isLoading) return <LoadingIndicator />;
    return (
      <div className={styles.gridContainer}>
        {topics.map(topic => (
          <Link to={`/articles/topics/${topic.slug}`} key={topic.slug}>
            <div className={styles.pictures}>
              <img
                src={`${this.mapImages()[topic.slug]}`}
                alt={topic.slug}
                width="400"
                height="400"
              ></img>
            </div>
            <div className={styles.gridItem}>{topic.slug}</div>
          </Link>
        ))}
      </div>
    );
  }
}

export default Topics;
