import React from "react";
import styles from "../CSS/Header.module.css";
import { FaUserAlt } from "react-icons/fa";

export const Header = props => {
  return (
    <div className={styles.box}>
      <div className={styles.header}>
        <p className={styles.headerText}>{"<Kirsty's NC News/>"}</p>
        <br></br>
        <p className={styles.headerCaption}>
          Bringing you the most weird and wonderful news on the net!
        </p>
      </div>
      <div className={styles.userlogo}>
        <FaUserAlt size={20} />
      </div>
      <div className={styles.greeting}>
        <em>
          <div>
            Welcome <b>{props.loggedInUser}</b>!
          </div>
        </em>
      </div>
    </div>
  );
};

export default Header;
