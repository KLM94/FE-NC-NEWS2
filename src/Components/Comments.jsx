import React, { Component } from "react";
import { getComments, deleteComment } from "../Api";
import styles from "../CSS/Comments.module.css";
import AddComment from "./AddComment";

class Comments extends Component {
  state = {
    comments: [],
    username: "weegembump",
    author: ""
  };

  componentDidMount() {
    getComments(this.props.article_id)
      .then(response => {
        this.setState({ comments: response.data.comments });
      })
      .catch(err => console.dir(err));
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

  // How to show the post comment box? can't move above if statement
  render() {
    const { comments } = this.state;
    if (comments === undefined) {
      return "Sorry, there are no comments!";
    } else {
      return (
        <div className={styles.comments}>
          <AddComment
            newPostedComment={this.newPostedComment}
            articleId={this.props.article_id}
          />
          <div className={styles.commentsGrid}>
            {comments.map(comment => {
              return (
                <div key={comment.comment_id}>
                  <div className={styles.commentsContainer}>
                    <p>
                      Posted by <b>{comment.author}</b> on{" "}
                      {`${new Date(comment.created_at).toLocaleDateString()} `}
                    </p>
                    <p>{comment.body}</p>
                    <p>Votes: {comment.votes}</p>
                    <button
                      className={styles.deleteButton}
                      onClick={() => {
                        this.handleDelete(comment.comment_id);
                      }}
                    >
                      Delete comment
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
  }
}

export default Comments;
