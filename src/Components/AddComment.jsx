import React, { Component } from "react";
import styles from "../CSS/AddComment.module.css";
import { postComment } from "../Api";

class AddComment extends Component {
  state = {
    username: "weegembump",
    body: "",
    author: ""
  };

  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body, username } = this.state;
    const { newPostedComment, articleId } = this.props;
    postComment(body, articleId, username).then(newComment => {
      newPostedComment(newComment);
      this.setState({ body: "" });
    });
  };

  render() {
    return (
      <div className={styles.commentsGrid}>
        <form onSubmit={this.handleSubmit}>
          <label>
            <textarea
              className={styles.textArea}
              rows="8"
              cols="60"
              type="text"
              id="body"
              placeholder="Say what's on your mind..."
              value={this.state.body}
              onChange={this.handleChange}
              required
            ></textarea>
            <br></br>
            <button className={styles.postbtn}>Post it!</button>
          </label>
        </form>
      </div>
    );
  }
}

export default AddComment;
