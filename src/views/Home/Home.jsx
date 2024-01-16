import React from 'react';
import Carrusel from "../../components/Carrusel/Carrusel";
import Offerts from '../../components/Offerts/Offerts';
import Map from "../../components/Map/Map";
import Icons from '../../components/Icons/Icons';

export default function Home() {
  return (
    <div style={{ marginTop: '22px' }}>
      <Carrusel />
      <Icons />
      <Offerts />
      <div style={{ marginTop: '22px' }}>
        <Map />
      </div>
    </div>
  );
}
