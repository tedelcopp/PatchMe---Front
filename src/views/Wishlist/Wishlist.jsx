import React, { useState } from "react";
import { RiHeartAddFill } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { FaHeartCircleMinus } from "react-icons/fa6";
import styles from "./Wishlist.module.css";

export default function Wishlist() {
  const [products, setProducts] = useState([
    { id: 1, name: "Patch 1", price: "$10", quantity: 1, stock: 5 },
    { id: 2, name: "Patch 2", price: "$15", quantity: 1, stock: 10 },
    { id: 3, name: "Patch 3", price: "$20", quantity: 1, stock: 8 },
  ]);

  const clearWishlist = () => {
    setProducts([]);
  };

  const removeWishlist = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  const addToQuantity = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId && product.quantity < product.stock) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const lessToQuantity = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const moveToCart = () => {
    console.log("Productos movidos al carrito:", products);
    setProducts([]);
  };

  return (
    <div className={styles.mainWishlist}>
      <h2 className={styles.wishTitle}>
        <u>Wishlist</u>❤️
      </h2>

      {products.length === 0 ? (
        <p className={styles.wishEmpty}>
          No hay patchs cargados en tu wishlist.
        </p>
      ) : (
        <div className={styles.productList}>
          {products.map((product) => (
            <div key={product.id} className={styles.productItem}>
              <span>{product.name}</span> - <span>{product.price}</span> -{" "}
              <span> Cantidad: {product.quantity}</span> -{" "}
              <span>
                <u> Stock</u>: {product.stock}
              </span>
              <div>
                <button
                  className={styles.addButton}
                  onClick={() => addToQuantity(product.id)}
                >
                  <RiHeartAddFill />
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => lessToQuantity(product.id)}
                >
                  <FaHeartCircleMinus />
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => removeWishlist(product.id)}
                >
                  <MdDeleteForever />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {products.length > 0 && (
        <div className={styles.buttonsContainer}>
          <button className={styles.wishlistButton} onClick={clearWishlist}>
            Vaciar Wishlist
          </button>
          <button className={styles.wishCartButton} onClick={moveToCart}>
            Ir al Carrito
          </button>
        </div>
      )}
    </div>
  );
}
