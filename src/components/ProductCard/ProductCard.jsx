import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FaHeartCirclePlus } from "react-icons/fa6";
import styles from "../ProductCard/ProductCard.module.css";
import toast, { Toaster } from 'react-hot-toast';

export default function ProductCard() {
  const [cartShow, setCartShow] = useState(false);
  const [heartShow, setHeartShow] = useState(false);

  return (
    <div className={styles.card}>
      <Toaster
        toastOptions={{
          className: '',
          style: {
            border: '3.5px solid #0594AE',
            padding: '10px',
            color: '#020100',
            backgroundColor: '#FFB50B', 
            borderRadius: '8px', 
          },
        }}
        />

        <Link to="/descripcion">
      <img
        className={styles.cardImg}
        src="https://i.ibb.co/YbjxNW8/P-gina-4.jpg"
        width="auto"
        height="auto"
        alt="watch"
        />
        </Link>
   
      <div className={styles.cardBody}>
        <div className={styles.cvp}>
          <h5 className={styles.cardTitle}>Patch Wine Lover</h5>
          <p className={styles.cardPrice}>$3500</p>
          <div className={styles.cardIcons}>
            <a className={styles.cardHeart}>
              <FaHeartCirclePlus onClick={() => toast.success('Añadido a ❤️',{
                position: "top-right"
              } )} />
            </a>
            <a className={styles.cardCart}>
              <FaCartPlus onClick={() => toast.success('Añadido a 🛒',{
                position: "top-right"
              }  )} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
