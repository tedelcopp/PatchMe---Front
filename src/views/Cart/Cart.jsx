import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { FaCartPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { BsCartDashFill } from "react-icons/bs";
import styles from "./Cart.module.css";
import patch1 from "../../assets/Logo/Página 2.jpeg";

export default function Cart() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Patch 1",
      price: "$10",
      quantity: 1,
      stock: 5,
      img: patch1,
    },
    {
      id: 2,
      name: "Patch 2",
      price: "$15",
      quantity: 1,
      stock: 10,
      img: patch1,
    },
    {
      id: 3,
      name: "Patch 3",
      price: "$20",
      quantity: 1,
      stock: 8,
      img: patch1,
    },
  ]);

  const clearWishlist = () => {
    setProducts([]);
    toast("Vaciaste tu carrito.", {
      icon: "🛒",
    });
  };
  const removeWishlist = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
    toast("Patch eliminado.", {
      icon: "❌",
    });
  };

  const addToQuantity = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId && product.quantity < product.stock) {
        toast("Sumaste un Patch.", {
          icon: "➕",
        });
        return { ...product, quantity: product.quantity + 1 };
      } else if (
        product.id === productId &&
        product.quantity >= product.stock
      ) {
        toast.error("¡Stock alcanzado!", {
          icon: "⛔️",
        });
        return product;
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const lessToQuantity = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId && product.quantity > 1) {
        toast("Restaste un Patch.", {
          icon: "➖",
        });
        return { ...product, quantity: product.quantity - 1 };
      } else if (product.id === productId && product.quantity === 1) {
        toast.error("¡Mínimo 1 Patch!", {
          icon: "⛔️",
        });
        return product;
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const moveToCart = () => {
    console.log("Patchs enviados al carrito", products);
    setProducts([]);
    toast("Gracias por tu compra!", {
      icon: "👏",
    });
  };

  return (
    <div className={styles.mainCart}>
      <Toaster position="top-right" reverseOrder={true} />
      <h2 className={styles.cartTitle}>
        <u>Cart</u>🛒
      </h2>

      {products.length === 0 ? (
        <p className={styles.cartEmpty}>
          No hay patchs cargados en tu carrito de compras.
        </p>
      ) : (
        <div className={styles.productList}>
          {products.map((product) => (
            <div key={product.id} className={styles.productItem}>
              <div className={styles.productInfo}>
                <img
                  src={product.img}
                  alt={product.name}
                  className={styles.productImage}
                />
                <span className={styles.detail}>
                  <b>{product.name}</b>
                </span>
                <span className={styles.detail}>
                  <b>
                    <u>Precio:</u>
                  </b>{" "}
                  {product.price}
                </span>
                <span className={styles.detail}>
                  <b>
                    <u>Cantidad:</u>
                  </b>{" "}
                  {product.quantity}
                </span>
                <span className={styles.detail}>
                  <b>
                    <u>Stock:</u>
                  </b>{" "}
                  {product.stock}
                </span>
              </div>
              <div className={styles.productButtons}>
                <button
                  className={styles.addButton}
                  onClick={() => addToQuantity(product.id)}
                >
                  <FaCartPlus />
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => lessToQuantity(product.id)}
                >
                  <BsCartDashFill />
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
            Vaciar Carrito
          </button>
          <button className={styles.wishCartButton} onClick={moveToCart}>
            Comprar
          </button>
        </div>
      )}
    </div>
  );
}
