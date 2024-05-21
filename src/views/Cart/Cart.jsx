import React from "react";
import styles from "./Cart.module.css";

export default function Cart() {
  const products = [];

  return (
    <div className={styles.mainCart}>
      <h2 className={styles.cartTitle}>
        <u>Shopping Cart</u>🛒
      </h2>
      {products.length === 0 ? (
        <p className={styles.emptyCartMsg}>
          No hay patchs cargados en tu carrito de compras.
        </p>
      ) : (
        <div className={styles.productList}>
          {/* Código para renderizar patchs */}
        </div>
      )}
    </div>
  );
}
