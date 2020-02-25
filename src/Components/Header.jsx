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
  );
};

export default Header;
