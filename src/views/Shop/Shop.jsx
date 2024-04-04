import React, { useState, useEffect } from "react";
import Toolbar from "../../components/ToolbarShop/Toolbar";
import SearchBarShop from "../../components/ToolbarShop/SearchBarShop";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loader from "../../components/Loader/Loader";
import toast, { Toaster } from 'react-hot-toast';
import styles from "./Shop.module.css";

export default function Shop() {

  const [loading, setLoading] = useState(true);
  const notify = () => toast('Here is your toast.');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.shopContainer}>
      <Toolbar />
      <SearchBarShop />
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.locationProducts}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      )}
    </div>
  );
}
