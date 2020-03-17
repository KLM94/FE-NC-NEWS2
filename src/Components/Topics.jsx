import React, { Component } from "react";
import { Link } from "@reach/router";
import styles from "../CSS/Topics.module.css";
import LoadingIndicator from "./LoadingIndicator";
import { getTopics } from "../Api";
import ErrorPage from "./ErrorPage";

class Topics extends Component {
  state = { topics: [], isLoading: true, err: null };

  componentDidMount() {
    getTopics()
      .then(response => {
        this.setState({ topics: response.data.topics, isLoading: false });
      })
      .catch(({ response }) => {
        this.setState({
          err: { status: response.status, msg: response.data.msg },
          isLoading: false
        });
      });
  }

  mapImages() {
    return {
      coding: "https://i.ibb.co/pbXMzkp/coding.jpg",
      cooking: "https://i.ibb.co/JBJKXYC/cooking.jpg",
      football: "https://i.ibb.co/268xzF3/footie.jpg"
    };
  }

  render() {
    const { topics, isLoading, err } = this.state;
    if (err) return <ErrorPage err={err} />;
    if (isLoading) return <LoadingIndicator />;
    return (
      <div className={styles.gridContainer}>
        {topics.map(topic => (
          <Link to={`/articles/topics/${topic.slug}`} key={topic.slug}>
            <div className={styles.pictures}>
              <img
                className={styles.img}
                src={`${this.mapImages()[topic.slug]}`}
                alt={topic.slug}
                width="400"
                height="400"
              ></img>
            </div>
            <span className={styles.gridItem}>{topic.slug}</span>
          </Link>
        ))}
      </div>
    );
  }
}

export default Topics;
