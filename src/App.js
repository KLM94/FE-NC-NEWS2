import React, { Component } from "react";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Homepage from "./Components/Homepage";
import ArticlesList from "./Components/ArticlesList";
import SingleArticle from "./Components/SingleArticle";
import Topics from "./Components/Topics";
import { Router } from "@reach/router";
import styles from "./CSS/App.module.css";
import ErrorPage from "./Components/ErrorPage";

class App extends Component {
  state = {
    loggedInUser: "weegenbump",
    users: ["jessjelly", "cooljmessy", "tickle122"]
  };

  selectUser = loggedInUser => {
    this.setState({ loggedInUser: loggedInUser });
  };

  render() {
    const { loggedInUser, users } = this.state;
    return (
      <div className={styles.bgfade}>
        <main className={styles.body}>
          <Header
            loggedInUser={loggedInUser}
            selectUser={this.selectUser}
            users={users}
          />
          <NavBar />
          <Router>
            <Homepage path="/" />
            <ArticlesList path="/articles" loggedInUser={loggedInUser} />
            <SingleArticle path="/articles/:id" />
            <Topics path="/topics" />
            <ArticlesList path="/articles/topics/:topic" />
            <ErrorPage
              default
              err={{ status: 404, data: { msg: "Page Not Found" } }}
            />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
