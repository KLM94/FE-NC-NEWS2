import React from "react";
import styles from "../CSS/LoadingIndicator.module.css";

import { PulseSpinner } from "react-spinners-kit";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div align="center">
        <PulseSpinner size={40} color="black"></PulseSpinner>
      </div>
    </div>
  );
}
