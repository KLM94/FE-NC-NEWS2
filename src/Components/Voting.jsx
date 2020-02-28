import React, { Component } from "react";
import { patchVotesByArticleId, patchVotesByCommentId } from "../Api";
import styles from "../CSS/Voting.module.css";

class Votes extends Component {
  state = { updatedVotes: 0 };

  handleClick = inc_votes => {
    const { article_id, comment_id } = this.props;
    this.setState(currentState => {
      return { updatedVotes: currentState.updatedVotes + inc_votes };
    });
    if (!article_id)
      patchVotesByCommentId(comment_id, inc_votes).catch(err =>
        console.dir(err)
      );
    else {
      patchVotesByArticleId(article_id, inc_votes).catch(err =>
        console.dir(err)
      );
    }
  };

  render() {
    const { votes } = this.props;
    const { updatedVotes } = this.state;
    return (
      <div className={styles.articleVotes}>
        <button
          disabled={updatedVotes > 0}
          onClick={() => {
            this.handleClick(1);
          }}
        >
          Vote up
        </button>
        <p className={styles.voteCount}>Votes: {votes + updatedVotes}</p>
        <button
          disabled={updatedVotes < 0}
          onClick={() => {
            this.handleClick(-1);
          }}
        >
          Vote down
        </button>
      </div>
    );
  }
}

export default Votes;
