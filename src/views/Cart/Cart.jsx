import React from "react";
import { Navigate } from "react-router-dom";
import styles from "./Cart.module.css";

export default function Cart() {
    // Lista de productos vacía
    const products = [];

    // Si no hay productos en el carrito, renderiza el mensaje correspondiente y redirige a la vista de shop
    if (products.length === 0) {
        return (
            <div className={styles.mainCart}>
                <h2>
                    <u>Shopping Cart</u>
                </h2>
                <p>No hay elementos cargados en el carrito.</p>
                {/* <Navigate to="/shop" replace /> */}
            </div>
        );
    }

    // Si hay productos en el carrito, no se renderiza nada
    return null;
}
