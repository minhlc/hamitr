import React from "react";
import styles from "../style/layout.module.scss";
import "../style/index.scss"

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

export default Layout;
