import React from 'react';
import Carrusel from "../../components/CarruselHome/CarruselHome";
import Offerts from '../../components/CarruselOfferts/CarruselOfferts';
import Icons from '../../components/Icons/Icons';
import styles from "../Home/Home.module.css"

export default function Home() {
  return (
    <div  className={styles.backgroundHome}>
      <Carrusel />
      <Icons />
      <div style={{ marginTop: '5px' }}>
        <Offerts />
      </div>
    </div>
  );
}
