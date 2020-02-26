import React, { Component } from "react";
import { getComments } from "../Api";
import styles from "../CSS/Comments.module.css";

class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    getComments(this.props.article_id)
      .then(response => {
        this.setState({ comments: response.data.comments });
      })
      .catch(err => console.dir(err));
  }

  newPostedComment = newComment => {
    this.setState(currentState => {
      return {
        comments: [newComment, ...currentState.comments]
      };
    });
  };

  render() {
    const { comments } = this.state;
    return (
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
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Comments;
