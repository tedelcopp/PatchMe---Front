import React from 'react';
import Carrusel from "../../components/CarruselHome/CarruselHome";
import Offerts from '../../components/CarruselOfferts/CarruselOfferts';
import Icons from '../../components/Icons/Icons';

export default function Home() {
  return (
    <div style={{ marginTop: '22px' }}>
      <Carrusel />
      <Icons />
      <div  style={{ marginTop: '20px' }}>
      <Offerts />
      </div>
    </div>
  );
}
