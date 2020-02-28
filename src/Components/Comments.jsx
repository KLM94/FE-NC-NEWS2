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
          {/* <p>
            {article.comment_count > 1
              ? `There are ${article.comment_count} comments for this article.`
              : `There is ${article.comment_count} comment for this article.`}
          </p> */}
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
                        {`${new Date(
                          comment.created_at
                        ).toLocaleDateString()} `}
                      </p>
                      <p>{comment.body}</p>

                      <Votes
                        comment_id={comment.comment_id}
                        votes={comment.votes}
                      />
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
