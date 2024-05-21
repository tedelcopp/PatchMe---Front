import React from "react";
import styles from "./Wishlist.module.css";

export default function Wishlist() {
  const products = [];

  return (
    <div className={styles.mainWishlist}>
      <h2 className={styles.wishTitle}>
        <u>Wishlist</u>❤️
      </h2>
      <p className={styles.wishEmpity}>
        No hay patchs cargados en tu wishlist.
      </p>
    </div>
  );
}
