import React from "react";
import { Link } from "@reach/router";
import styles from "../CSS/Header.module.css";
import { FaHome } from "react-icons/fa";

export const Header = props => {
  return (
    <div className={styles.box}>
      <Link to={"/"}>
        <div className={styles.homeBtn}>
          <FaHome size={35} />
        </div>
      </Link>
      <div className={styles.header}>
        <p className={styles.headerText}>{"<Kirsty's NC News/>"}</p>
        <br></br>
        <p className={styles.headerCaption}>
          Bringing you the most weird and wonderful news on the net!
        </p>
      </div>
      <div className={styles.greeting}>
        <em>
          <p>
            Welcome <b>{props.loggedInUser}</b>!
          </p>
        </em>
      </div>
    </div>
  );
};

export default Header;
