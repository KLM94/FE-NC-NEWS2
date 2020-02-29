import React, { Component } from "react";
import { patchVotesByArticleId, patchVotesByCommentId } from "../Api";
import styles from "../CSS/Voting.module.css";
import { FaHeart } from "react-icons/fa";
import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from "react-icons/io";

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
      <section>
        <div className={styles.articleVotesContainer}>
          <button
            className={styles.votebtn}
            disabled={updatedVotes > 0}
            onClick={() => {
              this.handleClick(1);
            }}
          >
            <IoMdArrowDropupCircle size={20} />
          </button>
        </div>
        <div className={styles.voteCount}>
          <FaHeart size={15} />
          {votes + updatedVotes}
        </div>
        <button
          className={styles.votebtn}
          disabled={updatedVotes < 0}
          onClick={() => {
            this.handleClick(-1);
          }}
        >
          <IoMdArrowDropdownCircle size={20} />
        </button>
      </section>
    );
  }
}

export default Votes;
