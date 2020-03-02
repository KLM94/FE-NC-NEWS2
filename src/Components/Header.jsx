import React from "react";
import styles from "../CSS/Header.module.css";

export const Header = props => {
  return (
    <header>
      <div className={styles.box}>
        <div className={styles.header}>
          <p className={styles.headerText}>{"<Kirsty's NC News/>"}</p>
          <br></br>
          <p className={styles.headerCaption}>
            Bringing you the most weird and wonderful news on the net!
          </p>
        </div>

        <div className={styles.greeting}>
          <em>
            <div>
              Logged In: <b>{props.loggedInUser}</b>
            </div>
          </em>
          {/* <section className={styles.selectuser}>
            <p>Select User:</p>
            <select className={styles.dropdown} onChange={() => {}}>
              {users.map(user => {
                return <option key={user}>{user}</option>;
              })}
            </select>
          </section> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
