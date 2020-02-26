import React, { Component } from "react";
import { Link } from "@reach/router";
import { getComments, deleteComment } from "../Api";
import styles from "../CSS/Comments.module.css";
import AddComment from "./AddComment";

class Comments extends Component {
  state = {
    comments: [],
    username: "weegembump",
    author: "",
    isDeleted: false
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
    deleteComment(comment_id).then(response => {
      this.setState({ comments: [], isDeleted: true });
    });
  };

  render() {
    const { comments, isDeleted } = this.state;
    if (isDeleted)
      return (
        <>
          <h1>Comment successfully deleted!</h1>
          {/* /<Link to="/articles/:id">Back to articles!</Link>  */}
        </>
      );

    // Comment isn't being deleted
    // Maybe worry about refreshing the page later?
    // Maybe get rid of isDelete or look at where it might be going wrong.
    // Might not need to successfully delete message until I am able to delete message
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
                    onClick={this.handleDelete}
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

export default Comments;
