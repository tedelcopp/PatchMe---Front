// import React from "react"

// export default function Shop(){
//     return(
//         <div><h1>hola mundo im here brouwww</h1></div>
//     )
// }

import React from "react";
import styles from "./Shop.module.css";

export default function Shop() {
    const products = [
        { id: 1, name: "Product 1", price: 20.99 },
        { id: 2, name: "Product 2", price: 15.49 },
        { id: 3, name: "Product 3", price: 25.99 },
        // Add more products as needed
    ];

    return (
        <div className={styles.shopContainer}>
            <h1>Welcome to Our Shop</h1>
            <div className={styles.productList}>
                {products.map(product => (
                    <div key={product.id} className={styles.productCard}>
                        <h3>{product.name}</h3>
                        <p>${product.price.toFixed(2)}</p>
                        <button className={styles.addToCartBtn}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
