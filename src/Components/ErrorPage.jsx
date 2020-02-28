import React from "react";
import styles from "../CSS/ErrorPage.module.css";

const ErrorPage = ({ err }) => {
  return (
    <body>
      <div className={styles.errmsg}>
        {" "}
        <p>
          {err.status} - {err.msg}{" "}
        </p>
        <img
          src="https://media.giphy.com/media/BszAxoVuqv8Ig/giphy.gif"
          alt="Page Not Found"
        ></img>
      </div>
    </body>
  );
};

export default ErrorPage;
