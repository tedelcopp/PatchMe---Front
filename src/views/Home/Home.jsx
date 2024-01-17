import React from 'react';
import Carrusel from "../../components/CarruselHome/CarruselHome";
import Offerts from '../../components/CarruselOfferts/CarruselOfferts';
import Map from "../../components/Map/Map";
import Icons from '../../components/Icons/Icons';
import Questions from '../../components/Questions/Questions';

export default function Home() {
  return (
    <div style={{ marginTop: '22px' }}>
      <Carrusel />
      <Icons />
      <Offerts />
      <div  style={{ marginTop: '22px' }}>
      <Questions/>
      </div>
      <div style={{ marginTop: '25px' }}>
        <Map />
      </div>
    </div>
  );
}
