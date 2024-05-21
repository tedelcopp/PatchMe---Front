import React from "react";
import styles from "./Cart.module.css";

export default function Cart() {
  const products = [];

  if (products.length === 0) {
    return (
      <div className={styles.mainCart}>
        <h2 className={styles.cartTitle}>
          <u>Shopping Cart</u>
        </h2>
        <p className={styles.emptyCartMsg}>
          No hay elementos cargados essn el carrito.
        </p>
      </div>
    );
  }
}
