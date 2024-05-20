import React from "react";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import styles from "../../Shop.module.css";

export default function Outlet() {
  return (
    <div className={styles.locationProducts}>
      <ProductCard
        productName="Producto Outlet 1"
        productDescription="Descripción del producto Outlet 1"
        productPrice={9.99}
        productImage="url_de_la_imagen"
      />
      <ProductCard
        productName="Producto Outlet 2"
        productDescription="Descripción del producto Outlet 2"
        productPrice={14.99}
        productImage="url_de_la_imagen"
      />
      {/* Agrega más instancias de ProductCard con datos harcodeados según sea necesario */}
    </div>
  );
}
