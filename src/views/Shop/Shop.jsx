import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Shop.module.css"; 

export default function Shop() {
  return (
    <div className={styles.shopContainer}>
      <Toolbar />
      <div className={styles.productGrid}>
        <div className={styles.column}>
          <ProductCard />
        </div>
        <div className={styles.column}>
          <ProductCard />
        </div>
     
      </div>
    </div>
  );
}
