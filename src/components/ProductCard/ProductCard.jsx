import React from "react";
import styles from "../ProductCard/ProductCard.module.css";

export default function ProductCard() {
  return (
    <div className={`card ${styles.card} mx-auto col-md-3 col-10 mt-5`}>
      <img
        className={`mx-auto img-thumbnail ${styles.img}`}
        src="https://i.imgur.com/pjITBzX.jpg"
        width="auto"
        height="auto"
        alt="watch"
        />
      <div className={`card-body text-center mx-auto ${styles.cardBody}`}>
        <div className={styles.cvp}>
          <h5 className={`card-title font-weight-bold ${styles.cardTitle}`}>
            Patch Wine Lover
          </h5>
          <p className={`card-text ${styles.cardText}`}>$3500</p>
          <a href="#" className={`btn details ${styles.details}`}>
          Detalles
          </a>
          <br />
          <a href="#" className={`btn cart ${styles.cart}`}>
            Añadir
          </a>
        </div>
      </div>
        </div>
  );
}
