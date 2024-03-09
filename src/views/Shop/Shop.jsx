import React from "react";
import Toolbar from "../../components/ToolbarShop/Toolbar";
import SearchBarShop from "../../components/ToolbarShop/SearchBarShop";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Shop.module.css"; 

export default function Shop() {
  return (
    <div className={styles.shopContainer}>
      <Toolbar />
      <SearchBarShop/>
      <div className={styles.locationProducts} >
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </div>
    </div>
  );
}
