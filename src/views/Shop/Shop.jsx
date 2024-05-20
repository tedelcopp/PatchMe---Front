import React, { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import SearchBarShop from "../../components/ToolbarShop/SearchBarShop";
import ProductCard from "../../components/ProductCard/ProductCard";
import toast, { Toaster } from "react-hot-toast";
import styles from "./Shop.module.css";
import Spinner from "react-bootstrap/Spinner";

export default function Shop() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [location]);

  const showAllProducts = location.pathname === "/shop";
  const category = showAllProducts
    ? "Todos nuestros patchs, para vos!"
    : getCategoryTitle(location.pathname);

  function getCategoryTitle(pathname) {
    switch (pathname) {
      case "/shop/cocidos":
        return "Patchs Cocidos";
      case "/shop/termoadhesivos":
        return "Patchs Termoadhesivos";
      case "/shop/outlet":
        return "Patchs en Outlet";
      default:
        return "Categoría no disponible";
    }
  }

  return (
    <div className={styles.shopContainer}>
      <div className={styles.container}>
        <ButtonToolbar
          className={`justify-content-between ${styles.shopContent}`}
          aria-label="Toolbar with Button groups"
        >
          <ButtonGroup aria-label="First group">
            <nav className={styles.categoryNav}>
              <Link to="/shop" className="btn btn-secondary">
                All Patches
              </Link>
              <Link to="/shop/cocidos" className="btn btn-secondary">
                Cocidos
              </Link>
              <Link to="/shop/termoadhesivos" className="btn btn-secondary">
                Termoadhesivos
              </Link>
              <Link to="/shop/outlet" className="btn btn-secondary">
                Outlet
              </Link>
            </nav>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      <SearchBarShop />
      <div>
        <h3 className={styles.titleShop}>{category}</h3>
      </div>
      <div className={styles.locationProductsContainer}>
        {loading && (
          <div className={styles.spinnerContainer}>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        {!loading && (
          <div className={styles.locationProducts}>
            {showAllProducts ? (
              <>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </>
            ) : (
              <Outlet />
            )}
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
}
