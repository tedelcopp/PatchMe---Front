import React from "react";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import styles from "../../Shop.module.css";
import Spinner from "react-bootstrap/Spinner";

export default function Cocidos() {
  return (
    <div>
      <div></div>
      <div className={styles.locationProductsContainer}>
        <div className={styles.spinnerContainer}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>

        <div className={styles.locationProducts}>
          <>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </>
        </div>
      </div>
    </div>
  );
}
