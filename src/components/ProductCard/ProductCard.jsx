import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaHeartCirclePlus } from "react-icons/fa6";
import styles from "../ProductCard/ProductCard.module.css";

export default function ProductCard() {
  const [cartShow, setCartShow] = useState(false);
  const [heartShow, setHeartShow] = useState(false);
  
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImg}
        src="https://i.ibb.co/YbjxNW8/P-gina-4.jpg"
        width="auto"
        height="auto"
        alt="watch"
      />
      <div className={styles.cardBody}>
        <div className={styles.cvp}>
          <h5 className={styles.cardTitle}>Patch Wine Lover</h5>
          <p className={styles.cardPrice}>$3500</p>
          <div className={styles.cardIcons}>
            <a className={styles.cardHeart}>
              <FaHeartCirclePlus />
            </a>
            <a className={styles.cardCart}>
              <FaCartPlus />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
