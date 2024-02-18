import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import styles from "./Shop.module.css"; 

export default function Shop() {
  return (
    <div className={styles.shopContainer}>
      <Toolbar />
    </div>
  );
}
