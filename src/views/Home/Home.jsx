import React from 'react';
import Carrusel from "../../components/CarruselHome/CarruselHome";
import Offerts from '../../components/CarruselOfferts/CarruselOfferts';
import Icons from '../../components/Icons/Icons';

export default function Home() {
  return (
    <div style={{ marginTop: '5px', overflowX: 'hidden' }}>
      <Carrusel />
      <Icons />
      <div style={{ marginTop: '5px' }}>
        <Offerts />
      </div>
    </div>
  );
}
