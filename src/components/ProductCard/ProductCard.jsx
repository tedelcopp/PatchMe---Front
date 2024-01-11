import React from "react";
import styles from "../ProductCard/ProductCard.module.css";

const ProductCard = ({ oferta }) => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.offertImg} src={oferta.image} alt={oferta.name} />
      <h3 className={styles.tittleOffert}>{oferta.name}</h3>
    </div>
  );
};

export default ProductCard;
