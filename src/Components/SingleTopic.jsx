import React, { Component } from "react";
import ArticleCard from "../Components/ArticlesList";
import styles from "../CSS/SingleTopic.module.css";
// import LoadingIndicator from "./LoadingIndicator";

class SingleTopic extends Component {
  state = { topic: [] };

  render() {
    const { topic } = this.state;
    // if (isLoading) return <LoadingIndicator />;
    return (
      <div className={styles.singleTopicContainer}>
        <p className={styles.viewingArticles}>
          You are now viewing articles in {topic.slug}.
        </p>
        <ArticleCard topic={this.props.topic} />
      </div>
    );
  }
}

// DELETE SINGLE TOPIC DONE
// MAKE ARTICLELIST REUSABLE
// ADD ANOTHER ARTICLESLIST PATH BUT DIRECTED TO ARTICLES/TOPICS
// GET RID OF LITERALS IN ARTICLE LIST OR CARD
// ADD PARAMS ONTO API BECAUSE IT IGNORES IF NO TOPIC
// ADD LOADING INDICATOR

export default SingleTopic;
