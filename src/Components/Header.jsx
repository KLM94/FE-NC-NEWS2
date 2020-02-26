import React from "react";
import { Link } from "@reach/router";
import styles from "../CSS/Header.module.css";

export const Header = props => {
  return (
    <div className={styles.gridContainer}>
      <Link to={"/"}>
        <p className={styles.homeBtn}>Home</p>
      </Link>
      <section className={styles.loggedInAs}>
        Logged in as:
        {props.loggedInUser}
      </section>
      <div className={styles.gridItem}>
        <h1 className={styles.header}>{"<Kirsty's NC News/>"}</h1>
        <p className={styles.headerCaption}>
          Bringing you the most weird and wonderful news on the net!
        </p>
      </div>
    </div>

    // Button ->>> log in
    // ->>> onClick, setState as user - logged in as weegembump
    // Update state from being an empty string to be weegembump
    // {if (this.state.user === comment.author)} <= Check that the logged in user is equal to the author.
    // {if (this.state.user != '')} <= Check that the user is signed in before being able to create posts/articles.
  );
};

export default Header;
