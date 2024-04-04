import {React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import toast, { Toaster } from 'react-hot-toast';
import styles from "./ProductDetail.module.css";
import ListGroup from 'react-bootstrap/ListGroup';
import { Rating } from "@mui/material";

export default function WineDetail() {

  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const goBack = () => {
    navigate(-1);
  };
  const saveToCart = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5; 
        if (success) {
          resolve('Tu patch tu espera en el carrito!');
        } else {
          reject('No pudimos agregar tu patch!');
        }
      }, 1000);
    });
  };
  const addToCart = () => {
    toast.promise(
      saveToCart(),
      {
        loading: 'Agregando al carrito...',
        success: (message) => <b>{message}</b>,
        error: (error) => <b>{error}</b>,
      }
    );
  };

  // Datos del producto
  const product = {
    name: "Patch",
    stock: 10,
    price: "$10.00",
    category: "Termoadhesivo",
    description: "Esta es una descripción corta del producto Patch.",
  };

  return (
    <div className={styles.productDetailContainer}>
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
      <div className={styles.backButton} onClick={goBack}>
        <h3>Back</h3>
      </div>
      <div className={styles.detailContent}>
        <div className={styles.imageContainer}>
          <img src="https://i.ibb.co/YbjxNW8/P-gina-4.jpg" alt="Imagen del producto" />
        </div>

        <div className={styles.infoContainer}>
          <ListGroup>
            <h3>{product.name}</h3>
            <ul>
              <ListGroup.Item variant="dark">
                • <u><b>Precio:</b></u> {product.price}.
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                • <u><b>Stock:</b></u> {product.stock} unidades.
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                • <u><b>Categoria:</b></u> {product.category}.
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                • <u><b>Estrellas:</b></u> 
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                • <u><b>Detalle:</b></u> {product.description}
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                <div className={styles.iconContainer}>
                  <button className={styles.iconButton} title="Quitar un Patch">
                    <RiSubtractFill className={styles.iconLess} />
                  </button>
                  <button className={styles.iconButton} title="Agregar un Patch">
                    <IoIosAdd className={styles.iconPlus} />
                  </button>
                </div>
              </ListGroup.Item>
              <ListGroup.Item variant="dark">
                <div className={styles.inputProductDetail} >
                  <input
                    value={quantity}
                    readOnly
                  />
                </div>
              </ListGroup.Item>
              <li>
                <button className={styles.buyButton} onClick={addToCart}>Agregar al Carrito</button>
              </li>
            </ul>
          </ListGroup>
        </div>
      </div>
    </div>
  );
}
