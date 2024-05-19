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

  return (
    <div className={styles.shopContainer}>
      <div className={styles.container}>
        <ButtonToolbar
          className={`justify-content-between ${styles.shopContent}`}
          aria-label="Toolbar with Button groups"
        >
          <ButtonGroup aria-label="First group">
            <nav className={styles.categoryNav}>
              <Link to="" className="btn btn-secondary">
                All Patches
              </Link>
              <Link to="cocidos" className="btn btn-secondary">
                Cocidos
              </Link>
              <Link to="termoadhesivos" className="btn btn-secondary">
                Termoadhesivos
              </Link>
              <Link to="outlet" className="btn btn-secondary">
                Outlet
              </Link>
            </nav>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      <SearchBarShop />
      <div>
        <h3 className={styles.titleShop}>Todos nuestros patchs, para vos!</h3>
      </div>
      {loading ? (
        <div className="d-flex justify-content-center mt-5">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
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
      <Toaster />
    </div>
  );
}
