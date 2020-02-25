import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Homepage from "./Components/Homepage";
import ArticlesList from "./Components/ArticlesList";
import SingleArticle from "./Components/SingleArticle";
import Topics from "./Components/Topics";
import { Router } from "@reach/router";

class App extends Component {
  state = { loggedInUser: "weegenbump" };

  render() {
    const { loggedInUser } = this.state;
    return (
      <main>
        <Header loggedInUser={loggedInUser} />
        <NavBar />
        <Router>
          <Homepage path="/" />
          <ArticlesList path="/articles" loggedInUser={loggedInUser} />
          <SingleArticle path="/articles/:id" />
          <Topics path="/topics" />
          <ArticlesList path="/articles/topics/:topic" />
        </Router>
      </main>
    );
  }
}

export default App;
