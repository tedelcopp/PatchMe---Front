import React, { useEffect, useState } from "react";
import Carrusel from "../../components/CarruselHome/CarruselHome";
import Offerts from "../../components/CarruselOfferts/CarruselOfferts";
import Icons from "../../components/Icons/Icons";
import styles from "../Home/Home.module.css";
import Cart from "../Cart/Cart";

export default function Home() {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "https://i.ibb.co/58Rrmv4/photo-1589810264340-0ce27bfbf751.jpg";
    img.onload = () => {
      setIsBackgroundLoaded(true);
    };
  }, []);

  return (
    <div
      className={
        isBackgroundLoaded
          ? styles.backgroundHome
          : styles.backgroundHomeLoading
      }
    >
      <Carrusel />
      <Icons />
      <div style={{ marginTop: "5px" }}>
        <Offerts />
      </div>
    </div>
  );
}
