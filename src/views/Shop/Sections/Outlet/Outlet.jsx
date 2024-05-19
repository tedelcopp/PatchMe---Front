import React from "react";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import styles from "../../Shop.module.css";

export default function Outlet() {
  return (
    <div className={`${styles.shopContainer}`}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={`${styles.titleOutlet} ${styles.red}`}>Outlet</h1>
          <h3 className={styles.subtitle}>Subtítulo</h3>
        </div>
      </div>
      <div className={styles.locationProducts}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
