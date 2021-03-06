import React, { Component } from "react";
import { getComments, deleteComment } from "../Api";
import styles from "../CSS/Comments.module.css";
import AddComment from "./AddComment";
import Votes from "./Voting";

class Comments extends Component {
  state = {
    comments: [],
    username: "weegembump",
    author: "",
    articles: []
  };

  componentDidMount() {
    getComments(this.props.article_id).then(response => {
      this.setState({ comments: response.data.comments || [] });
    });
  }

  newPostedComment = addedNewComment => {
    this.setState(currentState => {
      return {
        comments: [addedNewComment, ...currentState.comments]
      };
    });
  };

  handleDelete = comment_id => {
    const { comments } = this.state;
    deleteComment(comment_id);
    const filteredComments = comments.filter(
      comment => comment.comment_id !== comment_id
    );
    this.setState({ comments: filteredComments });
  };

  render() {
    const { comments, username } = this.state;

    if (comments === undefined) {
      return (
        <div>
          <p> Be the first to post a comment!</p>

          <AddComment
            newPostedComment={this.newPostedComment}
            articleId={this.props.article_id}
          />
        </div>
      );
    } else {
      return (
        <div>
          <div className={styles.commentContainer}>
            <div className={styles.addcomment}>
              <p>Got something to say?</p>
              <AddComment
                newPostedComment={this.newPostedComment}
                articleId={this.props.article_id}
              />
            </div>
            <div className={styles.saying}>Comments:</div>
            <div className={styles.commentsGrid}>
              {comments.map(comment => {
                return (
                  <div key={comment.comment_id}>
                    <div className={styles.commentsContainer}>
                      <div className={styles.commentbody}>
                        <p>{comment.body}</p>{" "}
                      </div>
                      <div className={styles.votes}>
                        <Votes
                          comment_id={comment.comment_id}
                          votes={comment.votes}
                        />
                      </div>
                      <p className={styles.publishedbyy}>
                        Posted by <b>{comment.author}</b> on{" "}
                        {`${new Date(
                          comment.created_at
                        ).toLocaleDateString()} `}
                      </p>
                      {comment.author === username && (
                        <button
                          className={styles.deleteButton}
                          onClick={() => {
                            this.handleDelete(comment.comment_id);
                          }}
                        >
                          Delete comment
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Comments;
