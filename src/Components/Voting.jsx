import React, { Component } from "react";
import { patchVotesByArticleId, patchVotesByCommentId } from "../Api";
import styles from "../CSS/Voting.module.css";
import { FaHeart } from "react-icons/fa";
import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from "react-icons/io";
import ErrorPage from "./ErrorPage";

class Votes extends Component {
  state = { updatedVotes: 0, err: null };

  handleClick = inc_votes => {
    const { article_id, comment_id } = this.props;
    this.setState(currentState => {
      return { updatedVotes: currentState.updatedVotes + inc_votes };
    });
    if (!article_id)
      patchVotesByCommentId(comment_id, inc_votes).catch(err =>
        this.setState({ err })
      );
    else {
      patchVotesByArticleId(article_id, inc_votes).catch(err =>
        this.setState({ err })
      );
    }
  };

  render() {
    const { votes } = this.props;
    const { updatedVotes, err } = this.state;
    if (err) return <ErrorPage err={err} />;
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
