import React, { Component } from "react";
import styles from "../CSS/AddComment.module.css";
import { postComment } from "../Api";

class AddComment extends Component {
  state = {
    username: "weegembump",
    body: ""
  };

  handleChange = event => {
    this.setState({ body: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { body } = this.state;
    const { newPostedComment } = this.props;
    postComment({ body }).then(newComment => {
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
              placeholder="Type something..."
              value={this.state.body}
              onChange={this.handleChange}
              required
            ></textarea>
            <br></br>
            <button>Post it!</button>
          </label>
        </form>
      </div>
    );
  }
}

export default AddComment;
